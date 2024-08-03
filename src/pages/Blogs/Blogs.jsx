import React, { useEffect, useState } from "react";

import "./blogs.scss";

import portfolio_project from "../../assets/icons/portfolio.png";
import screen_project from "../../assets/icons/screen_project.jpg";
import react_project from "../../assets/icons/react_project.jpg";

export default function Blogs() {
  const [blogs, setBlogs] = useState([
    {
      src: portfolio_project,
      topic: "Frontend",
      title: "How to create a portfolio",
    },
    {
      src: screen_project,
      topic: "Full Stack",
      title: "Full Stack development!",
    },
    {
      src: react_project,
      topic: "React.js",
      title: "React.js freamwork",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775234_960_720.png",
      topic: "Frontend",
      title: "How to create a portfolio",
    },
    {
      src: portfolio_project,
      topic: "Frontend",
      title: "How to create a portfolio",
    },
  ]);

  useEffect(() => {
    try {
      fetch("/blogs")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="blogs-container">
      <h1>Blogs</h1>
      <div className="blogs">
        {blogs.map((blog) => {
          return (
            <div className="blog">
              <img src={blog.src} alt="" />
              <div className="details">
                <div className="topic">{blog.topic}</div>
                <div className="title">{blog.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
