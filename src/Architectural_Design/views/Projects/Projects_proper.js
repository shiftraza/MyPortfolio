import React, { Component } from "react";
import Header from "../../Design/header";
import "./Projects.css";
import Back from "../About/Back";

class Projects2 extends Component {
  render() {
    return (
      <div className="head">
        <Header />
        <Back />
        <div className="projects">
          <div className="proj1"></div>
          <div className="proj2"></div>
          <div className="proj3"></div>
          <div className="proj4"></div>
          <div className="proj5"></div>
          <div className="proj6"></div>
          <div className="proj7"></div>
          <div className="proj8"></div>
        </div>
      </div>
    );
  }
}

export default Projects2;
