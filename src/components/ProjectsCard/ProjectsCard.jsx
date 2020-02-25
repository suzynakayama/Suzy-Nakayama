import React from "react";
import "./ProjectsCard.css";
import projectsData from "../../data/ProjectsData";

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
                            <p className="project-card__name">{project.name}</p>
                            <a className="project-card__url" href={project.url}>
                                Website
                            </a>
                            <a
                                className="project-card__code"
                                href={project.git}
                            >
                                Code
                            </a>
                        </figcaption>
                    </figure>
                );
            })}
        </div>
    );
}

export default ProjectsCard;
