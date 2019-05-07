import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import "../../views/Info/Info.css";

class Work_Slider extends React.Component {
  render() {
    const images = [
      {
        url: "http://i68.tinypic.com/i5t085.png"
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

export default Work_Slider;
