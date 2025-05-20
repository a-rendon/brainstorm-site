import React from 'react';
import logo from '../styles/brainstorm logo.png'; 

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Brainstorm Logo" className="logo-image" />
          </div>
          <h1>Brainstorm</h1>
        </div>
        
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Work</a></li>
        {/*    <li><a href="#resources">Resources</a></li> */}
            <li><a href="#contact" className="cta-button">Get Started</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
