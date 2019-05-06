import SimpleImageSlider from "react-simple-image-slider";
import React from "react";

class Slider3 extends React.Component {
  render() {
    const images = [
      {
        url: "http://i68.tinypic.com/2rxxgy0.png"
      },
      {
        url: "http://i63.tinypic.com/35n3q5s.png"
      },
      {
        url: "http://i68.tinypic.com/20zz729.png"
      },
      {
        url: "http://i68.tinypic.com/warm6e.png"
      },
      {
        url: "http://i65.tinypic.com/vqis8x.png"
      },
      {
        url: "http://i64.tinypic.com/rhu4ub.png"
      },
      {
        url: "http://i67.tinypic.com/21orfo4.png"
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

export default Slider3;
