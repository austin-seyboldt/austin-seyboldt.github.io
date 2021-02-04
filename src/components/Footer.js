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
          <h3 id="footer-links-header">or check me out elsewhere</h3>
          <ul className="footer-links">
            <li className="footer-link">
              <a
                href="https://github.com/austin-seyboldt"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> <span>Github</span>
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://www.linkedin.com/in/austin-seyboldt/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://www.instagram.com/austinseyboldtphoto/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram /> <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
