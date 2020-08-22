import React from "react";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import "./Projects.css";

const Projects = ({ src }) => (
    <div
    className="projects"
    id="projects"
    style={{ backgroundImage: `url(${src})` }}
    >
        <h2 className="projects__title">My Projects</h2>
        <ProjectsCard />
    </div>
);

export default Projects;
