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
        className="bg-[#671E78] py-10 lg:rounded-xl lg:w-4/5 lg:pl-20 px-5 mr-auto ml-auto"
      >
        <div className="border-r pr-8 border-dashed">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20 rounded-lg">
            <HiAcademicCap
              color="#E159FF"
              className="w-[60px] h-[60px] mr-auto ml-auto cardIcons"
            />
          </div>
          <Typography className="text-white mb-2">Quality Education</Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 lg:w-72 text-white">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>

        <div className="pl-5 border-r pr-8 border-dashed">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20 rounded-lg">
            <HiOutlineLightBulb
              color="#5E9C08"
              className="w-[60px] h-[60px] mr-auto ml-auto cardIcons"
            />
          </div>
          <Typography className="text-white mb-2">Quality Education</Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 w-72 text-white">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>

        <div className="pl-5 pr-8">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20 rounded-lg">
            <FaHeadSideVirus
              color="#006600"
              className="w-[60px] h-[60px] mr-auto ml-auto cardIcons"
            />
          </div>
          <Typography className="text-white mb-2">Quality Education</Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 w-72 text-white">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>
      </Container>
    </Container>
  );
};

export default Values;
