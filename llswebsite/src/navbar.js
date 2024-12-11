import React from 'react';

function Navbar() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/CS">ECS</a></li>
          <li><a href="#jsom">JSOM</a></li>
          <li><a href="#premed">Pre-Med</a></li>
          <li><a href="#prelaw">Pre-Law</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
