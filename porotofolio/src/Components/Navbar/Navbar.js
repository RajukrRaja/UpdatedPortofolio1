import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-links">
          <Link to="/home"><b>Home</b></Link>
          <Link to="/about"><b>About</b></Link>
          <Link to="/contact"><b>Contact</b></Link>
          <Link to="/MyBlog"><b>My Blog</b></Link>
          <Link to="/Services"><b>Services</b></Link>
          <Link to="/Partnership"><b>Partnership</b></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

