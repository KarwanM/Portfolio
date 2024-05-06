import React from "react";

import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <p>
        Hi There, <span>I'm</span>
      </p>
      <h1>Karwan Ismael</h1>
      <div className="banner-animated-text">
        <h3>
          <span>Software Engineer</span>
        </h3>
      </div>
      <div className="left-banner-buttons">
        <div id="portfolio" onClick={""}>
          See my work
        </div>
        <div id="contact" onClick={""}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Banner;
