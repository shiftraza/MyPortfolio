import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import Sunset from "../../../../images/Website_pictures/coming-soon.jpg";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class crane extends Component {
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

        <h1 className="project_">Mechanical Hatehand - TBD</h1>
        <div className="content">
          <p className="description">
            Mechanical Arm, also known as matehand robots are lifting devices
            used to move parts around in industrial scale manufacturing. This
            project is inspired from my time at Lexus Welding Shop at Toyota
            Motors Manufacturing. The facility had over 70 robot arms which
            perform a variety of tasks such as welding, positioning,
            transporting and hemming. project wil involve the creation of a
            matehand device used to lift objects. It will incorporate a geared
            claw which will be able to lift objects weighing in at over 10lbs.
            The goal of this project is to create a robotic arm which can
            maneuver in 3D space to lift objects of different shape and sizes.
            In industrial applications, robots are required to be extremely
            acurate and the aim is to ensure that this mini-robot can accurately
            perform an action repeatedly.
          </p>
          <img className="pic1" src={Sunset} />
        </div>
        <p className="second_paragraph">
          This robot will use 4 servos which will allow it to maneuver in 3D
          space. The equipment will have an E-Stop button and a "Go" button to
          start or stop its movement. It will also incorporate lights to show
          which step the robot is currently on.
        </p>
        <div className="pic_container">
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
        </div>
        <div className="contraint_container">
          <div className="contraint">
            <h1>Purpose</h1>
            The purpose of this project is to perform actions involving the pick
            up and transportation of parts in a predictatable and accurate
            manner.
          </div>
          <div className="contraint">
            <h1>Approach</h1>
            My approach is to utilize a revolving base along with lightweight
            servos geared to allow lifting heavy weights. The factor of safety
            utilized should be at least 3 to prevent part wear.
          </div>
          <div className="contraint">
            <h1>Results</h1>
            The project is in its initialization phase. Approximate time to
            completion is 1st May, 2020.
          </div>
        </div>
        <div className="pic_container">
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
        </div>
      </div>
    );
  }
}

export default crane;
