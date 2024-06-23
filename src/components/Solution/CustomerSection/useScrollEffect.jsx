import { useState, useEffect, useRef } from "react";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledClose, setScrolledClose] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (sectionRef.current) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollThreshold = sectionTop - sectionHeight * 0.7;
        const scrollThresholdClose = sectionTop + sectionHeight * 0.8;

        const scrollPosition = window.scrollY;

        if (scrollPosition >= scrollThreshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        if (scrollPosition >= scrollThresholdClose) {
          setScrolledClose(true);
        } else {
          setScrolledClose(false);
        }
      }
    }

    function handleResize() {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { scrolled, scrolledClose, sectionRef };
}

export default useScrollEffect;
