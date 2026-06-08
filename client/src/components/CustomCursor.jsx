import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over links, buttons, or interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('glow-card');
      
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer fluid ring */}
      <div 
        className="fixed pointer-events-none rounded-full border border-accent/40 z-[9999] transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: hovered ? '36px' : '20px',
          height: hovered ? '36px' : '20px',
          backgroundColor: hovered ? 'var(--action-primary)' : 'transparent',
          opacity: hovered ? 0.15 : 0.8,
        }}
      />
      {/* Inner solid dot */}
      <div 
        className="fixed pointer-events-none rounded-full bg-accent z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: hovered ? '6px' : '4px',
          height: hovered ? '6px' : '4px',
        }}
      />
    </>
  );
}

export default CustomCursor;
