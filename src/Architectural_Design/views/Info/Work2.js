import React, { Component } from "react";
import WorkSlider from "../../Body_Main/ImageRouter/Image_Slider5";
import "./Info.css";
import Commandbar from "../../../images/img/commandbar.PNG";

const Work2 = props => (
  <div className="containerwork">
    <div className="titlework">
      {props.header}
      <img className="bar" src={Commandbar} />
    </div>
    <p className="paragraphwork">{props.paragraph}</p>
    <div className="testimage">
      <a className="pictureswork">
        <WorkSlider />
      </a>
    </div>
  </div>
);

export default Work2;
