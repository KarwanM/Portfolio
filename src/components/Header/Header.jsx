import { React, useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import searchIcon from "../../assets/icons/search.png";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <header>
      <nav>
        <div onClick={handleDropdown} className="dropdown">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-left">
          <div id="home" onClick={""}>
            KI Portfolio
          </div>
        </div>
        <div
          onClick={handleClick}
          className={
            dropdown ? "nav-right show-dropdown" : "nav-right hide-dropdown"
          }
        >
          <ul>
            <li>
              <div id="home" onClick={""}>
                Home
              </div>
            </li>
            <li>
              <div id="about" onClick={""}>
                About
              </div>
            </li>
            <li>
              <div id="projects" onClick={""}>
                Portfolio
              </div>
            </li>
            <li>
              <div id="contact" onClick={""}>
                Contact
              </div>
            </li>
          </ul>
          <div className="search">
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
