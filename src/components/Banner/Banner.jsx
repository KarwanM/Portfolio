import { useEffect, useState } from "react";

import "./banner.scss";

import python from "../../assets/icons/python.png";
import flask from "../../assets/icons/flask.png";
import react from "../../assets/icons/react.png";
import js from "../../assets/icons/javascript.png";
import nodejs from "../../assets/icons/nodejs.png";
import aws from "../../assets/icons/aws.png";
import docker from "../../assets/icons/docker.png";
import sass from "../../assets/icons/sass.png";

const Banner = () => {
  const [currentTitle, setCurrenTitle] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const title = "SOFTWARE ENGINEER";
  const [titleLoop, setTitleLoop] = useState(false);

  const skills = [
    {
      id: 1,
      title: "Python",
      img: python,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
    {
      id: 2,
      title: "Flask",
      img: flask,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
    {
      id: 3,
      title: "React",
      img: react,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
    {
      id: 4,
      title: "JS",
      img: js,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
    {
      id: 5,
      title: "Nodejs",
      img: nodejs,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
    {
      id: 6,
      title: "AWS",
      img: aws,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
    {
      id: 7,
      title: "Docker",
      img: docker,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
    {
      id: 8,
      title: "Sass",
      img: sass,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vero, asperiores nisi et laborum officiis eos voluptatum culpa at mollitia veniam, minus cupiditate! Iusto facilis deserunt nobis eos. Perferendis, hic",
    },
  ];

  useEffect(() => {
    if (!titleLoop) {
      if (currentIndex <= title.length) {
        const timeout = setTimeout(() => {
          setCurrenTitle((prevTodos) => {
            return [...prevTodos, title[currentIndex]];
          });
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100);
        if (currentIndex >= title.length) {
          setTimeout(() => {
            setTitleLoop(true);
          }, 1000);
        }
        return () => clearTimeout(timeout);
      }
    } else if (titleLoop) {
      if (currentIndex >= -1) {
        const timeout = setTimeout(() => {
          setCurrenTitle((prevTodos) =>
            prevTodos.filter((l, index) => {
              return index !== currentIndex;
            })
          );
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, 100);
        if (currentIndex <= -1) {
          setTitleLoop(false);
        }
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, title, titleLoop]);

  return (
    <div className="banner-container">
      <div className="top-banner">
        <h2>Karwan Ismael</h2>
        <div className="banner-animated-text">
          <h1 className="title">
            <span>.</span>
            {currentTitle}
            <span>.</span>
          </h1>
        </div>
        <p>
          <span>Location:</span> London - United Kingdom
        </p>
        <div className="top-banner-buttons">
          <div id="portfolio">Projects</div>
          <div id="contact">Contact</div>
        </div>
      </div>
      <div className="bottom-banner">
        {skills &&
          skills.map((skill, index) => {
            return (
              <div className="experience-container">
                <div className="experience-header">
                  <img src={skill.img} />
                  <p className="title">{skill.title}</p>
                </div>
                <div className="description">
                  <p>{skill.description}</p>
                </div>
              </div>
            );
          })}
        {/* <ul>
          {skills &&
            skills.map((skill, index) => {
              return (
                <li key={index}>
                  <img src={skill.img} alt={skill.title}/>
                  <p>{skill.title}</p>
                </li>
              );
            })}
        </ul> */}
      </div>
    </div>
  );
};

export default Banner;
