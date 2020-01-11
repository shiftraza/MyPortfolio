import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import Sunset from "../../../../images/img/Sunset.jpg";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class drivechain extends Component {
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
        <h1 className="project_">Open Differential</h1>
        <div className="content">
          <p className="description">
            This project was initialized as an upgrade to the AGV. The AGV
            previously created utilized speed reduction on one motor to allow
            for the vehicle to turn. This created excessive wear on the wheels
            on the opposite side of the turn which had to travel a further
            distance than the in-side wheels. the mates linking the wheel to
            axle would wear-out over a long period of driving. To fix this
            issue, an open differential concept was developed to allow for the
            outside wheel to travel a longer distance without skidding, thus
            preventing wear and tear.
          </p>
          <img className="pic1" src={Sunset} />
        </div>
        <p className="second_paragraph">
          The drivechain would have to be large enough to be 3D printable and
          small enough to still fit inside the drivechain of the vehicle. The
          tolerances would had to perfected to ensure a flush fit of all
          components. The entire mechanism was first conceptualized on
          Solidworks to reduce material costs of prototyping.
        </p>
        <div className="pic_container">
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
        </div>
        <div className="contraint_container">
          <div className="contraint">
            <h1>Purpose</h1>
            <div className="purpose">
              The purpose of this project was to prevent excessive wear and tear
              on the wheel and axle of AGV.
            </div>
          </div>
          <div className="contraint">
            <h1>Approach</h1>
            <div className="purpose">
              A simple open differential was utilized. This would allow for AGV
              wheels to turn indepentently from each other thus limiting the
              wear and tear on each axle.
            </div>
          </div>
          <div className="contraint">
            <h1>Results</h1>
            <div className="purpose">
              This project is 95% complete. The 3D printed parts successfully
              allow each axle to spin independently of the other resulting in a
              80% reduction in wear and tear on the axle. Since the axle
              contruction is made of PC(plastic), some wear and tear is still
              going to occur due to the nature of the material.
            </div>
          </div>
        </div>
        <div className="pic_container">
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
          <img className="pic" src={Sunset} />
        </div>
      </div>
    );
  }
}

export default drivechain;
