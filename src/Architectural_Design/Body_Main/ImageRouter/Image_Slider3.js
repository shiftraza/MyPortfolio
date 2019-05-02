import SimpleImageSlider from "react-simple-image-slider";
import React from "react";

class Slider3 extends React.Component {
  render() {
    const images = [
      {
        url:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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

export default Slider3;
