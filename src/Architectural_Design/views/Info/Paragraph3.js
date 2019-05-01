import React, { Component } from "react";
import "./Info.css";
import picture3 from "../../../images/img/Sunset.jpg";

const Paragraph3 = props => (
  <div className="container">
    <div className="title">{props.header}</div>
    <p className="paragraph">{props.paragraph}</p>
    <img className="pictures" src={picture3} />
  </div>
);

export default Paragraph3;
