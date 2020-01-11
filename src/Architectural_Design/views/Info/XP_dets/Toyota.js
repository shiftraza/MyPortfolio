import React, { Component } from "react";
import Header from "../../../Design/header";
import "../XP_dets/css_XP.css";
import Sunset from "../../../../images/img/Sunset.jpg";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class Toyota extends Component {
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
          <h1 className="experience_">Toyota Motors Manufacturing</h1>
          <div className="content">
            <p className="description">
              Toyota Motors is one of the world's leading car manufacturing
              company. The ultimate goal and vision for Toyota is to lead the
              way to the future of mobility, enriching lives around the world
              with the safest and most responsible ways of moving people. Thus
              to accomplish this, Toyota expects a great deal personal
              commitment and vigor from its employees.
            </p>
            <img className="pic1" src={Sunset} />
          </div>
          <p className="second_paragraph">
            During my work term at Toyota, I was brought on to mainly assist
            with Project Management activities involving new equipment
            installation and downtime reduction of the shop.
            <li>
              Designed and integrated an automated system to detect defects
              occuring on the Hood hemming line process of the shop. This
              process improvement saved $40,000 in scrapped part costs and labor
              on an annual basis.
            </li>
            <li>
              Utilized SolidWorks Sheetmetal design to create fixtures for
              multiple new equipment.
            </li>
            This involved doing FEA analysis on bolted fixtures which seem to be
            breaking down over extended period of time. Furthermore, I developed
            a checking system which utilized proximity sensor to detect the
            defect on the part. This{" "}
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

export default Toyota;
