import React from "react";
import { HiAcademicCap, HiOutlineLightBulb } from "react-icons/hi";
import { FaHeadSideVirus } from "react-icons/fa";
import { Typography } from "../Typography";
const Card = ({ props }) => {
  return (
    <div className="lg:py-20 lg:flex lg:flex-row cardContainer">
      <div className="sm:grid lg:flex lg:flex-row lg:px-12 lg:w-9/12 lg:h-80 content-between place-content-center  bg-primary justify-items-center justify-self-center rounded-2xl  cardCenter">
        <div>
          <div className="mb-3">
            <HiAcademicCap
              color="#E159FF"
              className="w-10 h-10 bg-gray-500 rounded-br-2xl rounded-tl-2xl rounded-tr-sm"
            />
          </div>
          <div className="mb-2">
            <Typography as="h4" {...props} colorSecondary bold>
              Quality education
            </Typography>
          </div>
          <div>
            <Typography {...props} as="p" align="start" colorSecondary>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque suscipit, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Doloremque suscipit,
            </Typography>
          </div>
        </div>
        <div className="lg:border-dotted lg:border-l border-white pl-9">
          <div className="mb-3">
            <HiOutlineLightBulb
              color="5E9C08"
              className="w-10 h-10 bg-gray-500 rounded-br-2xl rounded-tl-2xl rounded-tr-sm"
            />
          </div>
          <div className="mb-2">
            <Typography as="h4" {...props} colorSecondary bold>
              Intellectual development
            </Typography>
          </div>
          <div>
            <Typography {...props} as="p" align="start" colorSecondary>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque suscipit, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Doloremque suscipit,
            </Typography>
          </div>
        </div>
        <div className="lg:border-dotted lg:border-l border-white pl-9">
          <div className="mb-3">
            <FaHeadSideVirus
              color="#006600"
              className="w-10 h-10 bg-gray-500 rounded-br-2xl rounded-tl-2xl rounded-tr-sm"
            />
          </div>
          <div className="mb-2">
            <Typography as="h4" {...props} colorSecondary bold>
              Moral ethics
            </Typography>
          </div>
          <div>
            <Typography as="p" {...props} align="start" colorSecondary>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque suscipit, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Doloremque suscipit,
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
