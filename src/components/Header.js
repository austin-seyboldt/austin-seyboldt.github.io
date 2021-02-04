import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="main-nav">
          <p className="main-nav-item">home</p>
          <p className="main-nav-item">about</p>
          <p className="main-nav-item">projects</p>
          <p className="main-nav-item">resume</p>
          <p className="main-nav-item">
            <a href="https://www.austinseyboldt.com/" target="_blank">
              photography
            </a>
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
