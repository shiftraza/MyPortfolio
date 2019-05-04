import React, { Component } from "react";
import Particles from "react-particles-js";
import "./About.css";
const particlesOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
};

class Back extends Component {
  render() {
    return <Particles className="particles" params={particlesOptions} />;
  }
}

export default Back;
