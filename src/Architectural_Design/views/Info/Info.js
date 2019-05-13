import React, { Component } from "react";
import Header from "../../Design/header";
import Back from "../About/Back";
import "./Info.css";
import Rez from "../../Body_Main/Stack";
import Work from "./Work";

class Info extends Component {
  render() {
    const paragraph =
      "I was at shoplogix for my fourth coop. During my time at shoplogix I worked on a variety of different projects to optimize the customer satisfaction process. This involved interfacing with the present GUI and also making incremental changes to it as well. I worked on developing code using python to automatically interface with the website forums to send information. I also worked on an API in VBA to allow customers to request their own performance indexes using pre-specified parameters. This was done using searching XML nodes and child nodes for specified fields. Lastly I also got the opportunity to debug front-end(Javascript) code. This also involved some C# tinkering which I was able to pick up with some help from senior developers. ";
    const header = "Shoplogix";
    const ref = "https://www.google.com/";

    return (
      <div className="test">
        <Header />
        <Back />
        <div className="masterinfo">
          <Rez />
          <div className="number">780-880-56d66</div>
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
          <Work paragraph={paragraph} header={header} ref={ref} />
        </div>
      </div>
    );
  }
}

export default Info;
