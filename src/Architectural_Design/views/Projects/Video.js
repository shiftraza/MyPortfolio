import React, { Component } from "react";
import ReactPlayer from "react-player";
import video1 from "../../../images/video/easy.mp4";
import "./Projects.css";

class Video2 extends Component {
  render() {
    return (
      <div className="wrapper">
        <video className="vid" src={video1} autoPlay loop="1" />
      </div>
    );
  }
}

export default Video2;
