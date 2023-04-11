import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  carouselImg1,
  carouselImg2,
  carouselImg3,
} from "../../../assets/images";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="main-carousel"
      >
        <Carousel.Item>
          <img src={carouselImg3} alt="" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg1} alt="" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg2} alt="" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
