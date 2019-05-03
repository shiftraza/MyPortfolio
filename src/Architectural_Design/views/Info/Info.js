import React, { Component } from "react";
import Header from "../../Design/header";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="infocontainer">
          <div className="Personal">
            <div className="Skills">
              <div className="text">
                <header>SKILLS</header>
                <ul className="list">
                  <li>3D Modelling</li>
                  <li>Surface Modelling</li>
                  <li>Python</li>
                  <li>React JS</li>
                  <li>Excel - VBA</li>
                  <li>Soldering and Wood working</li>
                  <li>Eletrical and hardware tinkering</li>
                </ul>
              </div>
            </div>
            <div className="Interests">
              <div className="text2">
                <header>INTERESTS</header>
                <ul className="list">
                  <li>Autonomus Vehicles</li>
                  <li>Web Development (Websites)</li>
                  <li>System Integration</li>
                  <li>Controls Design</li>
                  <li>Design for manufacturability</li>
                  <li>3D printing</li>
                  <li>Design Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;

/*
import React, { Component } from "react";
import Header from "../../Design/header";
import "./Home.css";

import Body from "../../Body_Main/Body";
import { Spring } from "react-spring";

class Home extends Component {
  render() {
    return (
      <Spring
      from = {{ opacity:0}}
      from = {{ opacity:1}>
        {props => (
          <div style={props}>
            <div style={c1Style}>
              <div id="hero">
                <div id="hero-overlay" />
                <Body />
              </div>
            </div>
          </div>
        )}
        <Header />
      </Spring>
    );
  }
}

export default Home;

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
*/
