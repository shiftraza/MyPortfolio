import React, { Component } from "react";
import ReactPlayer from "react-player";
import video1 from "../../../images/video/easy.mp4";

class Video2 extends Component {
  render() {
    return (
      <div className="wrapper">
        <video src={video1} autoPlay loop="1" width="100%" height="100%" />
      </div>
    );
  }
}

export default Video2;
