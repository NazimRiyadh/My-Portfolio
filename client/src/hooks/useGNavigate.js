import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ROUTES = {
  h: '/',
  p: '/projects',
  r: '/research',
  w: '/writing',
  a: '/about',
  c: 'mailto:nazimriyadh001@gmail.com',
};

export function useGNavigate() {
  const navigate = useNavigate();
  const pendingG = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const clearPending = () => {
      pendingG.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === 'g') {
        if (pendingG.current) {
          e.preventDefault();
          clearPending();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        pendingG.current = true;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(clearPending, 800);
        return;
      }

      if (pendingG.current && ROUTES[e.key]) {
        e.preventDefault();
        clearPending();
        const dest = ROUTES[e.key];
        if (dest.startsWith('mailto:')) {
          window.location.href = dest;
        } else {
          navigate(dest);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      if (e.key === 'G') {
        e.preventDefault();
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        return;
      }

      if (e.key === 'j') {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
        return;
      }

      if (e.key === 'k') {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight * 0.75, behavior: 'smooth' });
        return;
      }

      if (e.key === 'Escape') return;
      clearPending();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [navigate]);
}
