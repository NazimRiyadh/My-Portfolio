import React, { useEffect, useRef, useState } from 'react';

function SectionNumber({ number, align = 'right', className = '' }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      setOffset((center - viewCenter) * 0.04);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const alignClass = align === 'left' ? 'left-0' : 'right-0';

  return (
    <div
      ref={ref}
      className={`absolute ${alignClass} top-0 font-bold text-background-number text-8xl md:text-[12rem] select-none pointer-events-none leading-none z-0 transition-transform duration-100 ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
      aria-hidden="true"
    >
      {number}
    </div>
  );
}

export default SectionNumber;
