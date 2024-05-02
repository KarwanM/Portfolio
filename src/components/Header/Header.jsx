import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div id="about">
              About
            </div>
          </li>
          <li>
            <div id="portfolio">
              Projects
            </div>
          </li>
          <li>
            <div id="contact">
              Contact
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
