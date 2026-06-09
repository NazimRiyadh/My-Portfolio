import { useEffect, useRef } from 'react';

function CustomCursor() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMove = (e) => {
      wrap.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        'a, button, [role="button"], input, textarea, select, label'
      );
      wrap.classList.toggle('is-hover', !!interactive);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <div ref={wrapRef} className="custom-cursor hidden md:block" aria-hidden="true">
      <div className="custom-cursor-dot" />
    </div>
  );
}

export default CustomCursor;
