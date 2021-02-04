import React, { useState, useEffect } from "react";
import "../css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateIsMenuOpen = (e) => {
    console.log(e.target);
    if (e.target.innerWidth > 700) {
      setIsMenuOpen(false);
    }
  };

  // closes the drop down menu if user resizes from mobile to
  // desktop and back
  useEffect(() => {
    window.addEventListener("resize", updateIsMenuOpen);
    return () => {
      window.removeEventListener("resize", updateIsMenuOpen);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <nav className="main-nav">
          <div
            className="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="mobile-menu-bar"></span>
            <span className="mobile-menu-bar"></span>
            <span className="mobile-menu-bar"></span>
          </div>
          <ul className={`main-nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="main-nav-item">
              <a href="/">home</a>
            </li>
            <li className="main-nav-item">
              <a href="/about">about</a>
            </li>
            <li className="main-nav-item">
              <a href="/projects">projects</a>
            </li>
            <li className="main-nav-item">
              <a href="/resume">resume</a>
            </li>
            <li className="main-nav-item">
              <a
                href="https://www.austinseyboldt.com/"
                target="_blank"
                rel="noreferrer"
              >
                photography
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
