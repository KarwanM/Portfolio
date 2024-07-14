import { useLoaderData } from "react-router-dom";

const Project = () => {
  const project = useLoaderData();

  return <div>Project {project.title}</div>;
};

export default Project;
