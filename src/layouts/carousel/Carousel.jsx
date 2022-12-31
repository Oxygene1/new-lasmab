import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MoonLoader } from "react-spinners";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Typography } from "../../components";
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

const SliderComponent = ({ props }) => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchools] = useState(schools?.[0]);

  /**
   * This function will set the passed school details on
   * setSelectedSchool then call the api to fetch the full details
   * on successful fetch, stores the full details on redux store
   * to be accessed on other components like "About the school",
   * "Portal" e.t.c.
   */
  const handleSchoolSelection = async (school) => {
    try {
      setSelectedSchools(school);
      const result = await axios.get(
        `https://lasmab.azurewebsites.net/api/v1.0/Website/GetSchoolProfile/${school?.schoolid}`
      );

      console.log(result);
      // save the result payload to redux store.
    } catch (error) {
      console.log(error);
    }
  };

  /* Setting the selected school to the first school in the array. */
  useEffect(() => {
    if (schools.length !== 0) {
      setSelectedSchools(schools?.[0]);
      handleSchoolSelection(schools?.[0]);
    }
  }, [schools?.length, setSelectedSchools]);

  /* This is a useEffect hook that is fetching data from the API. */
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const result = await axios.get(
          `https://lasmab.azurewebsites.net/api/v1.0/Website/GetSchools`
        );

        setSchools(result.data?.data);
      } catch (error) {
        console.log(error);
        fetchSchools();
      }
    };

    fetchSchools();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-white rounded-lg ml-auto mr-auto p-10 w-[100%]">
        <div className="w-[100] ml-auto mr-auto ">
          {schools.length !== 0 ? (
            <Slider className="slide p-2 grid md:flex-row" {...settings}>
              {schools.map((school) => (
                <div
                  onClick={() => handleSchoolSelection(school)}
                  key={school?.schoolid}
                  className="p-[0.2rem]"
                >
                  <img
                    className="rounded-lg"
                    src={
                      school?.logo ??
                      "https://marketplace.canva.com/EAEz7zOew58/2/0/1600w/canva-moon-light-logo-template-8pEo1H1XNj4.jpg"
                    }
                    alt={school?.schoolname}
                  />
                  <p className="text-center text-sm mt-3">
                    {school?.schoolname}
                  </p>
                </div>
              ))}
            </Slider>
          ) : (
            <MoonLoader color="#36d7b7" />
          )}
        </div>
      </div>

      <div className="w-[100%] p-10 ml-auto mr-auto rounded-lg bg-white mt-3">
        <h4 className="text-primary">{selectedSchool?.schoolname}</h4>
        <div className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5 text-primary" />
          <Typography {...props} className="text-primary">
            {selectedSchool?.schooladdress}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
