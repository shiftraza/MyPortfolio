import React, { Component } from "react";
import Slider3 from "../../Body_Main/ImageRouter/Image_Slider3";

const Paragraph3 = props => (
  <div className="container">
    <div className="title">{props.header}</div>
    <p className="paragraph">{props.paragraph}</p>
    <Slider3 />
  </div>
);

export default Paragraph3;
