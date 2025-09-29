import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Specialties from './pages/Specialties';
import Resume from './pages/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode preference on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
