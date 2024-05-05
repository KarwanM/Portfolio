import React from "react";

import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";

import "./home.scss";

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
