import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <p>
      <span className="footer__span">Developed by</span>
      &nbsp;Suzy Nakayama&nbsp;
    </p>
    <ul className="social-list">
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="files/suzynakayama.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="resume"
        >
          <i className="far fa-file-pdf"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://www.instagram.com/suzyyume/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://www.linkedin.com/in/suzy-nakayama/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://github.com/suzynakayama"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="github"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;