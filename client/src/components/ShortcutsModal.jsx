import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShortcutsModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'h') {
        navigate('/');
        onClose();
      } else if (e.key === 'p') {
        navigate('/projects');
        onClose();
      } else if (e.key === 'r') {
        navigate('/research');
        onClose();
      } else if (e.key === 'a') {
        navigate('/about');
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, navigate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-canvas/90 backdrop-blur-sm z-50 flex items-center justify-center font-mono text-ink p-4">
      <div className="max-w-[480px] w-full bg-surface-soft border border-hairline p-8 rounded-sm relative shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-mute hover:text-accent"
        >
          [ESC] ×
        </button>
        <h3 className="text-heading-md mb-6 text-accent">// keyboard.navigation</h3>
        <p className="text-body-md text-mute mb-6">
          Navigate the portfolio instantly using keyboard shortcuts:
        </p>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-hairline">
            <span>Go to Home</span>
            <kbd className="bg-surface-card px-2 py-1 rounded text-white text-[12px] border border-hairline">h</kbd>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-hairline">
            <span>Go to Projects</span>
            <kbd className="bg-surface-card px-2 py-1 rounded text-white text-[12px] border border-hairline">p</kbd>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-hairline">
            <span>Go to Research</span>
            <kbd className="bg-surface-card px-2 py-1 rounded text-white text-[12px] border border-hairline">r</kbd>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-hairline">
            <span>Go to About</span>
            <kbd className="bg-surface-card px-2 py-1 rounded text-white text-[12px] border border-hairline">a</kbd>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Close Help</span>
            <kbd className="bg-surface-card px-2 py-1 rounded text-white text-[12px] border border-hairline">ESC</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortcutsModal;
