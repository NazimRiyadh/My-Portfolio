import React from 'react';

function SettingsModal({ isOpen, onClose, theme, setTheme, showGrid, setShowGrid, useCursor, setUseCursor }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-canvas/60 backdrop-blur-md z-50 flex items-center justify-center font-mono text-ink p-4 transition-all duration-300">
      <div className="max-w-[460px] w-full bg-surface-card border-2 border-hairline-strong p-8 rounded-none shadow-2xl relative transition-all duration-200">
        
        {/* Header Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-mute hover:text-accent font-bold transition-colors text-xs"
        >
          [ESC] ×
        </button>
        
        {/* Modal Section Header */}
        <h3 className="text-heading-md mb-8 text-accent font-bold tracking-wide flex items-center">
          <span className="w-1.5 h-1.5 bg-accent mr-2 inline-block"></span>
          site.settings()
        </h3>
        
        <div className="space-y-6 text-xs">
          {/* Theme Switcher */}
          <div>
            <label className="block text-white font-bold mb-3 tracking-wider">01. VISUAL MODE</label>
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => setTheme('light')}
                className={`py-2 px-1 border rounded-none text-center transition-all duration-200 ${
                  theme === 'light' 
                    ? 'border-accent text-accent bg-accent/10 font-bold' 
                    : 'border-hairline-strong text-body hover:border-accent/40'
                }`}
              >
                Cream Retro
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`py-2 px-1 border rounded-none text-center transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'border-accent text-accent bg-accent/10 font-bold' 
                    : 'border-hairline-strong text-body hover:border-accent/40'
                }`}
              >
                Deep Console
              </button>
              <button 
                onClick={() => setTheme('matrix')}
                className={`py-2 px-1 border rounded-none text-center transition-all duration-200 ${
                  theme === 'matrix' 
                    ? 'border-accent text-accent bg-accent/10 font-bold' 
                    : 'border-hairline-strong text-body hover:border-accent/40'
                }`}
              >
                Matrix Cyber
              </button>
            </div>
          </div>
 
          {/* Grid Background Toggle */}
          <div className="flex justify-between items-center py-4 border-t border-hairline-strong">
            <div>
              <span className="block text-white font-bold tracking-wider">02. TECH MATRIX GRID</span>
              <span className="text-[11px] text-mute font-sans mt-0.5 block">Display alignment grids.</span>
            </div>
            <button 
              onClick={() => setShowGrid(!showGrid)}
              className={`px-4 py-2 rounded-none border font-bold transition-all duration-200 ${
                showGrid 
                  ? 'border-accent text-accent bg-accent/10' 
                  : 'border-hairline-strong text-body hover:border-accent/30'
              }`}
            >
              {showGrid ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>

          {/* Custom Cursor Toggle */}
          <div className="flex justify-between items-center py-4 border-t border-hairline-strong">
            <div>
              <span className="block text-white font-bold tracking-wider">03. HUD BRACKET CURSOR</span>
              <span className="text-[11px] text-mute font-sans mt-0.5 block">Enable precise mouse crosshair.</span>
            </div>
            <button 
              onClick={() => setUseCursor(!useCursor)}
              className={`px-4 py-2 rounded-none border font-bold transition-all duration-200 ${
                useCursor 
                  ? 'border-accent text-accent bg-accent/10' 
                  : 'border-hairline-strong text-body hover:border-accent/30'
              }`}
            >
              {useCursor ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>

        {/* Modal Submit/Action Button */}
        <button 
          onClick={onClose}
          className="mt-8 w-full btn-primary text-center tracking-wide"
        >
          apply_configs()
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;
