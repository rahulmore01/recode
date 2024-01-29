import React from "react";

const Roadmap = () => {
  return (
    <div className="w-full  flex flex-col  justify-center items-center gap-12 px-4 mlg:px-[110px]  pb-0 ">
      <div className="flex flex-col justify-center items-center gap-12">
        <h3 className="primary text-[28px] mlg:text-[32px] text-darkPink text-center">
          OUR ROADMAP Over the next year we aim to
        </h3>
        <div className="flex  mlg:flex-col justify-center items-center SpaceMonoRegular text-[14px] mlg:text-[15px] !text-lightGray w-full border-collapse   text-center mlg:text-start ">
          <div className="flex flex-col mlg:flex-row ">
            <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px] md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px] rounded-tl-[16px]  flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 ">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                1
              </p>
              <span className="w-full max-w-[208px]">
                Onboard 100 nonprofits with campaign needs
              </span>
            </div>
            <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px]  md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px]  flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 ">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                2
              </p>
              <span className="w-full max-w-[208px]">
                Recruit 1,000 vetted creatives into active portal participation
              </span>
            </div>
            <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px] md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px]  flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 rounded-bl-[16px] mlg:rounded-bl-none mlg:rounded-tr-[16px]">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                3
              </p>
              <span className="w-full max-w-[208px]">
                Facilitate production of thousands of pieces of collateral
              </span>
            </div>
          </div>
          <div className="flex flex-col mlg:flex-row">
            <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px] md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px] rounded-tr-[16px] mlg:rounded-tr-none  mlg:rounded-bl-[16px] flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 ">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                4
              </p>
              <span className="w-full max-w-[208px]">
                Track $1m raised for causes due to our content
              </span>
            </div>
            <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px] md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px]  flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 ">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                5
              </p>
              <span className="w-full max-w-[208px]">
                Build an international awareness campaign around Recode
              </span>
            </div>
            <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px] md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px]  flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 rounded-br-[16px]">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                6
              </p>
              <span className="w-full max-w-[208px] " id="news">
                Project Recode v2 goes live with the launch of Avatars for
                Change.
              </span>
            </div>
          </div>
        </div>

        {/* img */}
        <div className="relative mt-10 pb-[90px] ">
          <img
            src="/join2.png"
            alt=""
            className=" mlg:hidden w-full vms:max-w-[400px] h-auto "
          />
          <img
            src="/join.png"
            alt=""
            className="hidden mlg:block w-full h-auto"
          />
          <div className="absolute  top-0 left-0 right-0 bottom-0 vms:bottom-32 mlg:bottom-20 flex flex-col vms:gap-8 mlg:gap-0 justify-center items-center text-center p-8 text-darkGray ">
            <h3 className="primary text-[32px] font-bold   mb-4 leading-9">
              Join The Movement
            </h3>
            <p className="SpaceMonoRegular text-[14px] mlg:text-[15px]   mb-6 w-full max-w-[800px]">
              Get early-adopter portal access plus perks like input on launch
              campaigns and special member NFTs. Together we'll evolve what's
              possible at the intersection of creativity and technology to
              accelerate a conscious future.
            </p>
            <div className="flex flex-col mlg:flex-row gap-3">
              <input
                className="primary  text-[14px] mlg:text-[15px] px-[23px] py-[17px] placeholder-darkGray rounded-full border border-darkGray bg-transparent w-full mlg:w-[416px] h-[56px]"
                type="text"
                placeholder="Your email address"
              />
              <button className="primary  text-[14px] mlg:text-[15px] bg-darkPink rounded-full   px-6 py-2  h-[56px] ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
