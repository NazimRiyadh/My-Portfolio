import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIALS = [
  {
    key: 'email',
    label: 'nazimriyadh001@gmail.com',
    prefix: 'MAIL  //  ',
    href: 'mailto:nazimriyadh001@gmail.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    accent: 'accent'
  },
  {
    key: 'github',
    label: 'github.com/NazimRiyadh',
    prefix: 'GIT   //  ',
    href: 'https://github.com/NazimRiyadh',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    accent: 'accent'
  },
  {
    key: 'linkedin',
    label: 'linkedin.com/in/Nazim-E-Alam-Riyadh',
    prefix: 'NET   //  ',
    href: 'https://linkedin.com/in/Nazim-E-Alam-Riyadh',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    accent: 'accent'
  },
  {
    key: 'codeforces',
    label: 'codeforces.com/profile/nazim.riyadh',
    prefix: 'CF    //  ',
    href: 'https://codeforces.com/profile/nazim.riyadh',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z"/>
      </svg>
    ),
    accent: 'accent-signal'
  },
  {
    key: 'leetcode',
    label: 'leetcode.com/u/NazimRiyadh',
    prefix: 'DSA   //  ',
    href: 'https://leetcode.com/u/NazimRiyadh',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    accent: 'accent'
  },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 32, mass: 0.8 }
  },
  exit: { 
    opacity: 0, y: 16, scale: 0.97,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.08 + i * 0.06, duration: 0.28, ease: [0.22, 1, 0.36, 1] }
  })
};

function ConnectModal({ isOpen, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{ background: 'rgba(10,10,10,0.72)', backdropFilter: 'blur(6px)' }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.22 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="w-full max-w-[520px] border border-hairline-strong bg-canvas font-mono relative overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Terminal header bar */}
            <div className="h-9 bg-surface-soft border-b border-hairline-strong px-4 flex items-center justify-between select-none">
              <div className="flex space-x-1.5">
                <button
                  onClick={onClose}
                  className="w-2.5 h-2.5 rounded-full bg-accent-signal opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Close"
                />
                <div className="w-2.5 h-2.5 rounded-full bg-hairline-strong opacity-40" />
                <div className="w-2.5 h-2.5 rounded-full bg-hairline-strong opacity-40" />
              </div>
              <span className="text-[9px] text-mute uppercase tracking-widest">connection_hub.init</span>
              <div className="w-16" />
            </div>

            {/* Modal body */}
            <div className="p-6">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.3 }}
                className="mb-6"
              >
                <div className="text-[10px] text-mute mb-2 uppercase tracking-widest">// establish.connection</div>
                <h2 className="text-xl font-bold text-ink leading-tight">Connect with Nazim</h2>
                <p className="text-[11px] text-mute mt-1 leading-relaxed">
                  Reach out via any channel below. Response time: usually within 24h.
                </p>
              </motion.div>

              {/* Social links */}
              <div className="space-y-1">
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={social.key}
                    href={social.href}
                    target={social.key !== 'email' ? '_blank' : undefined}
                    rel={social.key !== 'email' ? 'noreferrer' : undefined}
                    custom={i}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-3 px-3 py-2.5 border border-transparent hover:border-hairline-strong hover:bg-surface-soft/50 transition-all duration-200 group"
                  >
                    <span className={`text-${social.accent} shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      {social.icon}
                    </span>
                    <span className="text-[10px] text-mute font-mono shrink-0">{social.prefix}</span>
                    <span className="text-[11px] text-body group-hover:text-accent transition-colors duration-200 truncate">
                      {social.label}
                    </span>
                    <span className="ml-auto text-[10px] text-mute group-hover:text-accent transition-colors shrink-0">→</span>
                  </motion.a>
                ))}
              </div>

              {/* Footer status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-4 border-t border-hairline flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-[10px] text-mute">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-signal animate-pulse" />
                  <span>Limited Availability · Q2 2026</span>
                </div>
                <button
                  onClick={onClose}
                  className="text-[10px] text-mute hover:text-ink transition-colors px-2 py-1 border border-transparent hover:border-hairline"
                >
                  [ESC] close
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ConnectModal;
