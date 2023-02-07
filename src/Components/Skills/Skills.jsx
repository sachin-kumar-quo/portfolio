import React from "react";
import "./Skills.css";

import css3 from "../../img/css3.png";
import angular from "../../img/angular.png";
import nodejs from "../../img/nodejs.png";
import react from "../../img/react.png";
import js from "../../img/js.png";
import mongodb from "../../img/mongodb.png";
import ts from "../../img/ts.png";
import html from "../../img/html.png";
import redux from "../../img/redux.png";

function Skills() {
  return (
    <div className="skills">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Skills</span>
        <span>
          i am a full stack developer with extraordinary bad skills
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1"></div>
      </div>
      <div className="cards">
        <div className="col">
          <img src={html} alt="" />
          <img src={react} alt="" />
          <img src={redux} alt="" />
        </div>
        <div className="col">
          <img src={css3} alt="" />
          <img src={angular} alt="" />
          <img src={ts} alt="" />
        </div>
        <div className="col">
          <img src={mongodb} alt="" />
          <img src={nodejs} alt="" />
          <img src={js} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
