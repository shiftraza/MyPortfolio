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
            <b>
              Hi! I'm currently a third year Mechanical Engineering student
              studying at the University of Waterloo. I am also looking for my
              next co-op internship (wink,wink)! I made this website using
              <b className="special"> HTML</b>, <b>CSS</b> and <b>React JS</b>.
              You can learn more about my background, sideprojects and past
              employment experience by clicking on the respective tabs above.
              Please feel free to contact at any time.
              <b className="special">
                <b className="flashy">Thanks, Enjoy!</b>
              </b>
            </b>
          </p>
        </div>
      )}
    </Spring>
  );
}
