import React from "react";
import Slider from "react-slick";

const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", background: "green" }}
    onClick={onClick}
  />
);

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <CustomArrow
      className={className}
      style={{ ...style, right: "-30px", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <CustomArrow
      className={className}
      style={{ ...style, left: "-30px", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const SliderComponent = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider
      {...settings}
      className="w-9/12 bg-white p-10 ml-auto mr-auto flex slide"
    >
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
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
  );
};

export default SliderComponent;
