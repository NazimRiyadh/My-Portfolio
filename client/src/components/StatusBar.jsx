import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function StatusBar({ onToggleShortcuts, onToggleSettings, theme }) {
  const location = useLocation();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  // Track scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      if (docHeight > 0) {
        setScrollPercent(Math.round((scrollPos / docHeight) * 100));
      } else {
        setScrollPercent(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track current time
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getPathLabel = () => {
    switch (location.pathname) {
      case '/': return '// home';
      case '/projects': return '// projects';
      case '/research': return '// research';
      case '/about': return '// about';
      default: return '// system';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[36px] bg-surface-dark border-t border-hairline text-[11px] px-4 flex items-center justify-between z-50 select-none font-mono text-mute">
      <div className="flex items-center space-x-3">
        {/* Active Mode */}
        <span className="flex items-center text-accent bg-surface-card px-2 py-0.5 rounded-sm border border-hairline uppercase text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse mr-1.5"></span>
          NORMAL
        </span>
        <span className="text-ash">|</span>
        <span className="text-white hover:text-accent cursor-pointer transition-colors" onClick={onToggleSettings}>
          theme: <strong className="text-accent uppercase font-bold">{theme}</strong>
        </span>
        <span className="text-ash">|</span>
        <span className="text-white font-medium">{getPathLabel()}</span>
      </div>

      {/* Simulated Media Player */}
      <div className="hidden lg:flex items-center space-x-2 text-mute truncate max-w-[300px]">
        <span className="text-accent text-[12px] animate-bounce">♫</span>
        <span className="truncate">lofi_beats_for_systems_coding.mp3</span>
      </div>

      <div className="flex items-center space-x-6">
        {/* Help shortcuts */}
        <button 
          onClick={onToggleShortcuts} 
          className="hover:text-accent transition-colors flex items-center"
        >
          <kbd className="bg-surface-card px-1.5 py-0.5 rounded text-[10px] border border-hairline mr-1 text-white">?</kbd> HELP
        </button>

        {/* Settings */}
        <button 
          onClick={onToggleSettings} 
          className="hover:text-accent transition-colors flex items-center"
        >
          <kbd className="bg-surface-card px-1.5 py-0.5 rounded text-[10px] border border-hairline mr-1 text-white">S</kbd> SETTINGS
        </button>

        <span className="text-ash">|</span>

        {/* Visual scroll bar progress indicator */}
        <div className="flex items-center space-x-3">
          <span>SCROLL: {scrollPercent}%</span>
          <div className="w-[60px] h-[4px] bg-surface-card rounded-full overflow-hidden border border-hairline">
            <div 
              className="h-full bg-accent transition-all duration-100" 
              style={{ width: `${scrollPercent}%` }} 
            />
          </div>
        </div>

        <span className="text-ash">|</span>

        {/* Realtime clock */}
        <span className="text-white tabular-nums">{currentTime}</span>
      </div>
    </div>
  );
}

export default StatusBar;
