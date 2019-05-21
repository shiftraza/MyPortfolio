import React, { Component } from "react";
import Slider2 from "../../Body_Main/ImageRouter/Image_Slider2";
import "./Info.css";
import Commandbar from "../../../images/img/commandbar.PNG";
import GitHubLink from "../../Githublink";

const Paragraph2 = props => (
  <div className="container">
    <div className="title">
      {props.header}
      <img className="bar" src={Commandbar} />
    </div>
    <p className="paragraph">{props.paragraph}</p>
    <Slider2 className="pictures" />
  </div>
);

export default Paragraph2;
