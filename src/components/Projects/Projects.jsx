import { Link } from "react-router-dom";

import "./projects.scss";

import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-container">
        <ul className="projects">
          {projects.map((project) => {
            return (
              <li key={project.id} className="project">
                <img src={project.img} alt={project.title} />
                <Link to={"projects/" + project.id}>{project.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
