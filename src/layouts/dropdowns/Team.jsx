import React, { useState } from "react";
import { IoIosArrowDropdown, IoLogoLinkedin } from "react-icons/io";
import { AiFillBehanceCircle } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { Typography } from "../../components/Typography";

const Team = ({ props }) => {
  const [selectedValue, setSelectedValue] = useState(false);
  const icons = {
    color: "#fff",
  };
  return (
    <div>
      <div
        onClick={() => {
          setSelectedValue(!selectedValue);
        }}
        className="flex border-b-[0.3px] border-solid border-white w-4/5 mr-auto ml-auto cursor-pointer"
      >
        <div className="w-5 h-5 rounded-full bg-[#fff] mt-3 mr-4"></div>
        <div className=" flex-1">
          <Typography className="text-[#fff] text-2xl mdtext-3xl lg:text-4xl">
            Team
          </Typography>
        </div>
        <div>
          <IoIosArrowDropdown {...icons} className="w-7 h-7 mt-2" />
        </div>
      </div>
      <div
        className={
          selectedValue
            ? "block place-items-center bg-white/20 p-10 w-4/5 mr-auto ml-auto  mt-8 rounded-b-lg"
            : "hidden"
        }
      >
        <div className="grid lg:flex lg:flex-row mr-auto ml-auto gap-5 place-items-center justify-items-center justify-center">
          <div>
            <div>
              <img
                className="w-[278px] h-[278px] rounded-xl"
                src="https://www.swansea.ac.uk/international-students/my-country/nigeria/Oluwafunmibi.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                <Typography
                  {...props}
                  gutterBottom
                  className="text-white text-2xl text-start"
                >
                  Tosin Paul
                </Typography>
              </div>
              <div className="flex flex-row pt-2">
                <IoLogoLinkedin {...icons} />
                <AiFillBehanceCircle {...icons} />
                <BsGlobe2 {...icons} />
              </div>
            </div>
            <div>
              <Typography className="text-white text-start">
                Board member
              </Typography>
            </div>
          </div>

          <div>
            <div>
              <img
                className="w-[278px] h-[278px] rounded-xl"
                src="https://www.swansea.ac.uk/international-students/my-country/nigeria/Oluwafunmibi.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                <Typography
                  {...props}
                  gutterBottom
                  className="text-white text-2xl text-start"
                >
                  Tosin Paul
                </Typography>
              </div>
              <div className="flex flex-row pt-2">
                <IoLogoLinkedin {...icons} />
                <AiFillBehanceCircle {...icons} />
                <BsGlobe2 {...icons} />
              </div>
            </div>
            <div>
              <Typography className="text-white text-start">
                Board member
              </Typography>
            </div>
          </div>
          <div>
            <div>
              <img
                className="w-[278px] h-[278px] rounded-xl"
                src="https://www.swansea.ac.uk/international-students/my-country/nigeria/Oluwafunmibi.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                <Typography
                  {...props}
                  gutterBottom
                  className="text-white text-2xl text-start"
                >
                  Tosin Paul
                </Typography>
              </div>
              <div className="flex flex-row pt-2 justify-between">
                <IoLogoLinkedin {...icons} />
                <AiFillBehanceCircle {...icons} />
                <BsGlobe2 {...icons} />
              </div>
            </div>
            <div>
              <Typography className="text-white text-start">
                Board member
              </Typography>
            </div>
          </div>
        </div>
        <div className="grid lg:flex lg:flex-row mr-auto ml-auto gap-5 justify-items-center justify-center">
          <div>
            <div>
              <img
                className="w-[278px] h-[278px] rounded-xl"
                src="https://www.swansea.ac.uk/international-students/my-country/nigeria/Oluwafunmibi.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                <Typography
                  {...props}
                  gutterBottom
                  className="text-white text-2xl text-start"
                >
                  Tosin Paul
                </Typography>
              </div>
              <div className="flex flex-row pt-2">
                <IoLogoLinkedin {...icons} />
                <AiFillBehanceCircle {...icons} />
                <BsGlobe2 {...icons} />
              </div>
            </div>
            <div>
              <Typography className="text-white text-start">
                Board member
              </Typography>
            </div>
          </div>

          <div>
            <div>
              <img
                className="w-[278px] h-[278px] rounded-xl"
                src="https://www.swansea.ac.uk/international-students/my-country/nigeria/Oluwafunmibi.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                <Typography
                  {...props}
                  gutterBottom
                  className="text-white text-2xl text-start"
                >
                  Tosin Paul
                </Typography>
              </div>
              <div className="flex flex-row pt-2">
                <IoLogoLinkedin {...icons} />
                <AiFillBehanceCircle {...icons} />
                <BsGlobe2 {...icons} />
              </div>
            </div>
            <div>
              <Typography className="text-white text-start">
                Board member
              </Typography>
            </div>
          </div>
          <div>
            <div>
              <img
                className="w-[278px] h-[278px] rounded-xl"
                src="https://www.swansea.ac.uk/international-students/my-country/nigeria/Oluwafunmibi.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-1">
                <Typography
                  {...props}
                  gutterBottom
                  className="text-white text-2xl text-start"
                >
                  Tosin Paul
                </Typography>
              </div>
              <div className="flex flex-row pt-2">
                <IoLogoLinkedin {...icons} />
                <AiFillBehanceCircle {...icons} />
                <BsGlobe2 {...icons} />
              </div>
            </div>
            <div>
              <Typography className="text-white text-start">
                Board member
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
