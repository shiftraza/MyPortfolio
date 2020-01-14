import React from "react";
import Resume from "../../images/PDF/Armghan Haider_Resume_Package.pdf";
import "../views/Home/Home.css";

export default function Rez() {
  return (
    <div>
      <div className="resume-container">
        <div id="linkedin-pdf">
          {" "}
          <a className="anotherflash2" href={Resume}>
            R E S U M E
          </a>
        </div>
      </div>
      <div className="linkedin-container">
        <div className="linkedin-pdf">
          {" "}
          <a
            className="anotherflash2"
            href="https://www.linkedin.com/in/armghanhaider/"
          >
            L I N K E D I N
          </a>
        </div>
      </div>
      <div className="github-container">
        <div className="linkedin-pdf">
          {" "}
          <a
            className="anotherflash2"
            href="https://github.com/shiftraza?tab=repositories"
          >
            G I T H U B
          </a>
        </div>
      </div>
    </div>
  );
}
