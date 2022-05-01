import React from "react";
import IconGithub from "./icons/github";
import IConLinkedin from "./icons/linkedin";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="footer-container">
          <a href="https://github.com/emmanuelorobinson" target='_blank' rel="noreferrer">
            <IconGithub />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-robinson-1a22171b0/" target='_blank' rel="noreferrer">
            <IConLinkedin />
          </a>
        </div>
        <p>Designed Built by Emmanuel Robinson</p>
      </footer>
    </div>
  );
};

export default Footer;
