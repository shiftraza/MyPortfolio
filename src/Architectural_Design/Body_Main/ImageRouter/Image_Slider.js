import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import "../../views/Info/Info.css";

class Slider extends React.Component {
  render() {
    const images = [
      {
        url: "http://i67.tinypic.com/vynptd.png"
      },
      {
        url: "http://i65.tinypic.com/2n8n6uv.png"
      },
      {
        url: "http://i63.tinypic.com/dddsg7.png"
      },
      {
        url: "http://i63.tinypic.com/2vcvyow.png"
      },
      {
        url: "http://i65.tinypic.com/157kvow.jpg"
      }
    ];

    return (
      <div className="pics">
        <SimpleImageSlider
          className="slide"
          width={321}
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
