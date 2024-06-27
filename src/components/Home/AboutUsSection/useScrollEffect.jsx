import { useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";

function useScrollEffect() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledContent, setScrolledContent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (sectionRef.current) {
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollThreshold = sectionHeight * 0.5;
        const scrollContent = window.innerHeight * 0.2;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= scrollThreshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        if (scrollPosition >= scrollContent) {
          setScrolledContent(true);
        }
      }
    }, 0);

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrolledContent);

  return { scrolled, sectionRef };
}

export default useScrollEffect;
