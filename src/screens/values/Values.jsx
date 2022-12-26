import React from "react";
import { Container, Typography } from "../../components";

const Values = () => {
  return (
    <Container noGutter flex justify="center" className="py-20 bg-white">
      <Container
        as="div"
        flex="lg"
        noGutter
        justify="evenly"
        className="bg-[#671E78] py-10 lg:rounded-xl lg:w-4/5 lg:pl-20 px-5"
      >
        <div className="lg:border-r pr-8 border-dashed mb-4 lg:mb-0">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20 relative before:content-[' '] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:border-t-[29px] before:border-r-[29px] before:border-white/20"></div>
          <Typography className="text-white mb-2">Quality Education</Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 lg:w-72 text-white">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>

        <div className="lg:pl-5 lg:border-r pr-8 border-dashed mb-4 lg:mb-0">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20"></div>
          <Typography className="text-white mb-2">Quality Education</Typography>
          <Typography className="text-[18px] leading-[30px] opacity-50 w-72 text-white">
            End-to-end payments and financial management in a single solution.
            Meet the right platform.
          </Typography>
        </div>

        <div className="lg:pl-5 pr-8">
          <div className="h-[80px] w-[80px] mb-6 bg-white/20"></div>
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
