export const projectsLoader = async () => {
  const res = await fetch("http://localhost:4000/projects");

  if (!res.ok) {
    throw Error("Could not fetch projects!");
  }

  return res.json();
};

export const projectLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/projects/" + id);

  if (!res.ok) {
    throw Error("Could not find this project!");
  }
  return res.json();
};