import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import gripper_pic from "../../../../images/Website_pictures/Picture1.png";
import gripper_pic1 from "../../../../images/Website_pictures/manipulator.jpg";
import gripper_pic2 from "../../../../images/Website_pictures/Picture2.png";
import gripper_pic3 from "../../../../images/Website_pictures/Picture3.png";

import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class gripper extends Component {
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
        <div className="all_info">
          <h1 className="project_">Semi-Auto Gripper Arm</h1>
          <div className="content">
            <p className="description">
              The hydraulic assisted manual gripper is a machine which makes
              lifting heavy objects faster and less physically taxing. This
              machine was used to lift heavy spindle heads used for wood
              styling. I was responsible for designing the gripper portion of
              the Gripper Arm. This gripper would need to be capable of entering
              tight spaces inside the molding machine whilst also provding
              adjustablity on large spindle head sizes. The criteria for success
              was that the gripper should be able to access spindle install
              locations of all depths and angles whilst holding a spindle
              weighing in at over 30 pounds. This new design, once implemented
              would go on to save the plant over $10,000 in downtime reduction
              alone. The new design made the moulding process 20% more efficient
              resulting in 3.5% overall increase in production capablity of the
              entire facility.
            </p>
            <img className="gripper_1" src={gripper_pic} />
          </div>
          <p className="second_paragraph">
            The design had a factor of safety of 3.33. This was further tested
            by hanging a 90 pound weight in the most extended position for over
            30 minutes to ensure that it met the safety requirements for normal
            operation.
          </p>
          <div className="pic_container">
            <img className="pic" src={gripper_pic1} />
            <img className="pic" src={gripper_pic2} />
            <img className="pic" src={gripper_pic3} />
          </div>
          <div className="contraint_container">
            <div className="contraint">
              <h1>Purpose</h1>
              <div className="purpose">
                The purpose of this project was to make an inefficient process
                more efficient by making a design improvement.
              </div>
            </div>
            <div className="contraint">
              <h1>Approach</h1>
              <div className="purpose">
                The addition of a manual lifter with a custom designed gripper
                arm would increase the speed at which spindle reinstallation can
                take place. This is the significant downtime in this process and
                thus would make the biggest impact on process time improvement.
              </div>
            </div>
            <div className="contraint">
              <h1>Results</h1>
              <div className="purpose">
                The project was complete and the results fully fulfilled the
                functional requirements. Overall the project was complete in the
                required time interval and thus meet the criteria given by
                stake-holders.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default gripper;
