import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed z-10 top-0 left-0 text-white p-4 xlg:px-20 w-full  h-14 uppercase">
      {/* <nav className="fixed z-10 top-0 left-0 text-white p-4 w-full max-w-[1440px] h-14 uppercase"> */}
      <div className=" bg-white text-[#232323] flex justify-between items-center rounded-full p-3 w-full">
        <div className="h-10">
          <img src="/logo.png" alt="" className="h-full" />
        </div>
        <ul className="hidden primary lg:flex justify-center items-center gap-6 text-16">
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
        <button className="hidden primary lg:block bg-black font-bold rounded-full px-5 py-4 text-15 text-skyBlue">
          early access
        </button>
        <button
          className="lg:hidden bg-black font-bold rounded-full px-3 py-4 text-15 text-skyBlue"
          onClick={menuHandler}
        >
          <img src="/menu.png" alt="" className="h-6 w-6" />
        </button>
      </div>
      {/* Responsive menu dropdown */}
      {menuOpen && (
        <ul className="absolute primary w-full top-20 left-0 flex flex-col justify-center items-center gap-6 text-16 bg-white text-darkGray text-center mt-2 h-40 ">
          <li className="cursor-pointer" onClick={closeMenu}>
            <a href="#goal">about</a>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <a href="#works">how it works</a>{" "}
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <a href="#news">news</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

// import React from "react";

// const Nav = () => {
//   return (
//     <nav className="fixed z-10 top-0 left-0 text-white p-[32px]  w-screen h-[56px] uppercase ">
//       <div className="relative bg-white text-[#232323] flex justify-between items-center rounded-full p-[12px] w-full ">
//         <div className="h-[47px] ">
//           <img src="/logo.png" alt="" className="h-full" />
//         </div>
//         <ul className="hidden justify-center items center gap-6 secondary text-[16px]  lg:block lg:flex">
//           <li className="cursor-pointer">
//             <a href="">about</a>
//           </li>
//           <li className="cursor-pointer">
//             <a href="">how it works</a>{" "}
//           </li>
//           <li className="cursor-pointer">
//             <a href="">news</a>
//           </li>
//         </ul>
//         <button className="hidden lg:block bg-black font-bold rounded-full px-[21px] py-[19px] primary text-[15px] text-skyBlue">
//           early access
//         </button>
//         <button className="lg:hidden bg-black font-bold rounded-full px-[21px] py-[22px] primary text-[15px] text-skyBlue" onClick={menuHandler}>
//           <img src="/menu.png" alt="" className="h-6 w-6" />
//         </button>
//       </div>
//       {/* menu dropdown */}
//       <ul className="absolute w-full top-0 left-0 flex flex-col justify-center item-center gap-6 secondary text-[16px] bg-white  text-darkGray text-center mt-32 h-40">
//         <li className="cursor-pointer">
//           <a href="">about</a>
//         </li>
//         <li className="cursor-pointer">
//           <a href="">how it works</a>{" "}
//         </li>
//         <li className="cursor-pointer">
//           <a href="">news</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;
// import React from "react";

// const Nav = () => {
//   return (
//     <nav className="fixed z-10 top-0 left-0 text-white p-[32px]  w-full h-[56px] uppercase ">
//       <div className="bg-white text-[#232323] flex justify-between items-center rounded-full p-[12px]">
//         <div className="h-[47px] ">
//           <img src="/logo.png" alt="" className="h-full" />
//         </div>
//         <ul className="flex justify-center items center gap-6 secondary text-[16px] ">
//           <li className="cursor-pointer">
//             <a href="">about</a>
//           </li>
//           <li className="cursor-pointer">
//             <a href="">how it works</a>{" "}
//           </li>
//           <li className="cursor-pointer">
//             <a href="">news</a>
//           </li>
//         </ul>
//         <button className="bg-black font-bold rounded-full px-[21px] py-[19px] primary text-[15px] text-skyBlue">
//           early access
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
