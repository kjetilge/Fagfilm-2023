import React, { useState, useEffect } from 'react';

const useResponsiveSlides = () => {
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth < 640) {
        setSlides(3);
      } else if (window.innerWidth < 1024) {
        setSlides(4);
      } else {
        setSlides(5);
      }
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return slides;
};

export default useResponsiveSlides;