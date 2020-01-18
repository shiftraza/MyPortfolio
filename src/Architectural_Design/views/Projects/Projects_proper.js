import React, { Component } from "react";
import Header from "../../Design/header";
import "./Projects.css";
import Back from "../About/Back";
import SideDrawer from "../../../Architectural_Design/Design/sidebar_components/SideDrawer";
import Backdrop from "../../Design/sidebar_components/Backdrop";
class Projects2 extends Component {
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
      <div className="head">
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <Back />
        <div className="projects">
          <a className="proj1" href="#/AGV">
            <div className="pic_1"></div>
          </a>
          <a className="proj2" href="#/gripper">
            <div className="pic_2"></div>
          </a>
          <a className="proj1" href="#/drivechain">
            {" "}
            <div className="pic_3"></div>
          </a>
          <a className="proj2" href="#/airplane">
            {" "}
            <div className="pic_4"></div>
          </a>
          <a className="proj1" href="#/cart">
            {" "}
            <div className="pic_8"></div>
          </a>
          <a className="proj2" href="#/crane">
            {" "}
            <div className="pic_6"></div>
          </a>
          <a className="proj1" href="#/FEA">
            {" "}
            <div className="pic_7"></div>
          </a>
          <a className="proj2" href="#/V6">
            {" "}
            <div className="pic_5"></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Projects2;
