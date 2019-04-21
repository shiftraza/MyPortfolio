import React, { Component } from "react";
import "./Info.css";
import picture from "../../../images/img/CarProject.PNG";
const Paragraph = props => (
  <div className="container">
    <h1 className="title">{props.header}</h1>
    <p className="paragraph">{props.paragraph}</p>
    <img className="pictures" src={picture} />
  </div>
);
export default Paragraph;
