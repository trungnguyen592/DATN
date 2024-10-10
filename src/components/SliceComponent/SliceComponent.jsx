import React from "react";
import { WrapperSlider } from "./style";
import { Image } from "antd";
const SliceComponent = ({ arrImage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <WrapperSlider {...settings}>
      {arrImage.map((image) => {
        return (
          <Image
            src={image}
            alt="slider"
            preview={false}
            width="100%"
            height="274px"
          />
        );
      })}
    </WrapperSlider>
  );
};

export default SliceComponent;
