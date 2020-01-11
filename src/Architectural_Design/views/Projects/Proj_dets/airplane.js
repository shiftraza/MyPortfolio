import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import airplane_pic from "../../../../images/Website_pictures/Picture22.png";
import airplane_pic1 from "../../../../images/Website_pictures/Picture21.png";
import airplane_pic2 from "../../../../images/Website_pictures/Picture20.png";
import airplane_pic3 from "../../../../images/Website_pictures/Landing_gear.PNG";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class airplane extends Component {
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

        <h1 className="project_">RC Airplane</h1>
        <div className="content">
          <p className="description">
            Airplanes are complex machines which utilize key principles of
            engineering and physics to glide through the air. I wanted to put my
            skills to the test by making my very own aircraft from scratch. The
            criteria of success were lift-off smooth and smooth landing. There
            are a lot of factors which go into making an operational aircraft.
            Diligent research was done to ensure that that my aircraft with a
            wingspan of 18” would be capable of taking off the ground. This
            research involved weight to power ratios, wingspan to thrust, weight
            balance, and speed-stall studies. Buckingham Pie theorem was used to
            eliminate some criteria which would not affect aerodynamic
            properties. I also wanted to design a landing gear capable of
            absorbing most of the impact upon landing.
          </p>
          <img className="airplane_1" src={airplane_pic} />
        </div>
        <p className="second_paragraph">
          For this project, I utilized a 1000KV Brushless motor. This motor
          would pull an average of 12 ampheres of current. A 16V 4-cell battery
          would provide the neccesary power required to spin the rotor at a
          maximum of 16000rpm. This would give the aircraft an approx. speed of
          atleast 30mph neccesary for take-off on a 15 meter runway.
        </p>
        <div className="pic_container">
          <img className="pic" src={airplane_pic1} />
          <img className="pic" src={airplane_pic2} />
          <img className="pic" src={airplane_pic3} />
        </div>
        <div className="contraint_container">
          <div className="contraint">
            <h1>Purpose</h1>
            <div className="purpose">
              The purpose of this project was to create a simple, sleek aircraft
              capable of flight.
            </div>
          </div>
          <div className="contraint">
            <h1>Approach</h1>
            <div className="purpose">
              The approach was to utilize 3 servos and a BLDC motor to power the
              aircraft and respective control surfaces such as ailerons and
              rudder.
            </div>
          </div>
          <div className="contraint">
            <h1>Results</h1>
            <div className="purpose">
              Project 85% complete. The aircraft's maiden flight was successful
              albeit with some structural failures. The tail wheel support
              structure of was strong enough to the full force of landing. So it
              will have to be redesigned to fit functional requirements.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default airplane;
