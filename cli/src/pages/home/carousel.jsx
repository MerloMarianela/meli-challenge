import React from "react";
import Slider from "react-slick";
import { settings } from "./utils";
// import style from "./home.module.scss";

export const Carousel = ({ images }) => {
  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
