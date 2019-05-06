import React, { Component } from "react";
import Header from "../../Design/header";
import Back from "../About/Back";
import "./Info.css";
import Rez from "../../Body_Main/Stack";
import "../../views/Home/Home.css";
class Info extends Component {
  render() {
    return (
      <div className="test">
        <Header />
        <Back />
        <div className="masterinfo">
          <Rez />
          <div className="number">780-880-5666</div>
          <div className="email">
            <a
              className="emaillink"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            >
              a32haide@edu.uwaterloo.ca
            </a>
          </div>
          <div className="linkedin">
            <a
              className="linkedinlink"
              href="https://www.linkedin.com/in/armghanhaider/"
            >
              /armghanhaider/
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
