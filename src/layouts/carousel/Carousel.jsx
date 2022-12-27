import React from "react";
import Slider from "react-slick";

const CustomArrow = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick} />
);

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <CustomArrow
      className={className}
      style={{
        ...style,
        color: "#fff",
        backgroundColor: "#671E78",
        borderRadius: "50%",
      }}
      onClick={onClick}
      color="#fff"
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <CustomArrow
      className={className}
      style={{
        ...style,
        left: "-30px",
        borderRadius: "50%",
        color: "#fff",
        backgroundColor: "#671E78",
      }}
      onClick={onClick}
    />
  );
};

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-4/5 bg-white p-10 ml-auto mr-auto rounded-lg">
      <Slider className="slide p-2 " {...settings}>
        <div>
          <img className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div>
          <img className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div>
          <img className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div>
          <img
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div>
          <img className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div>
          <img className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
