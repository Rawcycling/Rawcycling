import logo from "/logo.png";
import arrow from "/arrow.png";
import { useState } from "react";

const Navbar = () => {
  const [displayHamburger, setDisplayHamburger] = useState(false);

  const toggleHamburger = () => {
    setDisplayHamburger(!displayHamburger);
  };
  return (
    <>
      <div className="fixed w-[100%] px-[154px] sm:px-[10px] md:px-[20px] py-[22px] flex flex-row items-center z-[10000000] justify-between shadow-[0px_4.79px_9.58px_0px_#ABBED166] bg-[#fff]">
        <div className="w-[200px]">
          <img src={logo} alt="" />
        </div>

        <div className="sm:hidden md:hidden flex flex-row items-center gap-[25px]">
          <a
            href="/"
            className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
          >
            Home
          </a>

          <a
            href="#about"
            className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
          >
            About
          </a>

          <a
            href="#community"
            className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
          >
            Community
          </a>

          <a
            href="#services"
            className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
          >
            Services
          </a>

          <button className="bg-[#164C28] py-[16px] px-[38px] text-white  font-inter font-medium text-[15px] flex flex-row items-center gap-[10px] rounded-[5px] hover:shadow-2xl">
            Get RawApp
            <img src={arrow} alt="" />
          </button>
        </div>

        <div
          onClick={toggleHamburger}
          className="hidden sm:flex sm:flex-col sm:items-start sm:gap-[10px] md:flex md:flex-col md:items-start md:gap-[10px]"
        >
          <div className="w-[30px] h-[2px] bg-[#164C28] rounded-[3px]"></div>
          <div className="w-[35px] h-[2px] bg-[#164C28] rounded-[50px]"></div>
          <div className="w-[40px] h-[2px] bg-[#164C28] rounded-[50px]"></div>
        </div>
      </div>

      <div
        className={
          displayHamburger
            ? "absolute flex flex-col items-center justify-center w-[100%] gap-[25px] mt-[80px] bg-[#fff] shadow-2xl py-[20px] rounded-[50px] rounded-t-none"
            : "hidden"
        }
      >
        <a
          href="/"
          className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
        >
          Home
        </a>

        <a
          href="#about"
          className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
        >
          About
        </a>

        <a
          href="#community"
          className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
        >
          Community
        </a>

        <a
          href="#services"
          className="font-inter font-medium text-[15px] text-[#4D4D4D] leading-[28px] hover:text-[#164C28]"
        >
          Services
        </a>

        <button className="bg-[#164C28] py-[16px] px-[38px] text-white  font-inter font-medium text-[15px] flex flex-row items-center gap-[10px] rounded-[5px] hover:shadow-2xl">
          Get RawApp
          <img src={arrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
