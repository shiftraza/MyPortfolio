import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "./Architectural_Design/views/About/About";
import Projects from "./Architectural_Design/views/Projects/Projects";
import Home from "./Architectural_Design/views/Home/Home";
import Body from "./Architectural_Design/Body_Main/Body";
import Info from "./Architectural_Design/views/Info/Info";
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
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";

// import Testfile from "./Architectural_Design/views/TestView/Testfile";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects2} />
      <Route exact path="/info" component={Info} />
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
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
