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
            <div className="pic123"></div>
          </a>
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
