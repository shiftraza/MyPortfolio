import React, { Component } from "react";
import Header from "../../Design/header";
import "./About.css";
import Back from "./Back";
import SideDrawer from "../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../Design/sidebar_components/Backdrop";

class About extends Component {
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
      <div>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <Back />
        <div className="infocontainer">
          <div className="Personal">
            <div className="Skills">
              <div className="text">
                <header>SKILLS</header>
                <ul className="list">
                  <li>3D Modelling</li>
                  <li>Surface Modelling</li>
                  <li>Python</li>
                  <li>React JS</li>
                  <li>Excel - VBA</li>
                  <li>Soldering and Wood working</li>
                  <li>Electrical and hardware tinkering</li>
                </ul>
              </div>
            </div>
            <div className="Interests">
              <div className="text2">
                <header>INTERESTS</header>
                <ul className="list">
                  <li>Autonomus Vehicles</li>
                  <li>Web Development (Websites)</li>
                  <li>System Integration</li>
                  <li>Controls Design</li>
                  <li>Design for manufacturability</li>
                  <li>3D printing</li>
                  <li>Design Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
