import { useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (sectionRef.current) {
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollThreshold = sectionHeight * 0.5;
        const scrollPosition = window.scrollY;

        setScrolled(scrollPosition >= scrollThreshold);
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolled, sectionRef };
}

export default useScrollEffect;
