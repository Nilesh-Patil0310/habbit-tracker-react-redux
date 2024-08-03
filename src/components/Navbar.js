import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component with links to different routes
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <Link to="/" className="navbar-button">Home</Link>
        <Link to="/week-view" className="navbar-button">Week View</Link>
      </div>
    </nav>
  );
}

export default Navbar;

