import React, { Component } from "react";
import Slider3 from "../../Body_Main/ImageRouter/Image_Slider3";
import "./Info.css";
import Commandbar from "../../../images/img/commandbar.PNG";

const Paragraph3 = props => (
  <div className="container">
    <div className="title">
      {props.header}
      <img className="bar" src={Commandbar} />
    </div>
    <p className="paragraph">{props.paragraph}</p>
    <Slider3 />
  </div>
);

export default Paragraph3;
