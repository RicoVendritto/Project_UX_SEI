import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

// images
// import slider_1 from "../resources/food/slider_1.jpg";
// import slider_2 from "../resources/food/slider_2.jpg";
import slider_1_3 from "../resources/food/slider_3.jpg";
// import slider_4 from "../resources/food/slider_4.jpg";

// Stock images unsplash
import slider_1 from "../resources/food/rico_1.jpeg";
import slider_2 from "../resources/food/rico_2.jpeg";
import slider_3 from "../resources/food/rico_3.jpeg";
import slider_4 from "../resources/food/rico_4.jpeg";
import slider_5 from "../resources/food/rico_5.jpeg";
import slider_6 from "../resources/food/rico_6.jpeg";
import slider_7 from "../resources/food/rico_7.jpeg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div className="awesome_opacity">
      <div className="awesome_slider">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={3000}
          animation="cubeAnimation"
          cssModule={AwesomeSliderStyles}
        >
          <div data-src={slider_1} />
          <div data-src={slider_2} />
          <div data-src={slider_3} />
          <div data-src={slider_4} />
          <div data-src={slider_5} />
          <div data-src={slider_6} />
          <div data-src={slider_7} />
          <div data-src={slider_1_3} />
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Slider;
