import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
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
    <nav className="h-[56px] border-b border-hairline-strong bg-canvas/85 backdrop-blur-md sticky top-0 flex items-center justify-between px-6 lg:px-12 z-40 select-none font-mono">
      <div className="flex items-center space-x-12">
        <Link to="/" className="font-bold text-accent text-[17px] tracking-wide font-mono">
          <span>nazim.riyadh</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-[13px] font-bold">
          <NavLink to="/" className={({ isActive }) => `text-body hover:text-accent transition-colors font-mono py-1 relative ${isActive ? 'nav-link-active text-ink' : ''}`}>home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `text-body hover:text-accent transition-colors font-mono py-1 relative ${isActive ? 'nav-link-active text-ink' : ''}`}>projects</NavLink>
          <NavLink to="/research" className={({ isActive }) => `text-body hover:text-accent transition-colors font-mono py-1 relative ${isActive ? 'nav-link-active text-ink' : ''}`}>research</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-body hover:text-accent transition-colors font-mono py-1 relative ${isActive ? 'nav-link-active text-ink' : ''}`}>about</NavLink>
        </div>
      </div>
      <div className="flex items-center space-x-6 text-[13px] font-bold">
        <button 
          onClick={onToggleSettings}
          className="text-body hover:text-accent py-1 px-3 border border-hairline-strong rounded-none transition-all text-xs font-mono font-bold hidden sm:inline-block bg-surface-soft/40 hover:bg-surface-soft/80"
        >
          settings
        </button>
        <a href="mailto:nazimriyadh001@gmail.com" className="text-body hover:text-accent transition-colors font-mono py-1">contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline-strong bg-canvas text-body py-20 px-6 lg:px-12 mt-20 pb-28 font-mono relative overflow-hidden">
      {/* Trace line details */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none text-[8px] leading-none text-accent">
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-t border-accent" />
        <div className="absolute bottom-4 right-4 w-48 h-48 border-r border-t border-accent" />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Large Text Brand */}
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-ink/10 select-none uppercase mb-4">
          NAZIM LAB
        </h2>
        <p className="text-xs text-mute mb-12 select-none uppercase tracking-widest font-bold">
          built with intention. maintained with care.
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-3 gap-8 md:gap-20 text-xs mb-16 text-left w-full max-w-[600px] mx-auto border-t border-b border-hairline py-8">
          <div>
            <div className="font-bold text-ink mb-3 uppercase tracking-wider">// navigation</div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">about</Link></li>
              <li><a href="mailto:nazimriyadh001@gmail.com" className="hover:text-accent transition-colors">contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-ink mb-3 uppercase tracking-wider">// work</div>
            <ul className="space-y-2">
              <li><Link to="/projects" className="hover:text-accent transition-colors">projects</Link></li>
              <li><Link to="/research" className="hover:text-accent transition-colors">writing</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-ink mb-3 uppercase tracking-wider">// networks</div>
            <ul className="space-y-2">
              <li><a href="https://github.com/NazimRiyadh" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">github</a></li>
              <li><a href="https://linkedin.com/in/Nazim-E-Alam-Riyadh" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">linkedin</a></li>
              <li><a href="https://codeforces.com/profile/nazim.riyadh" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">codeforces</a></li>
            </ul>
          </div>
        </div>

        {/* Small Legal row */}
        <div className="flex flex-wrap gap-4 text-[10px] text-mute mb-6 select-none justify-center">
          <a href="#" className="hover:text-accent">terms</a>
          <span>·</span>
          <a href="#" className="hover:text-accent">privacy</a>
          <span>·</span>
          <a href="#" className="hover:text-accent">cookie settings</a>
        </div>

        <div className="text-[10px] text-mute select-none uppercase tracking-wider font-bold">
          Made in Dhaka // nazim.riyadh.2026
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
