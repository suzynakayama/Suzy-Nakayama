import React from "react";
import "./ProjectsCard.css";
import projectsData from "../../data/ProjectsData";
import { Link } from "react-router-dom";

const ProjectsCard = () => {
    let data = projectsData;

    return (
        <div className="project-card__container">
            {data.map((project, idx) => {
                return (
                    <Link to={`/${idx}`} key={idx}>
                        <figure className="project-card__each">
                            <img
                                className="project-card__img"
                                src={project.image}
                                alt={project.name}
                            />
                            <figcaption className="project-card__figcaption">
                                <p className="project-card__name">
                                    {project.name}
                                </p>
                            </figcaption>
                        </figure>
                    </Link>
                );
            })}
        </div>
    );
}

export default ProjectsCard;
