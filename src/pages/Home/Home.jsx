import React from "react";

import About from "../../components/About/About";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";

import "./home.scss";

const Home = () => {
  return (
    <main>
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
