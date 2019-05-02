import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./Architectural_Design/views/About/About";
import Projects from "./Architectural_Design/views/Projects/Projects";
import Home from "./Architectural_Design/views/Home/Home";
import Body from "./Architectural_Design/Body_Main/Body";
import Info from "./Architectural_Design/views/Info/Info";
import Flex from "./Architectural_Design/Image_Component/flex";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/body" component={Body} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
