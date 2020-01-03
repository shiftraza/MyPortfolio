import React, { Component } from "react";
import Header from "../../Design/header";
import "./Home.css";
import Body from "../../Body_Main/Body";
import Rez from "../../Body_Main/Stack";
import Back from "../About/Back";
import SideDrawer from "../../../Architectural_Design/Design/sidebar_components/SideDrawer";
import Backdrop from "../../Design/sidebar_components/Backdrop";

class Home extends Component {
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
      <div className="head" style={{ height: "100%" }}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <Back />
        <div id="hero">
          <div id="hero-overlay" />
        </div>
        <Body />
      </div>
    );
  }
}

export default Home;
