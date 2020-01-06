import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import Sunset from "../../../../images/img/Sunset.jpg";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class V6 extends Component {
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
          <h1 className="project_">V6 Engine</h1>
          <div className="content">
            <p className="description">
              {" "}
              To further understand the inner workings of a combustion engine
              and practice CAD modelling skills, I modelled a v6 Engine. A V6
              engine has piston cylinders at 30 degree and arranged in a classic
              V shape, hense the name "V6". V6 Engines are superior to Inline
              engines in the sense that they allow for more cylinders to fit in
              a compact space. They are also more stable because the actuation
              of opposing cylinders result in net 0 force to the vehicle, whilst
              in an Inline, the force of the pistons is conteracted by the
              vehicle. This causes V6 vehicles to be maneuverable since internal
              forces do not influence grip.{" "}
            </p>
            <img className="pic1" src={Sunset} />
          </div>
          <p className="second_paragraph">Coming Soon! </p>
          <div className="pic_container">
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
          </div>
          <div className="contraint_container">
            <div className="contraint">
              <h1>Purpose</h1>
              The purpose of designing a V6 Engine was to learn more about the
              mechanisms involve in engine design as well as improve modelling
              skills on Solidworks.{" "}
            </div>
            <div className="contraint">
              <h1>Approach</h1>I designned all parts through online research and
              vigorous search for part specs and layout.{" "}
            </div>
            <div className="contraint">
              <h1>Results</h1>
              The engine and its interacting components worked well together
              similar to how they would in real-life.{" "}
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

export default V6;
