import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function StatusBar({ onToggleShortcuts, onToggleSettings, theme }) {
  const location = useLocation();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [trackIndex, setTrackIndex] = useState(0);

  const tracks = [
    'Omen - The Prodigy',
    'Half-Life OST - Kelly Bailey',
    'Doom Gate - Bobby Prince',
    'Resonance - Home'
  ];

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

  // Cycle tracks occasionally to feel interactive
  useEffect(() => {
    const interval = setInterval(() => {
      setTrackIndex((prev) => (prev + 1) % tracks.length);
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  const getPathLabel = () => {
    switch (location.pathname) {
      case '/': return '// home.init';
      case '/projects': return '// work.projects';
      case '/research': return '// academic.research';
      case '/about': return '// human.entity';
      default: return '// system';
    }
  };

  const getModeLabel = () => {
    switch (location.pathname) {
      case '/': return 'VISITOR';
      case '/projects': return 'EXPLORING';
      case '/research': return 'READING';
      case '/about': return 'INSPECTING';
      default: return 'GUEST';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[38px] bg-canvas border-t border-hairline-strong text-[11px] px-4 flex items-center justify-between z-50 select-none font-mono text-mute shadow-lg">
      <div className="flex items-center space-x-3">
        {/* Active Mode */}
        <span className="flex items-center text-accent bg-surface-soft px-2.5 py-0.5 rounded-none border border-hairline-strong uppercase text-[9px] font-bold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping mr-2"></span>
          [MODE: {getModeLabel()}]
        </span>
        <span className="text-hairline-strong hidden sm:inline">|</span>
        <span className="text-white hover:text-accent cursor-pointer transition-colors hidden sm:inline" onClick={onToggleSettings}>
          theme: <strong className="text-accent uppercase font-bold">{theme}</strong>
        </span>
        <span className="text-hairline-strong">|</span>
        <span className="text-accent-hover font-semibold">{getPathLabel()}</span>
      </div>

      {/* Simulated Media Player */}
      <div className="hidden md:flex items-center space-x-2.5 text-mute truncate max-w-[280px] text-[10px] bg-surface-soft px-3 py-1 border border-hairline border-dashed">
        <span className="text-accent text-[12px] animate-pulse">▶</span>
        <span className="truncate tracking-wide text-ink">{tracks[trackIndex]}</span>
      </div>

      <div className="flex items-center space-x-5">
        {/* Help shortcuts */}
        <button 
          onClick={onToggleShortcuts} 
          className="hover:text-accent transition-colors flex items-center text-[10px]"
        >
          <kbd className="bg-surface-soft px-1.5 py-0.5 rounded-none border border-hairline mr-1.5 text-white/90 font-sans shadow-sm font-bold">?</kbd> HELP
        </button>

        {/* Settings */}
        <button 
          onClick={onToggleSettings} 
          className="hover:text-accent transition-colors flex items-center text-[10px]"
        >
          <kbd className="bg-surface-soft px-1.5 py-0.5 rounded-none border border-hairline mr-1.5 text-white/90 font-sans shadow-sm font-bold">S</kbd> SETTINGS
        </button>

        <span className="text-hairline-strong">|</span>

        {/* Visual scroll bar progress indicator */}
        <div className="flex items-center space-x-2.5 text-[10px]">
          <span>SCROLL: {scrollPercent}%</span>
          <div className="w-[60px] h-[5px] bg-surface-soft rounded-none overflow-hidden border border-hairline shadow-inner">
            <div 
              className="h-full bg-accent transition-all duration-150" 
              style={{ width: `${scrollPercent}%` }} 
            />
          </div>
        </div>

        <span className="text-hairline-strong">|</span>

        {/* Realtime clock */}
        <span className="text-white font-medium tracking-wider tabular-nums">{currentTime}</span>
      </div>
    </div>
  );
}

export default StatusBar;
