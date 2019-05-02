import React, { Component } from "react";
import "./header.css";
import Logo from "../../images/img/logo.jpg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <div id="logo">
            <img className="logo" src={Logo} alt="signature" />
          </div>

          <nav className="nav-bar">
            <nav className="home">
              <a href="#/"> Home</a>
            </nav>
            <nav className="project">
              <a href="#/projects">Projects</a>
            </nav>
            <nav className="moreinfo">
              <a href="#/info">Info</a>
            </nav>
            <nav className="contact">
              <a href="#/about">About</a>
            </nav>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
