import React from 'react';
import './navbar.css';
function Navbar() {
  return (
    <header className="App-header">
      <nav className="navbar">
      <div className="logo">
        <img src="LLSLogo.png" alt="Logo" />
      </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/CS">ECS</a></li>
          <li><a href="/JSOM">JSOM</a></li>
          <li><a href="#premed">Pre-Health</a></li>
          <li><a href="#prelaw">Pre-Law</a></li>
          <li><a href="ATECH">ATECH</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
