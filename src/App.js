import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./app.scss";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

import Project from "./pages/Project/Project";
import ProjectError from "./pages/Project/ProjectError";
import { contactAction } from "./components/Contact/Contact";

const theme = {
  colors: {
    body: "black",
  },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} action={contactAction}>
      <Route index element={<Home />} errorElement={<ProjectError />} />
      <Route path="portfolio" element={<Home />} errorElement={<ProjectError />} />
      <Route path="projects">
        <Route
          path=":id"
          element={<Project />}
          errorElement={<ProjectError />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
