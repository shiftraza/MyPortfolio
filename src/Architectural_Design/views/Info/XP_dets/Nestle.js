import React, { Component } from "react";
import Header from "../../../Design/header";
import "../XP_dets/css_XP.css";
import Sunset from "../../../../images/img/Sunset.jpg";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class Nestle extends Component {
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
          <h1 className="project_">Nestle</h1>
          <div className="content">
            <p className="description">
              Nestle Inc is one the world's leading food and beverage provider.
              The ultimate goal for Nestle is to provide nutritious foods to
              people all across the world at a cheap and sustainable cost. There
              are multiple divisions with-in Nestle and I was part of the Purina
              Division. Nestle Purina is reponsible for meeting the petcare food
              demands of Canada.
            </p>
            <img className="pic1" src={Sunset} />
          </div>
          <p className="second_paragraph">
            I was brought on to the Mechanical Engineering and Maintenance team
            to support new equipment installation projects. This involved
            extensive use of AutoCAD and SolidWorks to create detailed drawings
            new equipment to ensure precise positioning and incorporation with
            existing equipment.
          </p>

          <div className="Summary of Work">
            <h1>Summary of Work</h1>
            During my time at Nestle, I was part of a capstone project which
            involved the installation of a Dye mixing tank. This project in the
            initial phase involved finding a suitable location for the equipment
            and the documentation on how the integration process would effect
            plant output. Once the project was approved, my main task was
            managing contractors and maintenance personal to ensure project
            deadlines were being met. Another key project I worked on was
            automating work order entry into the ERP system. I developed a
            python algorithm which automatically scanned and named each work
            order as per its order number and then using selenium, attach and
            fill online documentation. This reduced over 6 hours spent per day
            on manual entry down to just pressing one button.{" "}
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

export default Nestle;
