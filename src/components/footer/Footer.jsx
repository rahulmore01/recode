import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <h3 className="primary text-[28px] lg:text-[32px] text-darkPink  w-full px-4 text-center">
        Join Our Community
      </h3>
      <p className="SpaceMonoRegular  text-[14px] lg:text-[15px] text-lightGray w-full max-w-[440px] lg:max-w-[716px] text-center px-4">
        Even pre-launch, you can get involved by joining our collaboration
        channels on Discord and Telegram to connect with the global community!
      </p>
      <div className="flex gap-2 lg:gap-6 ">
        <button className="primary flex justify-center items-center gap-2 text-[15px] bg-skyBlue  text-darkGray rounded-full   px-6 py-2  h-[70px] w-[160px]">
          <img src="/footer-icons/discord.png" alt="" className="h-8 w-8" />{" "}
          discord
        </button>
        <button className="primary flex justify-center items-center gap-2 text-[15px] bg-skyBlue  text-darkGray rounded-full   px-6 py-2  h-[70px] w-[160px]">
          <img src="/footer-icons/telegram.png" alt="" className="h-8 w-8" />{" "}
          telegram
        </button>
      </div>
      <div>
        <h4 className="SpaceMonoRegular text-[15px] !text-lightGray mb-5">
          Follow our socials
        </h4>
        <div className="flex gap-6 h-6 w-6 mb-[30px]">
          <img src="/footer-icons/facebook.png" alt="" />
          <img src="/footer-icons/instagram.png" alt="" />
          <img src="/footer-icons/x.png" alt="" />
          <img src="/footer-icons/linkedin.png" alt="" />
        </div>
      </div>
      <img src="/footer-icons/recode-circle.png" alt="" className="w-16" />

      <footer>
        <ul className="flex justify-center items-center gap-6 primary text-[16px]  !text-lightGray">
          <li className="cursor-pointer">
            <a href="#goal">about</a>
          </li>
          <li className="cursor-pointer">
            <a href="#works">how it works</a>{" "}
          </li>
          <li className="cursor-pointer">
            <a href="#news">news</a>
          </li>
        </ul>
        <p className="pt-5 pb-16 SpaceMonoRegular text-[12px] !text-lightGray">
          2024 Project Recode. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
