import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ scrolledForce, onScrollToTop }) => {
  return (
    <>
      {scrolledForce && (
        <button
          onClick={onScrollToTop}
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