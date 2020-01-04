import React, { Component } from "react";
import Header from "../../../Design/header";
import "../XP_dets/css_XP.css";
import Sunset from "../../../../images/img/Sunset.jpg";

class Andersen extends Component {
  render() {
    return (
      <div className="head1">
        <Header />
        <div className="all_info">
          <h1 className="project_">Andersen Corp</h1>
          <div className="content">
            <p className="description">
              blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
            </p>
            <img className="pic1" src={Sunset} />
          </div>
          <p className="second_paragraph">
            blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
          </p>
          <div className="pic_container">
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
            <img className="pic" src={Sunset} />
          </div>
          <div className="contraint_container">
            <div className="contraint">
              <h1>Purpose</h1>
              123blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
            </div>
            <div className="contraint">
              <h1>Approach</h1>
              123blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
            </div>
            <div className="contraint">
              <h1>Results</h1>
              123blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
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
