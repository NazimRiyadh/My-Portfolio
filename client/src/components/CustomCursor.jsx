import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('glow-card') ||
        target.getAttribute('role') === 'button';
      
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Lerp tracking for the trailing bracket
  useEffect(() => {
    let animationFrameId;
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust speed factor for trailing latency
        const speed = 0.15; 
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    
    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      {/* Outer corner-bracket target cursor */}
      <div 
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-300 ease-out"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          width: hovered ? '38px' : '22px',
          height: hovered ? '38px' : '22px',
          transform: `translate(-50%, -50%) rotate(${hovered ? '45deg' : '0deg'})`,
        }}
      >
        {/* Top Left Bracket Corner */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-accent" />
        {/* Top Right Bracket Corner */}
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-accent" />
        {/* Bottom Left Bracket Corner */}
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-accent" />
        {/* Bottom Right Bracket Corner */}
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-accent" />
      </div>

      {/* Inner precise dot */}
      <div 
        className="fixed pointer-events-none rounded-full bg-accent z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: hovered ? '8px' : '4px',
          height: hovered ? '8px' : '4px',
          backgroundColor: hovered ? 'var(--accent-signal)' : 'var(--action-primary)',
        }}
      />
    </>
  );
}

export default CustomCursor;
