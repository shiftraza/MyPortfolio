import React, { Component } from "react";
import Header from "../../Design/header";
import "./Info.css";

class Info extends Component {
  render() {
    const paragraph =
      "Welcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to ReactWelcome to React";
    const header = "New World";
    return (
      <div>
        <Header />
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
