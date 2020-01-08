import React, { Component } from "react";
import Header from "../../../Design/header";
import "../Proj_dets/css_file.css";
import Sunset from "../../../../images/img/Sunset.jpg";
import SideDrawer from "../../../Design/sidebar_components/SideDrawer";
import Backdrop from "../../../Design/sidebar_components/Backdrop";

class cart extends Component {
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

        <h1 className="project_">Transportation Cart</h1>
        <div className="content">
          <p className="description">
            At this manufacturing facility, there was a need to transport
            sensitive parts throughout the plant. The painted aluminum parts
            were prone to scratching which resulted in QC issues. I was tasked
            to design a cart capable of transporting aluminum cladding of
            different sizes through multiple different processes throughout the
            whole facility. The finalized design would replace the aging
            transports throughout the shop. 20 units were produced and due to
            the customizable design, were easy to use produce in a variety of
            different sizes to accommodate even more parts. Each cart cost a
            total of 1500 dollars to manufacture, giving a total project cost of
            $30,000.
          </p>
          <img className="pic1" src={Sunset} />
        </div>
        <p className="second_paragraph">
          The carts were manufactured using standard steel. The cart was tested
          using FEA to ensure capable weight carrying capacity. It was then
          tested using a 100KG weight to ensure safety compliance.
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
              The purpose of this cart was to transport large pieces of aluminum
              cladding through-out the manufacturing facilitiy, quickly and
              efficiently.
            </div>
          </div>
          <div className="contraint">
            <h1>Approach</h1>
            <div className="purpose">
              An adjustabe design was choosen as per stake-holder
              recommendations. The cart would need to be able to carry parts of
              varing shapes and sizes throughout its work cycle.
            </div>
          </div>
          <div className="contraint">
            <h1>Results</h1>
            <div className="purpose">
              The prototype manufactured met its required function. Small tweeks
              were made to the final design to make the cart more robust and
              structurally sound.
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

export default cart;
