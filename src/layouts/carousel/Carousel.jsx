import React from "react";
import Slider  from "react-slick";
// import axios from "axios";

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
  // const API_URL = `https://lasmab.azurewebsites.net/api/v1.0/Website/GetSchoolProfile/1`;

  // async function fetchData() {
  //   const numOfSchools = 6;
  //   for (let index = 1, max = numOfSchools; index < max; index++) {
  //     try {
  //       const result = await axios.get(
  //         `https://lasmab.azurewebsites.net/api/v1.0/Website/GetSchoolProfile/${index}`
  //       );
  //       // return result.data;
  //       console.log(result.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

  // fetchData();
  // const [setSchool, isSchoolSelected] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const setSchool = await fetchData();
  //       isSchoolSelected(setSchool);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);
  // const newSchoolRes = isSchoolSelected(setSchool);
  // const logos = [
  //   {Schoolid: 1, logo : `${newSchoolRes}`},
  //   {Schoolid: 2, logo : `${newSchoolRes}`},
  //   {Schoolid: 3, logo : `${newSchoolRes}`},
  //   {Schoolid: 4, logo : `${newSchoolRes}`},
  //   {Schoolid: 5, logo : `${newSchoolRes}`}
  // ]
  // console.log(logos)

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
        {/* <div className="cardDiv h-40">
          {logos.map((logo) => (
              <img
                key={logo.Schoolid}
                className="rounded-lg h-full w-1/5 bg-red-600"
                src={logo.logo}
                alt="school logos"
              />
            ))}
        </div> */}
         <div className="cardDiv" >
          <img
            className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div className="cardDiv">
          <img
            className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div className="cardDiv">
          <img
            className="w-full h-full"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div className="cardDiv">
          <img
            className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div>
        <div className="cardDiv">
          <img
            className="rounded-lg"
            src="https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
            alt="school logos"
          />
        </div> 
      </Slider>
      <div className="w-4/5 p-10 ml-auto mr-auto rounded-lg">
        <div></div>
      </div>
    </div>
  );
};

export default SliderComponent;
