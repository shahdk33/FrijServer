import React from 'react'
import '../App.css'; // Import CSS for styling
import logo from '../assets/frij.png'
import foodImage from '../assets/HomeImage.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>            {/* Navbar */}
    <nav className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo-img" /> {/* Logo image */}
        </div>

        <div className="navbar-links">
            <Link to="/">Find recipes</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/about-us">About us</Link>
        </div>
    </nav></div>
  )
}

export default NavBar