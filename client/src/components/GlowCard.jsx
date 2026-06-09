import React, { useRef } from 'react';

function GlowCard({ children, className = '', as: Tag = 'div', ...props }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      className={`glow-card ${className}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default GlowCard;
