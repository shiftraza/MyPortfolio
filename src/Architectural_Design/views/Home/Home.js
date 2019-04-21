import React, { Component } from "react";
import Header from "../../Design/header";
import "./Home.css";
import Body from "../../Body_Main/Body";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="hero">
          <div id="hero-overlay" />
          <Body />
        </div>
      </div>
    );
  }
}

export default Home;
