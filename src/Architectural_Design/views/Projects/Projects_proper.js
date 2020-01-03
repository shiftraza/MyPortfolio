import React, { Component } from "react";
import Header from "../../Design/header";
import "./Projects.css";
import Back from "../About/Back";
import Sunset from "../../../images/img/Sunset.jpg";

class Projects2 extends Component {
  render() {
    return (
      <div className="head">
        <Header />
        <Back />
        <div className="projects">
          <a className="proj1" href="#/"></a>
          <a className="proj2" href="#/"></a>
          <a className="proj3" href="#/"></a>
          <a className="proj4" href="#/"></a>
          <a className="proj5" href="#/"></a>
          <a className="proj6" href="#/"></a>
          <a className="proj7" href="#/"></a>
          <a className="proj8" href="#/"></a>
        </div>
      </div>
    );
  }
}

export default Projects2;
