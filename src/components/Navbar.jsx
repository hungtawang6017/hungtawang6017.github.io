import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const t = content[language].nav;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container glass-pill">
                <NavLink to="/" className="nav-logo">Portfolio</NavLink>

                <button 
                    className="mobile-menu-toggle" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} end>{t.home}</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.about}</NavLink></li>
                    <li><NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.skills}</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.projects}</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.contact}</NavLink></li>
                    <li className="nav-divider"></li>
                    <li className="nav-actions">
                        <button onClick={toggleLanguage} className="theme-toggle" aria-label="Toggle language">
                            <span className="lang-text">{language === 'zh' ? 'EN' : 'ZH'}</span>
                        </button>
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
