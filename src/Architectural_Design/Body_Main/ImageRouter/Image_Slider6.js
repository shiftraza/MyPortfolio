import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import "../../views/Info/Info.css";

class Work_Slider2 extends React.Component {
  render() {
    const images = [
      {
        url: "http://i67.tinypic.com/15qp2k4.png"
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

export default Work_Slider2;
