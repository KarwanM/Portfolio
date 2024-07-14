import { Link } from "react-router-dom";

import "./projects.scss";

import portfolio_project from "../../assets/icons/portfolio.png"
import screen_project from "../../assets/icons/screen_project.jpg"
import react_project from "../../assets/icons/react_project.jpg"

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      technologies: ["React", "Nodejs", "Sass"],
      src: portfolio_project,
    },
    {
      id: 2,
      title: "Screen",
      technologies: ["React", "Nodejs", "Sass"],
      src: screen_project,
    },
    {
      id: 3,
      title: "Barbershop",
      technologies: ["React", "Nodejs", "Sass"],
      src: react_project,
    },
  ];

  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-container">
        <ul className="projects">
          {projects.map((project) => {
            return (
              <li key={project.id} className="project">
                <img src={project.src} alt={project.title} />
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
