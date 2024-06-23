import { useState, useEffect, useRef } from "react";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledHeader, setScrolledHeader] = useState(false);
  const [scrolledClose, setScrolledClose] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (sectionRef.current) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollThresholdHeader = sectionTop - sectionHeight * 0.6;
        const scrollThreshold = sectionTop - sectionHeight * 0.4;
        const scrollThresholdClose = sectionTop + sectionHeight * 0.6;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= scrollThreshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        if (scrollPosition >= scrollThresholdHeader) {
          setScrolledHeader(true);
        } else {
          setScrolledHeader(false);
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

  return { scrolled, scrolledHeader, scrolledClose, sectionRef };
}

export default useScrollEffect;
