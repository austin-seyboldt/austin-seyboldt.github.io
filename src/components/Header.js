import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  const onWindowResize = (e) => {
    if (e.target.innerWidth > 700) {
      setIsMenuOpen(false);
    }
    setScrollOffset(getScrollOffset());
  };

  const getScrollOffset = () => {
    const headerElement = document
      .getElementById("header")
      .getBoundingClientRect();

    return headerElement.top - headerElement.bottom;
  };

  // closes the drop down menu if user resizes from mobile to
  // desktop and back
  // updates scroll offset
  useEffect(() => {
    setScrollOffset(getScrollOffset());
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);
  console.log(scrollOffset);
  return (
    <header className="header" id="header">
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
              <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                onClick={() => setIsMenuOpen(false)}
              >
                home
              </Link>
            </li>
            <li className="main-nav-item">
              <Link
                activeClass="active"
                to="intro-section"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </Link>
            </li>
            <li className="main-nav-item">
              <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                onClick={() => setIsMenuOpen(false)}
              >
                projects
              </Link>
            </li>
            <li className="main-nav-item">
              <a href="/resume">resume</a>
            </li>
            <li className="main-nav-item">
              <a
                href="https://www.austinseyboldt.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
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
