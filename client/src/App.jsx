import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Research from './pages/Research';
import About from './pages/About';
import StatusBar from './components/StatusBar';
import ShortcutsModal from './components/ShortcutsModal';
import SettingsModal from './components/SettingsModal';
import CustomCursor from './components/CustomCursor';

function Navbar({ onToggleSettings }) {
  return (
    <nav className="h-[56px] border-b border-hairline bg-canvas/80 backdrop-blur-md sticky top-0 flex items-center justify-between px-6 lg:px-12 z-40 select-none font-mono">
      <div className="flex items-center space-x-8">
        <Link to="/" className="font-bold text-accent text-[18px] tracking-widest flex items-center space-x-2 font-mono">
          <span>&lt;NAZIM.RIYADH /&gt;</span>
        </Link>
        <div className="hidden md:flex space-x-6 text-[14px]">
          <Link to="/projects" className="text-body hover:text-accent transition-colors font-mono">/projects</Link>
          <Link to="/research" className="text-body hover:text-accent transition-colors font-mono">/research</Link>
          <Link to="/about" className="text-body hover:text-accent transition-colors font-mono">/about</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={onToggleSettings}
          className="text-body hover:text-accent p-2 border border-hairline rounded-sm transition-all text-xs font-mono hidden sm:inline-block"
        >
          [settings]
        </button>
        <a href="mailto:nazimriyadh001@gmail.com" className="btn-primary font-mono">contact()</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-soft text-body text-caption-md py-[32px] px-6 lg:px-12 mt-section pb-[64px] font-mono">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://github.com/NazimRiyadh" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">github</a>
          <span className="text-ash">|</span>
          <a href="https://linkedin.com/in/Nazim-E-Alam-Riyadh" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">linkedin</a>
          <span className="text-ash">|</span>
          <a href="https://codeforces.com/profile/nazim.riyadh" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">codeforces</a>
        </div>
        <div className="text-mute text-right md:text-left">
          ©2026 Riyadh. Stack: React 19 + Tailwind.
        </div>
      </div>
    </footer>
  );
}

function AppContent() {
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showGrid, setShowGrid] = useState(true);
  const [useCursor, setUseCursor] = useState(true);

  // Sync theme changes with html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Global keydown listeners for shortcuts help and settings panels
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Toggle shortcuts help when pressing '?' key
      if (e.key === '?') {
        setIsShortcutsOpen((prev) => !prev);
      }
      // Toggle settings panel when pressing 's' key (without focus on inputs)
      if (e.key === 's' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        setIsSettingsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-canvas text-body selection:bg-accent selection:text-canvas transition-colors duration-300 ${showGrid ? 'tech-grid' : ''}`}>
      {useCursor && <CustomCursor />}
      <Navbar onToggleSettings={() => setIsSettingsOpen(true)} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <StatusBar 
        onToggleShortcuts={() => setIsShortcutsOpen(true)} 
        onToggleSettings={() => setIsSettingsOpen(true)}
        theme={theme}
      />
      <ShortcutsModal isOpen={isShortcutsOpen} onClose={() => setIsShortcutsOpen(false)} />
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        theme={theme}
        setTheme={setTheme}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
        useCursor={useCursor}
        setUseCursor={setUseCursor}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
