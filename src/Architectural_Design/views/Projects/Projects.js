import React, { Component } from "react";
import Header from "../../Design/header";
import "./Projects.css";
import Video2 from "./Video";
import BodyMain from "../../Body_Main/Body_Design";
import Paragraph from "../../views/Info/Paragraph";
import "../Info/Info.css";
class Projects extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container1">
          <Video2 />
          <Paragraph />
        </div>
      </div>
    );
  }
}

export default Projects;
