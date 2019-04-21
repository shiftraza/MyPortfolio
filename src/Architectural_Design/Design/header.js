import React, { Component } from "react";
import "./header.css";
import Logo from "../../images/img/logo.jpg";

// "/Users/Haider Raza/Portfolio/portfolio/src/Architectural_Design/Assets";

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
              <a href="http://localhost:3000/"> Home</a>
            </nav>
            <nav className="project">
              <a href="http://localhost:3000/projects">Projects</a>
            </nav>
            <nav className="moreinfo">
              <a href="http://localhost:3000/info">Info</a>
            </nav>
            <nav className="contact">
              <a href="http://localhost:3000/about">About</a>
            </nav>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
