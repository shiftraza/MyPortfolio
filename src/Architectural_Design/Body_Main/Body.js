import React from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Rez from "./Stack";
import "./body_design.css";
class Body extends React.Component {
  state = {
    showComponent3: false
  };

  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 />
        <Rez />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Body />, rootElement);

export default Body;
