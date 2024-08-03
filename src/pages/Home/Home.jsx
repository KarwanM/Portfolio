import { useEffect } from "react";

import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

import "./home.scss";

const Home = () => {
  useEffect(() => {
    try {
      const result = async () => {
        await fetch("/test")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      result();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <main>
      <Banner />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
