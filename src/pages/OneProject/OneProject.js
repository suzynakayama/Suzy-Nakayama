import React, { useEffect } from "react";
import ProjectsData from "../../data/ProjectsData";
import "./OneProject.css";
import "../../components/NavBar/NavBar.css";
import { Link } from "react-router-dom";

function OneProject(props) {
    let data = ProjectsData;
    let project = data[props.match.params.id];

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <nav className="nav">
                <Link to="/" className="nav__link">
                    {props.nightMode === false ? (
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
                </Link>
                <ul className="nav__list--special">
                    <Link to="/" className="nav__link">
                        <li className="nav__item">Home</li>
                    </Link>
                </ul>
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
            <div className="project">
                <h2 className="project__name">{project.name}</h2>
                <img
                    className="project__img"
                    src={project.image}
                    alt={project.name}
                />
                <p className="project__description">{project.description}</p>
                <h3 className="project__tech--title">Technologies:</h3>
                <p className="project__tech">{project.technologies}</p>
                <a
                    className="project__url"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Check this project live here!
                </a>
                <a
                    className="project__code"
                    href={project.git}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Check this project code here!
                </a>
            </div>
        </>
    );
}

export default OneProject;
