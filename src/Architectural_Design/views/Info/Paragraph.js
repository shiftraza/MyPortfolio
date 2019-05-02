import React, { Component } from "react";
import Slider from "../../Body_Main/ImageRouter/Image_Slider";

const Paragraph = props => (
  <div className="container">
    <div className="title">{props.header}</div>
    <p className="paragraph">{props.paragraph}</p>
    <Slider />
  </div>
);

export default Paragraph;
