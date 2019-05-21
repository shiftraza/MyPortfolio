import React, { Component } from "react";
import Slider4 from "../../Body_Main/ImageRouter/Image_Slider4";
import "./Info.css";
import Commandbar from "../../../images/img/commandbar.PNG";

const Paragraph4 = props => (
  <div className="container">
    <div className="title">
      {props.header}
      <img className="bar" src={Commandbar} />
      <div className="github">
        <a className="github" href="https://github.com/shiftraza/MyPortfolio">
          GitHub
        </a>
      </div>
    </div>
    <p className="paragraph">{props.paragraph}</p>
    <Slider4 />
  </div>
);

export default Paragraph4;
