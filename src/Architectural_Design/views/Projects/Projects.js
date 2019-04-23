import React, { Component } from "react";
import Header from "../../Design/header";
import "./Projects.css";
import Video2 from "./Video";
import BodyMain from "../../Body_Main/Body_Design";
import Paragraph from "../../views/Info/Paragraph";
import "../Info/Info.css";
class Projects extends Component {
  render() {
    const paragraph =
      "This project was done to gain a deeper understanding of electrical design as well as PID programming. This project involved setting up PID control Algorithm that would allow this robot to roam freely whilst detecting its surrounding. Once a wall is detected, the robot would turn and follow the wall at a pre-set distance. The PID control is done to ensure that the vehicle adheres to the specified distance. This programming was done using Arduino C code. ";
    const header = "Autonomous Vehicle Project";
    return (
      <div className="master">
        <div className="main">
          <Header />
          <div className="container1">
            <div id="test1">
              <Paragraph paragraph={paragraph} header={header} />
            </div>
            <div id="test2">
              <Paragraph paragraph={paragraph} header={header} />
            </div>
            <div id="test3">
              <Paragraph paragraph={paragraph} header={header} />
            </div>
            <div id="test4">
              <Paragraph paragraph={paragraph} header={header} />
            </div>
            <div className="video_test">
              <Video2 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
