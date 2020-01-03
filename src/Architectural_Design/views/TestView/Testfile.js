import React, { Component } from "react";
import SideDrawer from "../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../Design/sidebar_components/Backdrop";
import Header from "../../Design/header";
import Toolbar from "../../../Architectural_Design/Design/sidebar_components/Toolbar";
class Testfile extends Component {
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
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default Testfile;
