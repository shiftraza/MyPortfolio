import React from "react";
import Resume from "../../images/PDF/Armghan_Haider_Resume_2019.pdf";
import "../views/Home/Home.css";

export default function Rez() {
  return (
    <div className="resume-container">
      <div id="resume-pdf">
        You can view by resume in pdf format by clicking{" "}
        <a className="anotherflash" href={Resume}>
          HERE
        </a>
      </div>
    </div>
  );
}
