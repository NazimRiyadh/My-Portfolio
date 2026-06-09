import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ShortcutsModal({ isOpen, onClose }) {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const shortcuts = [
    { section: 'Navigation', items: [
      { label: 'Scroll down', keys: ['j'] },
      { label: 'Scroll up', keys: ['k'] },
      { label: 'Go to top', keys: ['g', 'g'] },
      { label: 'Go to bottom', keys: ['G'] },
    ]},
    { section: 'Quick Jump', items: [
      { label: 'Go home', keys: ['g', 'h'] },
      { label: 'Go to work', keys: ['g', 'p'] },
      { label: 'Go to research', keys: ['g', 'r'] },
      { label: 'Go to writing', keys: ['g', 'w'] },
      { label: 'Go to about', keys: ['g', 'a'] },
      { label: 'Go to contact', keys: ['g', 'c'] },
    ]},
    { section: 'General', items: [
      { label: 'Show this help', keys: ['?'] },
      { label: 'Site settings', keys: ['s'] },
      { label: 'Close overlays', keys: ['Esc'] },
    ]},
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-canvas/90 backdrop-blur-sm z-50 flex items-center justify-center font-mono text-ink p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="max-w-[520px] w-full bg-surface-card border-2 border-hairline-strong p-8 rounded-none relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-mute hover:text-accent font-bold text-xs"
            >
              ×
            </button>
            <h3 className="text-heading-md mb-6 text-accent font-bold">// keyboard.shortcuts</h3>

            <div className="space-y-6">
              {shortcuts.map((group) => (
                <div key={group.section}>
                  <h4 className="text-[10px] text-mute uppercase tracking-wider mb-3 font-bold">{group.section}</h4>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-hairline text-xs">
                        <span className="text-body">{item.label}</span>
                        <div className="flex items-center gap-1">
                          {item.keys.map((key, i) => (
                            <React.Fragment key={key}>
                              {i > 0 && <span className="text-mute text-[10px]">then</span>}
                              <kbd className="bg-surface-soft px-2 py-1 rounded-none text-ink text-[11px] border border-hairline-strong font-bold min-w-[24px] text-center">
                                {key}
                              </kbd>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-mute mt-6 text-center">
              Press <kbd className="bg-surface-soft px-1.5 py-0.5 border border-hairline text-[10px]">?</kbd> anytime to toggle this panel
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ShortcutsModal;
