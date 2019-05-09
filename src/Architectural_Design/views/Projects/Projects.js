import React, { Component } from "react";
import Header from "../../Design/header";
import "./Projects.css";
import Back from "../About/Back";
import Paragraph from "../../views/Info/Paragraph";
import Paragraph2 from "../../views/Info/Paragraph2";
import Paragraph3 from "../../views/Info/Paragraph3";
import Paragraph4 from "../../views/Info/Paragraph4";
import "../Info/Info.css";

class Projects extends Component {
  render() {
    const paragraph =
      "This project was done to gain a deeper understanding of electrical design as well as PID programming. It involved setting up a PID control Algorithm that would allow this robot to roam freely whilst detecting its surroundings. Once a wall was detected, the robot would turn and follow the wall at a pre-set distance. The PID control ensures that the vehicle adheres to the specified distance. The programming was done using Arduino C code. ";
    const header = "Autonomous Vehicle";

    const secondparagraph =
      "In this project, I worked on creating a 3D model of a V6 Engine. I am very passionate about mechanical engineering design and wanted to improve my 3D drafting skills. In this project, I learned how to use surface modelling as well as better utilize commands such as sweeps, drafts and boundary to enhance my model. Furthermore I was able to test different parts using FEA and Mesh analysis.";
    const secondheader = "Engine Model";

    const thirdparagraph =
      "This is an on-going project. I want to put my engineering skills to the test by creating an aircraft that is fully operable in the sky. It will have full axial control allowing it to be highly maneuverable and completely controllable. To make this work, I plan to use a 1000KV brushless motor powered by a 2000 mAh lipo battery. Furthermore, I have 5 servos which will be used to traverse the control surfaces of the aircraft.";
    const thirdheader = "RC Aircraft";

    const fourthparagraph =
      "During my coop, I was exposed to a lot of front-end programming. This really inspired me to create my own website. As a side bonus, I decided to host all my side-project on it as well.  It is still an on-going effort as I continue to refine and perfect my React JavaScript skills. In the future, I would like to optimize the background to be quicker to load as well as have a wait-screen as the app loads.  ";
    const fourthheader = "Portfolio JS";

    return (
      <div className="master">
        <Header />
        <Back />
        <div className="background">
          <div id="test1">
            <Paragraph paragraph={paragraph} header={header} />
          </div>
          <div id="test2">
            <Paragraph2 paragraph={secondparagraph} header={secondheader} />
          </div>
          <div id="test3">
            <Paragraph3 paragraph={thirdparagraph} header={thirdheader} />
          </div>
          <div id="test4">
            <Paragraph4 paragraph={fourthparagraph} header={fourthheader} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
