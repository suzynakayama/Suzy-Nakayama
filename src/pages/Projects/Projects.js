import React from "react";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import "./Projects.css";

const Projects = ({ src, cannotUseWebp }) => (
    <div
    className="projects"
    id="projects"
    style={{ backgroundImage: `url(${src})` }}
    >
    <h2 className="projects__title">My Projects</h2>
        <ProjectsCard cannotUseWebp={ cannotUseWebp }/>
    </div>
);

export default Projects;
