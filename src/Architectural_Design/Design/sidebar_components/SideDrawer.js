import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li className="Home">
          <a href="/">Home</a>
        </li>
        <li className="Projects">
          <a href="#/Projects">Projects</a>
        </li>
        <li className="Experience">
          <a href="#/Info">Experience</a>
        </li>
        <li className="About">
          <a href="#/About">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
