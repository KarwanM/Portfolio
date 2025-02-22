import { useRouteError } from "react-router-dom";

const ProjectError = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error: {error.message}</h1>
    </div>
  );
};

export default ProjectError;
