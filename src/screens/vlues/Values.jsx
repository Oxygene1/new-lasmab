import React from "react";
import { Container, Typography } from "../../components";
import { HiAcademicCap, HiOutlineLightBulb } from "react-icons/hi";
import { FaHeadSideVirus } from "react-icons/fa";
const Values = () => {
  return (
    <Container noGutter flex justify="center" className="py-20 bg-white">
      <Container
        as="div"
        flex="lg"
        noGutter
        justify="evenly"
        className="bg-[#671E78] justify-center p-10 lg:rounded-xl md:w-4/5 lg:w-4/5 lg:pl-20 md:mr-auto md:ml-auto"
      >
        <div className="lg:border-r lg:pr-8 lg:border-dashed mr-auto ml-auto mb-5 border-b border-dashed lg:border-b-0">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20 rounded-lg mr-auto ml-auto md:mr-0 md:ml-0">
            <HiAcademicCap
              color="#E159FF"
              className="w-[60px] h-[60px] mr-auto ml-auto cardIcons"
            />
          </div>
          <Typography className="text-white mb-2 text-center md:text-justify">
            Quality Education
          </Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 md:w-72 lg:w-72 text-white text-center md:text-justify">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>

        <div className="lg:border-b-0 lg:pl-5 mb-5 border-b border-dashed lg:border-r lg:border-dashed lg:pr-8 ">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20 rounded-lg mr-auto ml-auto md:mr-0 md:ml-0">
            <HiOutlineLightBulb
              color="#5E9C08"
              className="w-[60px] h-[60px] mr-auto ml-auto cardIcons"
            />
          </div>
          <Typography className="text-white mb-2 text-center md:text-justify">
            Quality Education
          </Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 md:w-72 text-white text-center md:text-justify">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>

        <div className="lg:pl-5 lg:pr-8">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20 rounded-lg mr-auto ml-auto md:mr-0 md:ml-0">
            <FaHeadSideVirus
              color="#006600"
              className="w-[60px] h-[60px] mr-auto ml-auto cardIcons"
            />
          </div>
          <Typography className="text-white mb-2 text-center md:text-justify">
            Quality Education
          </Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 md:w-72 lg:w-72 text-white text-center md:text-justify">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>
      </Container>
    </Container>
  );
};

export default Values;
