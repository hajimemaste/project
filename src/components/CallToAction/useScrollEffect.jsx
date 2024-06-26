import { useState, useEffect, useRef } from "react";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (sectionRef.current) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollThreshold = sectionTop - sectionHeight * 0.4;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= scrollThreshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
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

  return { scrolled, sectionRef };
}

export default useScrollEffect;
