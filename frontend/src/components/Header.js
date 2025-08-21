import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/assessment', label: 'Career Assessment' },
    { path: '/explorer', label: 'Career Explorer' },
    { path: '/resources', label: 'Resources' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <GraduationCap size={24} style={{ marginRight: '8px', display: 'inline' }} />
          CareerGuide
        </Link>
        
        <nav>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <motion.li key={item.path} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 