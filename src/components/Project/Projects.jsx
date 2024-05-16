import React from "react";

import "./projects.scss";

const projects = [1, 2, 3, 4, 5, 6];

const Project = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((number) => {
          return <div key={number}>{number}</div>;
        })}
      </div>
    </div>
  );
};

export default Project;
