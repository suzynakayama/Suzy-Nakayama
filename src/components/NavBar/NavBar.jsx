import React from "react";
import Scrollspy from "react-scrollspy";
import "./NavBar.css";

function NavBar(props) {
    return (
        <nav className="nav">
            {props.theme === false ? (
                <img
                    src="/images/Logo-black.png"
                    alt="logo"
                    className="nav__logo"
                />
            ) : (
                <img
                    src="/images/Logo-white.png"
                    alt="logo"
                    className="nav__logo"
                />
            )}
            <Scrollspy
                items={["home", "about", "projects", "contact"]}
                currentClassName="is-current"
                offset={0}
                className="nav__list"
            >
                <li className="nav__item">
                    <a href="#intro" className="nav__link">
                        <span>Home</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <span>About Me</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#projects" className="nav__link">
                        <span>Projects</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <span>Contact</span>
                    </a>
                </li>
            </Scrollspy>
            <div className="nav__theme">
                {props.theme === false ? (
                    <i
                        className="fas fa-moon"
                        onClick={props.toggleNightMode}
                    ></i>
                ) : (
                    <i
                        className="fas fa-sun"
                        onClick={props.toggleNightMode}
                    ></i>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
