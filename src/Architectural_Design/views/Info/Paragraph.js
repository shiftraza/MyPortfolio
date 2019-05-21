import React, { Component } from "react";
import Slider from "../../Body_Main/ImageRouter/Image_Slider";
import "./Info.css";
import Commandbar from "../../../images/img/commandbar.PNG";
import gitimage from "../../../images/img/githublogo.svg";

const Paragraph = props => (
  <div className="container">
    <div className="title">
      {props.header}
      <img className="bar" src={Commandbar} />
      <div className="github">
        <a
          className="github"
          href="https://github.com/shiftraza/Autonomous-Utility-Vehicle"
        >
          GitHub
        </a>
      </div>
    </div>
    <p className="paragraph">{props.paragraph}</p>
    <div className="testimage">
      <Slider />
    </div>
  </div>
);

export default Paragraph;
