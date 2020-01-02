import React from "react";
import { Spring } from "react-spring/renderprops";
import "./body_design.css";
export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -500 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ duration: 2000 }}
    >
      {props => (
        <div style={props}>
          <div>
            <div className="Name_View">Armghan Haider</div>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  color: "red",
  padding: "1.5rem"
};

// const counter = {
//  background: "#333",
//  textAlign: "center",
//  width: "100px",
//  borderRadius: "50%",
//  margin: "1rem auto"
//};
