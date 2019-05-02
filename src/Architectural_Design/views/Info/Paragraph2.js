import React, { Component } from "react";
import Slider2 from "../../Body_Main/ImageRouter/Image_Slider2";

const Paragraph2 = props => (
  <div className="container">
    <div className="title">{props.header}</div>
    <p className="paragraph">{props.paragraph}</p>
    <Slider2 className="pictures" />
  </div>
);

export default Paragraph2;
