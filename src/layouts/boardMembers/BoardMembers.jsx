import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillBehanceCircle } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { Typography } from "../../components/Typography";
const BoardMembers = ({ props }) => {
  const icons = {
    color: "#000000",
  };
  return (
    <div className="p-12">
      <div className="mb-10">
        <Typography {...props} className="text-primary text-center">
          THE BOARD MEMBERS
        </Typography>
        <Typography {...props} className="text-[#000000] text-2xl text-center">
          Meet Our Awesome Board Members
        </Typography>
      </div>
      <div className="flex flex-row mr-auto ml-auto gap-5 place-items-center justify-items-center justify-center">
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
                className="text-[#000000] text-2xl text-start"
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
            <Typography className="text-[#000000] text-start">
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
                className="text-[#000000] text-2xl text-start"
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
            <Typography className="text-[#000000] text-start">
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
                className="text-[#000000] text-2xl text-start"
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
            <Typography className="text-[#000000] text-start">
              Board member
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
