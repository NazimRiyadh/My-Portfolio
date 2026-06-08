import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Research from './pages/Research';
import About from './pages/About';

function Navbar() {
  return (
    <nav className="h-[56px] border-b border-hairline bg-canvas flex items-center justify-between px-6 lg:px-12">
      <div className="flex items-center space-x-8">
        {/* Mock ASCII Logo */}
        <Link to="/" className="font-bold text-ink whitespace-pre font-mono leading-none">
{`N A Z I M
 L  A  B`}
        </Link>
        <div className="hidden md:flex space-x-6 text-body-strong">
          <Link to="/projects" className="text-ink hover:text-accent">Projects</Link>
          <Link to="/research" className="text-ink hover:text-accent">Research</Link>
          <Link to="/about" className="text-ink hover:text-accent">About</Link>
        </div>
      </div>
      <div>
        <a href="mailto:nazimriyadh001@gmail.com" className="btn-primary">Contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas text-body text-caption-md py-[32px] px-6 lg:px-12 mt-section">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://github.com/NazimRiyadh" target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
          <span className="text-hairline-strong">|</span>
          <a href="https://linkedin.com/in/Nazim-E-Alam-Riyadh" target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
          <span className="text-hairline-strong">|</span>
          <a href="https://codeforces.com/profile/nazim.riyadh" target="_blank" rel="noreferrer" className="hover:text-ink">Codeforces</a>
        </div>
        <div className="text-mute">
          ©2026 Nazim-E-Alam Riyadh. System Online.
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
