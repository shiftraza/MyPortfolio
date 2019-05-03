import React, { Component } from "react";
import Header from "../../Design/header";
import "./Home.css";
import Body from "../../Body_Main/Body";
import Rez from "../../Body_Main/Stack";
import Back from "../About/Back";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="hero">
          <div id="hero-overlay" />
          <Body />
          <Back />
        </div>
        <Rez />
      </div>
    );
  }
}

export default Home;
