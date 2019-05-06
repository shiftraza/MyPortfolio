import SimpleImageSlider from "react-simple-image-slider";
import React from "react";

class Slider4 extends React.Component {
  render() {
    const images = [
      {
        url: "http://i67.tinypic.com/14mf2w1.png"
      },
      {
        url: "http://i67.tinypic.com/vynptd.png"
      },
      {
        url: "http://i66.tinypic.com/10p0yoh.jpg"
      },
      {
        url: "http://i68.tinypic.com/2rxxgy0.png"
      }
    ];

    return (
      <div>
        <SimpleImageSlider
          width={330}
          height={200}
          images={images}
          navStyle={2}
          showNavs={true}
        />
      </div>
    );
  }
}

export default Slider4;
