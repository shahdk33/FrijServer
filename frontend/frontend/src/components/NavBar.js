import React, { useState } from 'react';
import '../App.css'; // Import CSS for styling
import logo from '../assets/frij.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" /> {/* Logo image */}
        </div>

        <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Find recipes</Link>
          <Link to="/how-it-works" onClick={() => setIsOpen(false)}>How it works</Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)}>About us</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
