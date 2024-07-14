import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

import "./home.scss";

const Home = () => {
  return (
    <main>
      <Banner />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
