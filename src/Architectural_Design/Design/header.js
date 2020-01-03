import React, { Component } from "react";
import "./header.css";
import Logo from "../../images/img/logo.jpg";
import DrawerToggleButton from "./sidebar_components/DrawerToggleButton";

const Header = props => (
  <div className="Header">
    <header className="master1">
      <div className="button1">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div>
        <div id="logo">
          <img className="logo" src={Logo} alt="signature" />
        </div>

        <nav className="nav-bar">
          <nav className="home">
            <a className="nav" href="#/">
              {" "}
              Home
            </a>
          </nav>
          <nav className="project">
            <a className="nav" href="#/projects">
              Projects
            </a>
          </nav>
          <nav className="moreinfo">
            <a className="nav" href="#/info">
              Experience
            </a>
          </nav>
          <nav className="contact">
            <a className="nav" href="#/about">
              About Me
            </a>
          </nav>
        </nav>
      </div>
    </header>
  </div>
);

export default Header;
