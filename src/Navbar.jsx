import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Optional: Add styling for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Justen San Gabriel</Link>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/About" className="navbar-link">About</Link></li>
          <li><Link to="/Hobbies" className="navbar-link">Hobbies</Link></li> {/* Added Hobbies link */}
          <li><Link to="/Contact" className="navbar-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
