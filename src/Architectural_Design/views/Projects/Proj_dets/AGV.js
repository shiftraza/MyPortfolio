import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import AGV_pic from "../../../../images/Website_pictures/123.PNG";
import AGV_pic1 from "../../../../images/Website_pictures/Picture17.png";
import AGV_pic2 from "../../../../images/Website_pictures/Picture16.png";
import AGV_pic3 from "../../../../images/Website_pictures/1_results.JPG";
import AGV_pic4 from "../../../../images/Website_pictures/AGV_underbelly.PNG";
import AGV_pic5 from "../../../../images/Website_pictures/Sidepic.JPEG";
import AGV_pic6 from "../../../../images/Website_pictures/Finalpic.JPG";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class AGV extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="head1">
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />

        <h1 className="project_">Autonomous Guided Vehicle</h1>
        <div className="content">
          <p className="description">
            An AGV is self-driving vehicle which utilizes onboard logic to
            travel in a specified path. These vehicles are very useful in
            manufacturing facilities because it allows for parts to be delivered
            to their locations quickly and efficiently. This also removes the
            human element in part delivery which is important for reducing cost
            and errors. The ultimate goal of this project was to create an AGV
            which is capable of detecting obstacles in its path and then use
            control logic to avoid collision whilst sticking to a specified
            path.
          </p>
          <img className="pic__1" src={AGV_pic} />
        </div>
        <p className="second_paragraph">
          Due to limited resources, the entire project was first conceptualized
          on SolidWorks to reduce material cost. The AGV used a 12V battery with
          was then stepped down to meet the demands of 5V sensors as well as
          fully power 4 , 12V DC motors.
        </p>
        <div className="pic_container">
          <img className="pic" src={AGV_pic1} />
          <img className="pic" src={AGV_pic2} />
          <img className="pic" src={AGV_pic3} />
        </div>
        <div className="contraint_container">
          <div className="contraint">
            <h1>Purpose</h1>
            <div className="purpose">
              The purpose of this project was to create a functional AGV which
              would autonomously drive and actively avoid objects such as shoes,
              walls, etc.
            </div>
          </div>
          <div className="contraint">
            <h1>Approach</h1>
            <div className="purpose">
              My approach was to use 2 Ultrasonic sensors to monitor the
              surrounding of the vehicle whilst using PID control logic to slow
              down the vehicle and redirect it around the obstacle. I decided to
              use cheaply available and easily replaceable motors to power the
              vehicle to ensure ease of maintenance.
            </div>
          </div>
          <div className="contraint">
            <h1>Results</h1>
            <div className="purpose">
              The AGV concept effectively avoided obstacles and was an overall
              success. The vehicle could effectively avoid obstacles within a
              180-degree radius at the front and then monitor the obstacle from
              the right hand side.
            </div>
          </div>
        </div>
        <div className="pic_container">
          <img className="pic" src={AGV_pic4} />
          <img className="pic" src={AGV_pic5} />
          <img className="pic" src={AGV_pic6} />
        </div>
      </div>
    );
  }
}

export default AGV;
