import React from "react";
import { Spring } from "react-spring/renderprops";

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
            <b>Undergraduate Student at the University of Waterloo</b>
          </p>
        </div>
      )}
    </Spring>
  );
}
