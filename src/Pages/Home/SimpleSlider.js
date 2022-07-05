import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import camera1 from "./Parts/camera1.jpg"
import camera2 from "./Parts/camera2.jpg"
import camera3 from "./Parts/camera3.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="bg-neutral">
        
        <Slider {...settings}>
          <div>
          <img style={{height: "60vh",width:  "100vw"}} src={camera1} alt="" />
          </div>
          <div>
          <img style={{height: "60vh",width:  "100vw"}}  src={camera2} alt="" />
          </div>
          <div>
          <img style={{height: "60vh",width:  "100vw"}}  src={camera3} alt="" />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}