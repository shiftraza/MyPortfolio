import React, { Component } from "react";
import Header from "../../Design/header";
import "./About.css";
import Back from "./Back";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Back />
        <div className="contactinfo">
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

export default About;
