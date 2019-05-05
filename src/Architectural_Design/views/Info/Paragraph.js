import React, { Component } from "react";
import Slider from "../../Body_Main/ImageRouter/Image_Slider";
import "./Info.css";

const Paragraph = props => (
  <div className="container">
    <div className="title">{props.header}</div>
    <p className="paragraph">{props.paragraph}</p>
    <div className="testimage">
      <Slider />
    </div>
  </div>
);

export default Paragraph;
