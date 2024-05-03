import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import searchIcon from "../../assets/icons/search.png";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div>
              <Link id="home" to="/">
                KI
              </Link>
            </div>
          </li>
          <li>
            <div id="about">About</div>
          </li>
          <li>
            <div id="projects">Projects</div>
          </li>
          <li>
            <div id="skills">Skills</div>
          </li>
          <li>
            <div id="contact">Contact</div>
          </li>
        </ul>
        <div className="search">
          <img src={searchIcon} alt="Search Icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
