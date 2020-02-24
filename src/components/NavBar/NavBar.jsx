import React from "react";
import ScrollspyNav from "react-scrollspy-nav";
import "./NavBar.css";

function NavBar(props) {
    return (
        <div className="nav">
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
            <ScrollspyNav
                scrollTargetIds={["home", "about", "projects", "contact"]}
                activeNavClass="is-active"
                scrollDuration="600"
                headerBackground="true"
            >
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="/" className="nav__link">
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
                            <span>Project</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </ScrollspyNav>
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
        </div>
    );
}

export default NavBar;
