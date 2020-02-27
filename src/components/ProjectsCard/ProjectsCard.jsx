import React from "react";
import "./ProjectsCard.css";
import projectsData from "../../data/ProjectsData";
import { Link } from "react-router-dom";

function ProjectsCard() {
    let data = projectsData;

    return (
        <div className="project-card__container">
            {data.map((project, idx) => {
                return (
                    <figure key={idx} className="project-card__each">
                        <img
                            className="project-card__img"
                            src={project.image}
                            alt={project.name}
                        />
                        <figcaption className="project-card__figcaption">
                            <Link to={`/${idx}`} className="project-card__link">
                                <p className="project-card__name">
                                    {project.name}
                                </p>
                            </Link>
                            <div className="project-card__sites">
                                <a
                                    className="project-card__url"
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Website
                                </a>
                                <a
                                    className="project-card__code"
                                    href={project.git}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Code
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                );
            })}
        </div>
    );
}

export default ProjectsCard;
