import React from "react";

const Solution = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mlg:gap-[120px] gap-[60px] my-10  p-6">
      <div className="w-[278px] h-[320px] lg:w-[470px] lg:h-[540px] mt-10 lg:mt-0">
        <img src="/solution.png" alt="solution.png" className="h-full w-full" />
      </div>
      <div className="w-full md:max-w-[300px] lg:max-w-[590px]  flex flex-col gap-6  ">
        <h3 className="primary text-[28px] lg:text-[32px] text-darkPink w-full text-center lg:text-left">
          our solution
        </h3>
        <p className="SpaceMonoRegular text-[14px]  lg:text-[15px] text-lightGray">
          Project Recode's innovative online platform facilitates a
          collaborative content creation process between nonprofits and creative
          professionals. Through this mechanism of matching causes and skills,
          developing custom assets, community voting, publication and sharing,
          Project Recode amplifies nonprofit reach while incentivizing
          purposeful work.
        </p>
      </div>
    </div>
  );
};

export default Solution;
