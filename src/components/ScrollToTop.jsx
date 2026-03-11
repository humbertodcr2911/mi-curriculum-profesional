import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '400px'; // Appear after 400px of scroll
    sentinel.style.height = '1px';
    sentinel.id = 'scroll-to-top-sentinel';
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: [0] }
    );

    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 w-10 h-10 md:w-12 md:h-12 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white flex items-center justify-center transition-all duration-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black group shadow-xl no-print"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;