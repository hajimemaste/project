import { useState, useEffect, useRef } from "react";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (sectionRef.current) {
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollThreshold = sectionHeight * 0.5;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= scrollThreshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolled, sectionRef };
}

export default useScrollEffect;
