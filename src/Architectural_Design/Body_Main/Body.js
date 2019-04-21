import React from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring";
import Component1 from "./Component1";
import Component2 from "./Component2";

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
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Body />, rootElement);

export default Body;

/*
import React from "react";
import {Spring} from 'react-spring';


export default function Body() {
  return (
      <Spring
      from {{...opacity:0}}
      from {{opacity:1}}>
          { props => (
              <div style = {props}>
    <div>
      <h1>Component1</h1>
      <p>
        newowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrldnewowrld
      </p>
    </div>
              </div>
          ) }
      </Spring>

  );
}
*/
