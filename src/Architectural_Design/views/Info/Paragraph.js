import React, { Component } from "react";
import Slider from "../../Body_Main/ImageRouter/Image_Slider";
import "./Info.css";
import Commandbar from "../../../images/img/commandbar.PNG";

const Paragraph = props => (
  <div className="container">
    <div className="title">
      {props.header}
      <img className="bar" src={Commandbar} />
    </div>
    <p className="paragraph">{props.paragraph}</p>
    <div className="testimage">
      <Slider />
    </div>
  </div>
);

export default Paragraph;
