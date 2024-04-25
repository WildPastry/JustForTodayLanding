import { useState, useEffect } from 'react';

export const useScreenWidth = (breakpoint: number): number => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width >= breakpoint ? width : breakpoint;
};
