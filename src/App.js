import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./app.scss";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About"

import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

import ProjectError from "./pages/Project/ProjectError";
import { contactAction } from "./components/Contact/Contact";
import CreateBlog from "./pages/CreateBlog/CreateBlog";

const theme = {
  colors: {
    body: "black",
  },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} action={contactAction}>
      <Route index element={<Home />} errorElement={<ProjectError />} />
      <Route
        path="portfolio"
        element={<Home />}
        errorElement={<ProjectError />}
      />
      <Route path="project">
        <Route
          path=":id"
          element={<Project />}
          errorElement={<ProjectError />}
        />
      </Route>
      <Route path="blog">
        <Route index element={<Blogs />}></Route>
        <Route path="create_blog" element={<CreateBlog />}></Route>
      </Route>
      <Route path="about" element={<About />}></Route>
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
