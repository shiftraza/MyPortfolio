import React, { Component } from "react";
import Header from "../../Design/header";
import "./01Experience_proper.css";
import Back from "../About/Back";
import SideDrawer from "../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../Design/sidebar_components/Backdrop";

class Experience extends Component {
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
        <div className="experience">
          <a className="XP1" href="#/Toyota">
            <div className="logo_1"></div>
          </a>
          <a className="XP2" href="#/Shoplogix">
            {" "}
            <div className="logo_2"></div>
          </a>
          <a className="XP1" href="#/Andersen">
            <div className="logo_3"></div>
          </a>
          <a className="XP2" href="#/Nestle">
            <div className="logo_4"></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Experience;
