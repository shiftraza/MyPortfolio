import React, { Component } from "react";
import Header from "../../Design/header";
import Back from "../About/Back";
import "./Info.css";
import Rez from "../../Body_Main/Stack";
import Work from "./Work";
import Work2 from "./Work2";

class Info extends Component {
  render() {
    const paragraph =
      "I was at shoplogix for my fourth coop. During my time at shoplogix I worked on a variety of different projects to optimize the customer satisfaction process. This involved interfacing with the present GUI and also making incremental changes to it as well. I worked on developing code using python to automatically interface with the website forums to send information. I also worked on an API in VBA to allow customers to request their own performance indexes using pre-specified parameters. This was done using searching XML nodes and child nodes for specified fields. Lastly I also got the opportunity to debug front-end(Javascript) code. This also involved some C# tinkering which I was able to pick up with some help from senior developers. ";
    const header = "Shoplogix";

    const paragraph2 =
      "I was at Andersen for my third coop. Andersen is an international company known for its high-end custom windows & door designs. During my internship at Anderson facility in London, I worked as a Process Engineer. I was responsible for imporoving processes through continuous improvement and Kaizen efforts. My responsibilities included designing customized racks, carts and hinges to increase production whilst reducing safety risks. As my co-op progressed at Andersen, I was given multiple mid-budget projects which involved installation of new and improved machines such as a Hegla glass-cutter and RF Press. During these projects, I learned to utilize root cause analysis techniques as well as developed a better understanding of Failure Mode Analysis to encourage lean manufacuturing practices.   ";
    const header2 = "Andersen Corp.";

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
          <div id="work1">
            <Work paragraph={paragraph} header={header} />
          </div>
          <div id="work2">
            <Work2 paragraph={paragraph2} header={header2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
