import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import pic1 from "../../../../images/Website_pictures/Capture.PNG";
import pic2 from "../../../../images/Website_pictures/Capture2.PNG";
import pic3 from "../../../../images/Website_pictures/Table.PNG";
import pic4 from "../../../../images/Website_pictures/Table2.PNG";

import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class FEA extends Component {
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
          <h1 className="project_">FEA - TBD</h1>
          <div className="content">
            <p className="description">Coming Soon!</p>
            <img className="pic1" src={pic1} />
          </div>
          <p className="second_paragraph">Coming Soon! </p>
          <div className="pic_container">
            <img className="pic" src={pic2} />
            <img className="pic" src={pic3} />
            <img className="pic" src={pic4} />
          </div>
          <div className="contraint_container">
            <div className="contraint"></div>
          </div>
          <div className="pic_container"></div>
        </div>
      </div>
    );
  }
}

export default FEA;
