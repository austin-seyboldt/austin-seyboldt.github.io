import React from "react";
import "../css/Projects.css";
import { project_data } from "../assets/project_data";

const ProjectTile = ({ title, description, img, url, language }) => {
  return (
    <div className="project-tile">
      <a href={url} target="_blank" rel="norefferer">
        <div className="project-tile-container">
          <div className="project-img">
            <img src={img} alt={title} />
          </div>
          <div className="project-info">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="section" id="projects-section">
      <div className="section-container">
        <h2>projects</h2>
        <div className="projects-container">
          {project_data.map((project) => {
            return <ProjectTile {...project} key={project.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
