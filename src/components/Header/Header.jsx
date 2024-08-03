import { React, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import { StyledHeader, StyledNav } from "./Header.styled";

import "./header.scss";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState("");

  const newRef = useRef(null);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      if (dropdown) {
        setDropdown(false);
      }
      setSearch("");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <StyledHeader width={pageWidth} dropdown={dropdown} ref={newRef}>
      <StyledNav>
        <div className="nav-left">
          <NavLink  to="/" id="home">&#123;&lt;/&gt;&#125;</NavLink>
        </div>
        <div className="dropdown-container">
          <div onClick={handleDropdown} className="dropdown">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={
            dropdown ? "nav-right show-dropdown" : "nav-right hide-dropdown"
          }
        >
          <ul>
            <NavLink id="home">Home</NavLink>
            <NavLink to="/blog" id="blogs">blog</NavLink>
            <NavLink to="about" id="about">About</NavLink>
          </ul>
          <div className="search-container">
            <div className="search-button">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
