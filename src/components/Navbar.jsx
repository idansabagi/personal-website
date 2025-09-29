import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX, FiLinkedin } from 'react-icons/fi';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
    }`}
  >
    {children}
  </NavLink>
);

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/40 border-b border-gray-200/60 dark:border-white/10">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-primary-500 to-primary-700" />
          <span className="font-semibold">Idan Sabagi</span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Data Scientist</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/specialties">Specialties</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/resume">Resume</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/idan-sabagi/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10">
            <FiLinkedin className="h-5 w-5" />
          </a>
          <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Toggle theme">
            {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Toggle menu">
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200/60 dark:border-white/10">
          <div className="container py-2 flex flex-col">
            <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
            <NavItem to="/about" onClick={() => setOpen(false)}>About</NavItem>
            <NavItem to="/specialties" onClick={() => setOpen(false)}>Specialties</NavItem>
            <NavItem to="/projects" onClick={() => setOpen(false)}>Projects</NavItem>
            <NavItem to="/resume" onClick={() => setOpen(false)}>Resume</NavItem>
            <NavItem to="/contact" onClick={() => setOpen(false)}>Contact</NavItem>
          </div>
        </div>
      )}
    </header>
  );
}
