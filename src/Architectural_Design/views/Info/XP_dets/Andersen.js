import React, { Component } from "react";
import Header from "../../../Design/header";
import "../XP_dets/css_XP.css";
import Sunset from "../../../../images/img/Sunset.jpg";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class Andersen extends Component {
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
          <h1 className="project_">Andersen Corp</h1>
          <div className="content">
            <p className="description">
              Andersen corporation is a custom windows and doors manufacturing
              company across North America. Andersen believes in providing its
              customers with the best quality products at a reasonable cost. To
              do this all products manufactured at Andersen have to go through a
              strict design and construction process. During my time at
              Andersen, I worked with a team of 3 engineers. Due to shortage of
              engineers at the time, I was able to take on critical projects and
              assist on major installations in the facility.
            </p>
            <img className="pic1" src={Sunset} />
          </div>
          <p className="second_paragraph">
            During my time at Andersen, I was involved in many projects which
            required indept knowledge of CAD modelling(SolidWorks). Furthermore,
            I gained lots of experience in project management and managing
            multiple projects simultaneously.
          </p>
          <div className="pic_container">
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
          </div>
          <div className="contraint_container">
            <div className="contraint">
              <h1></h1>
            </div>
            <div className="contraint">
              <h1></h1>
            </div>
            <div className="contraint">
              <h1></h1>
            </div>
          </div>
          <div className="pic_container">
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
          </div>
        </div>
      </div>
    );
  }
}

export default Andersen;
