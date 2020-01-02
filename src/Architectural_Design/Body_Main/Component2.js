import React from "react";
import { Spring } from "react-spring/renderprops";
import "../Body_Main/body_design.css";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -500 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <p className="Intro">
            <b className="subsec">
              Undergraduate Student at the University of Waterloo
            </b>
          </p>
        </div>
      )}
    </Spring>
  );
}
