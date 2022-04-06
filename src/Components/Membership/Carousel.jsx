import { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  "https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Coco.png",
  "https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Lowry.png",
  "https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Molina-1.png",
];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Car">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
