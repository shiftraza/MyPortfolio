import SimpleImageSlider from "react-simple-image-slider";
import React, { Component } from "react";

class Slider extends React.Component {
  render() {
    const images = [
      {
        url: "http://i63.tinypic.com/345hdhv.png"
      },
      {
        url: "http://i65.tinypic.com/2n8n6uv.png"
      },
      {
        url: "http://i66.tinypic.com/29wvmvr.jpg"
      },
      {
        url: "http://i67.tinypic.com/2rc6hjn.jpg"
      },
      {
        url: "http://i65.tinypic.com/157kvow.jpg"
      }
    ];

    return (
      <div>
        <SimpleImageSlider
          width={300}
          height={200}
          images={images}
          navStyle={2}
          showNavs={true}
        />
      </div>
    );
  }
}

export default Slider;
