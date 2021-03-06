import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "./Architectural_Design/views/About/About";
import Projects from "./Architectural_Design/views/Projects/Projects";
import Home from "./Architectural_Design/views/Home/Home";
import Body from "./Architectural_Design/Body_Main/Body";
import Experience from "./Architectural_Design/views/Info/0Experience_proper";
import Projects2 from "./Architectural_Design/views/Projects/Projects_proper";
import Testfile from "./Architectural_Design/views/Projects/Projects_proper";

import AGV from "./Architectural_Design/views/Projects/Proj_dets/AGV";
import drivechain from "./Architectural_Design/views/Projects/Proj_dets/drivechain";
import cart from "./Architectural_Design/views/Projects/Proj_dets/cart";
import FEA from "./Architectural_Design/views/Projects/Proj_dets/FEA";
import crane from "./Architectural_Design/views/Projects/Proj_dets/crane";
import V6 from "./Architectural_Design/views/Projects/Proj_dets/V6";
import airplane from "./Architectural_Design/views/Projects/Proj_dets/airplane";
import gripper from "./Architectural_Design/views/Projects/Proj_dets/gripper";
import App from "./Architectural_Design/views/TestView/Testfile";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";

import Toyota from "./Architectural_Design/views/Info/XP_dets/Toyota";
import Nestle from "./Architectural_Design/views/Info/XP_dets/Nestle";
import Andersen from "./Architectural_Design/views/Info/XP_dets/Andersen";
import Shoplogix from "./Architectural_Design/views/Info/XP_dets/Shoplogix";

// import Testfile from "./Architectural_Design/views/TestView/Testfile";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects2} />
      <Route exact path="/info" component={Experience} />
      <Route exact path="/body" component={Body} />
      <Route exact path="/AGV" component={AGV} />
      <Route exact path="/drivechain" component={drivechain} />
      <Route exact path="/cart" component={cart} />
      <Route exact path="/FEA" component={FEA} />
      <Route exact path="/crane" component={crane} />
      <Route exact path="/V6" component={V6} />
      <Route exact path="/gripper" component={gripper} />
      <Route exact path="/airplane" component={airplane} />
      <Route exact path="/test" component={Testfile} />
      <Route exact path="/App" component={App} />
      <Route exact path="/Toyota" component={Toyota} />
      <Route exact path="/Andersen" component={Andersen} />
      <Route exact path="/Shoplogix" component={Shoplogix} />
      <Route exact path="/Nestle" component={Nestle} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
