import React, { Component } from "react";
import Header from "../../Design/header";
import "./Home.css";
import Body from "../../Body_Main/Body";
import Rez from "../../Body_Main/Stack";
import Back from "../About/Back";

class Home extends Component {
  render() {
    return (
      <div className="head">
        <Header />
        <Back />
        <div id="hero">
          <div id="hero-overlay" />
        </div>
        <Body />
      </div>
    );
  }
}

export default Home;
