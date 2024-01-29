import React from "react";

const HeroCards = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center h-full  mt-8 lg:mt-10 xlg:gap-14">
      <div className=" w-[343px] h-[302px]  lg:w-[384px] lg:h-[336px] border border-darkPink rounded-[24px] text-lightGray text-[15px] flex flex-col justify-between items-start p-8 SpaceMonoRegular ">
        <h3 className="uppercase text-[20px] primary">For Nonprofits</h3>
        <p>Free custom digital assets to amplify initiatives</p>
        <p>Expanded reach and visibility</p>
        <p>Proven content through built-in focus grouping</p>
        <p>Monetized engagement funds future programs</p>
      </div>
      <div className="w-[343px] h-[302px]  lg:w-[384px] lg:h-[336px] border border-mediumYellow rounded-[24px] text-lightGray text-[15px] flex flex-col justify-between items-start p-8 SpaceMonoRegular">
        <h3 className="uppercase text-[20px] primary">For CREATORS</h3>
        <p>AI skill-building to improve creative workflows</p>
        <p>Compensation for applying talents meaningfully</p>
        <p>Community recognition and feedback loops</p>
        <p>Portfolio and résumé building</p>
      </div>
      <div className="w-[343px] h-[302px]  lg:w-[384px] lg:h-[336px] border border-skyBlue rounded-[24px] text-lightGray text-[15px] flex flex-col justify-between items-start p-8 SpaceMonoRegular">
        <h3 className="uppercase text-[20px] primary">For BRANDS</h3>
        <p>Tax incentives via non-profit contributions</p>
        <p>Next-gen cause marketing activations</p>
        <p>Trust and loyalty from conscious consumers</p>
        <p>Attracting purpose-driven future talent</p>
      </div>
    </div>
  );
};

export default HeroCards;
