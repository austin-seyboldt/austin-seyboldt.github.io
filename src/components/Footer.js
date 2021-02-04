import React from "react";
import "../css/Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sub-container">
          <h3>Shoot me an email</h3>
          <a href="mailto:seyboldt.austin@gmail.com">
            seyboldt.austin@gmail.com
          </a>
        </div>
        <div className="footer-sub-container">
          <h3>or check me out elsewhere</h3>
          <ul className="footer-links">
            <li>
              <a href="https://github.com/austin-seyboldt">
                <FaGithub /> Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/austin-seyboldt/">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/austinseyboldtphoto/">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
