import React from "react";
import Resume from "../../images/PDF/Armghan_Haider_Resume_2019.pdf";

export default function Rez() {
  return (
    <div className={"resume-container"}>
      <div id={"resume-pdf"}>
        You can view, download and print my résumé in pdf format in{" "}
        <a href={Resume}>English</a> and <a href={"#"}>Spanish</a>
      </div>
    </div>
  );
}
