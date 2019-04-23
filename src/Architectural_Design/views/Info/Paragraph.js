import React, { Component } from "react";
import "./Info.css";
import picture from "../../../images/img/CarProject.PNG";
const Paragraph = props => (
  <div className="container">
    <div className="title">{props.header}</div>
    <p className="paragraph">{props.paragraph}</p>
    <img className="pictures" src={picture} />
  </div>
);
export default Paragraph;
