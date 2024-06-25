import { useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledHeader, setScrolledHeader] = useState(false);
  const [scrolledClose, setScrolledClose] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (sectionRef.current) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollPosition = window.scrollY;

        const scrollThresholdHeader = sectionTop - sectionHeight * 0.6;
        const scrollThreshold = sectionTop - sectionHeight * 0.4;
        const scrollThresholdClose = sectionTop + sectionHeight * 0.6;

        setScrolled(scrollPosition >= scrollThreshold);
        setScrolledHeader(scrollPosition >= scrollThresholdHeader);
        setScrolledClose(scrollPosition >= scrollThresholdClose);
      }
    }, 200);

    const handleResize = debounce(() => {
      handleScroll();
    }, 200);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { scrolled, scrolledHeader, scrolledClose, sectionRef };
}

export default useScrollEffect;
