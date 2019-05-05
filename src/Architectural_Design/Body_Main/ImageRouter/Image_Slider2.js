import SimpleImageSlider from "react-simple-image-slider";
import React from "react";

class Slider2 extends React.Component {
  render() {
    const images = [
      {
        url: "http://i66.tinypic.com/10p0yoh.jpg"
      },
      {
        url: "http://i66.tinypic.com/eskiu9.png"
      },
      {
        url: "http://i66.tinypic.com/10frpdk.png"
      },
      {
        url: "http://i63.tinypic.com/25t8cvk.png"
      },
      {
        url: "http://i64.tinypic.com/6ep6i0.png"
      },
      {
        url: "http://i68.tinypic.com/2dbufis.png"
      },
      {
        url: "http://i63.tinypic.com/1j43ya.png"
      },
      {
        url: "http://i68.tinypic.com/153o10n.png"
      },
      {
        url: "http://i68.tinypic.com/111qiiw.png"
      }
    ];

    return (
      <div>
        <SimpleImageSlider
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

export default Slider2;
