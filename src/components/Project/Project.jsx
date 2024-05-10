import React from "react";

const projects = [1, 2, 3, 4, 5, 6];

const Project = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((number) => {
        return <div>{number}</div>;
      })}
    </div>
  );
};

export default Project;
