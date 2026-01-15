import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
          className="fixed bottom-12 right-12 z-50 w-12 h-12 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white flex items-center justify-center transition-all duration-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black group"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;