import React from 'react';

function SettingsModal({ isOpen, onClose, theme, setTheme, showGrid, setShowGrid, useCursor, setUseCursor }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-canvas/80 backdrop-blur-sm z-50 flex items-center justify-center font-mono text-ink p-4">
      <div className="max-w-[440px] w-full bg-card-bg border border-hairline p-8 rounded-sm shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-mute hover:text-accent font-bold"
        >
          [ESC] ×
        </button>
        <h3 className="text-heading-md mb-6 text-accent">// site.settings</h3>
        
        <div className="space-y-6">
          {/* Theme Switcher */}
          <div>
            <label className="block text-body-strong text-white mb-2">1. Visual Theme</label>
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => setTheme('light')}
                className={`py-2 px-3 text-[12px] border text-center rounded-sm transition-all ${
                  theme === 'light' 
                    ? 'border-accent text-accent bg-accent/10 font-bold' 
                    : 'border-hairline text-body hover:border-hairline-strong'
                }`}
              >
                Cream Light
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`py-2 px-3 text-[12px] border text-center rounded-sm transition-all ${
                  theme === 'dark' 
                    ? 'border-accent text-accent bg-accent/10 font-bold' 
                    : 'border-hairline text-body hover:border-hairline-strong'
                }`}
              >
                Deep Dark
              </button>
              <button 
                onClick={() => setTheme('matrix')}
                className={`py-2 px-3 text-[12px] border text-center rounded-sm transition-all ${
                  theme === 'matrix' 
                    ? 'border-accent text-accent bg-accent/10 font-bold' 
                    : 'border-hairline text-body hover:border-hairline-strong'
                }`}
              >
                Green Matrix
              </button>
            </div>
          </div>

          {/* Grid Background Toggle */}
          <div className="flex justify-between items-center py-3 border-t border-hairline">
            <div>
              <span className="block text-body-strong text-white">2. Technical Grid Overlay</span>
              <span className="text-[12px] text-mute">Toggle the background developer grid matrix.</span>
            </div>
            <button 
              onClick={() => setShowGrid(!showGrid)}
              className={`px-4 py-1.5 rounded-sm border text-[12px] font-bold transition-all ${
                showGrid 
                  ? 'border-accent text-accent bg-accent/5' 
                  : 'border-hairline text-body'
              }`}
            >
              {showGrid ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>

          {/* Custom Cursor Toggle */}
          <div className="flex justify-between items-center py-3 border-t border-hairline">
            <div>
              <span className="block text-body-strong text-white">3. System Fluid Cursor</span>
              <span className="text-[12px] text-mute">Enable fluid dot custom cursor tracking.</span>
            </div>
            <button 
              onClick={() => setUseCursor(!useCursor)}
              className={`px-4 py-1.5 rounded-sm border text-[12px] font-bold transition-all ${
                useCursor 
                  ? 'border-accent text-accent bg-accent/5' 
                  : 'border-hairline text-body'
              }`}
            >
              {useCursor ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="mt-8 w-full btn-primary text-center"
        >
          apply_settings()
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;
