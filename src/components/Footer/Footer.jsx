import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <p>
                <span className="footer__span">Developed by</span>
                &nbsp;Suzy Yume&nbsp;
            </p>
            <ul className="social-list">
                <li className="social-list__item">
                    <a
                        className="social-list__link"
                        href="mailto:suzy.nakayama@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <i className="fas fa-at"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a
                        className="social-list__link"
                        href="https://www.instagram.com/suzyyume/"
                        target="_blank"
                        rel="noreferrer noopener"
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
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}
