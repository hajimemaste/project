import { useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledHeader, setScrolledHeader] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (sectionRef.current) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollThresholdHeader = sectionTop - sectionHeight * 0.6;
        const scrollThreshold = sectionTop - sectionHeight * 0.4;
        const scrollPosition = window.scrollY;

        setScrolled(scrollPosition >= scrollThreshold);
        setScrolledHeader(scrollPosition >= scrollThresholdHeader);
      }
    }, 200);

    const handleResize = debounce(() => {
      handleScroll();
    }, 200);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll(); // Kiểm tra trạng thái ban đầu

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { scrolled, scrolledHeader, sectionRef };
}

export default useScrollEffect;
