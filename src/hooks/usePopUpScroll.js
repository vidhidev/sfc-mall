import { useEffect } from "react";

export default function usePopUpScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".pop-up-scroll");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    } else {
      // Fallback
      const reveal = () => {
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (
            rect.top < window.innerHeight * 0.85 &&
            rect.bottom > window.innerHeight * 0.15
          ) {
            el.classList.add("visible");
          }
        });
      };

      window.addEventListener("scroll", reveal);
      window.addEventListener("resize", reveal);
      reveal();

      return () => {
        window.removeEventListener("scroll", reveal);
        window.removeEventListener("resize", reveal);
      };
    }
  }, []);
}
