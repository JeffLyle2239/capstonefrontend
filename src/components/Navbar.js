import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          the Gilded Leash
        </NavLink>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <ul className={`right ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/Vision">the Vision</Link>
          </li>
          <li>
            <Link to="/Actors">the Actors</Link>
          </li>
          <li>
            <Link to="/Service">the Service</Link>
          </li>
          <li>
            <Link to="/Gallery">the Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;