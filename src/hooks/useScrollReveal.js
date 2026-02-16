import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    let observer;

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
};
