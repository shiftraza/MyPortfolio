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
          <a className="proj1" href="#/AGV"></a>
          <a className="proj2" href="#/gripper"></a>
          <a className="proj3" href="#/drivechain"></a>
          <a className="proj4" href="#/airplane"></a>
          <a className="proj5" href="#/V6"></a>
          <a className="proj6" href="#/crane"></a>
          <a className="proj7" href="#/FEA"></a>
          <a className="proj8" href="#/cart"></a>
        </div>
      </div>
    );
  }
}

export default Projects2;
