import React, { useState } from 'react';
import './index.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header">
            <div className="header-logo">
                <a href="#home">Abbas</a>
            </div>
            <nav className="header-nav">
                <div 
                    className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
                    onClick={toggleMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;