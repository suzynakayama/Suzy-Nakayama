import React from "react";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import "./Projects.css";

function Projects() {
    return (
        <div className="projects" id="projects">
            <h2 className="projects__title">My Projects</h2>
            <ProjectsCard />
        </div>
    );
}

export default Projects;
