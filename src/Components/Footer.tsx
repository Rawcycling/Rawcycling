import logo from "/logoWhite.png";
import instagram from "/instagram.png";
import twitter from "/twitter.png";
import youtube from "/youtube.png";
import send from "/send.png";
import arrow from "/up-arrow.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const handleClick = () => {
    const targetElement = document.getElementById("home");
    if (targetElement) {
      const offset = targetElement.offsetTop - 150;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-[#164C28] py-[75px] px-[180px] sm:px-[10px] md:px-[20px] flex flex-row sm:flex-col md:flex-col sm:gap-[50px] md:gap-[50px] items-start justify-between">
      <div>
        <img src={logo} alt="" />

        <div className="mt-[47px]">
          <p className="font-inter font-normal text-[14px] text-white">
            Copyright © 2024 Rawcycling
          </p>
          <p className="font-inter font-normal text-[14px] text-white">
            All rights reserved
          </p>
        </div>

        <div className="flex flex-row items-center gap-[20px] mt-[47px]">
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>

      <div className="flex flex-row sm:flex-col items-start gap-[50px] md:w-[100%] md:justify-between">
        <div>
          <h1 className="font-inter font-semibold text-[23px] text-white">
            Company
          </h1>

          <div className="flex flex-col gap-[15px] mt-[28px]">
            <p className="font-inter font-normal text-[14px] text-white">
              About us
            </p>
            <p className="font-inter font-normal text-[14px] text-white">
              Contact us
            </p>
            <p className="font-inter font-normal text-[14px] text-white">
              Pricing
            </p>
            <p className="font-inter font-normal text-[14px] text-white">
              Testimonials
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-inter font-semibold text-[23px] text-white">
            Support
          </h1>

          <div className="flex flex-col gap-[15px] mt-[28px]">
            <p className="font-inter font-normal text-[14px] text-white">
              Help center
            </p>
            <p className="font-inter font-normal text-[14px] text-white">
              Terms of service
            </p>
            <p className="font-inter font-normal text-[14px] text-white">
              Legal
            </p>
            <p className="font-inter font-normal text-[14px] text-white">
              Privacy Policy
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-inter font-semibold text-[23px] text-white">
            Stay up to date
          </h1>

          <div className="mt-[30px] flex flex-row items-center gap-[5px] bg-[#ffffff1c] rounded-[10px] py-[10px] md:py-[20px] px-[25px] md:px-[35px]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your email address"
              className="bg-transparent outline-none border-none text-white"
            />
            <img src={send} alt="" />
          </div>
        </div>
      </div>

      <AnchorLink
        href={`#home`}
        className="absolute z-[10000000] right-0 pr-[50px] pt-[220px]"
        onClick={handleClick}
      >
        <img src={arrow} alt="" width={50} />
      </AnchorLink>
    </div>
  );
};

export default Footer;
