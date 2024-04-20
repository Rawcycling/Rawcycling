import { useEffect, useState } from "react";
import image1 from "/heroImg1.png";
import image2 from "/heroImg2.png";
import image3 from "/heroImg3.png";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      image: image1,
      text: "Join the Recycling ",
      span: "Revolution",
      paragraph:
        "Discover the power of recycling with Rawcycling. Earn rewards, make a difference, and transform waste into wealth. Join us today!",
    },
    {
      image: image2,
      text: "Eco-Friendly ",
      span: "Solutions",
      paragraph:
        "Discover the power of recycling with Rawcycling. Earn rewards, make a difference, and transform waste into wealth. Join us today!",
    },
    {
      image: image3,
      text: "Earn Rewards in ",
      span: "RawCoins",
      paragraph:
        "Discover the power of recycling with Rawcycling. Earn rewards, make a difference, and transform waste into wealth. Join us today!",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  });
  return (
    <>
      <div className="px-[154px] sm:px-[10px] py-[80px] sm:py-[50px] h-[80vh] sm:h-[100vh] flex flex-row sm:flex-col items-center justify-between w-[100%] gap-[125px] sm:gap-[0px] bg-[#F5F7FA]">
        <div className="w-[50%] sm:w-[100%]">
          <h1 className="font-inter font-semibold text-[75px] sm:text-[50px] text-[#4D4D4D] leading-[91px]">
            {carouselData[currentIndex]?.text}{" "}
            <span className="text-[#1A6334]">
              {carouselData[currentIndex]?.span}
            </span>
          </h1>
          <p className="font-inter font-normal text-[19px] leading-[28px] text-[#717171] mt-[20px] sm:mt-[10px]">
            {carouselData[currentIndex]?.paragraph}
          </p>

          <button className="bg-[#164C28] py-[16px] px-[38px] text-white mt-[38px] sm:mt-[10px] font-inter font-medium text-[15px] rounded-[5px] hover:shadow-2xl">
            Get RawApp
          </button>
        </div>

        <div className="w-[50%] sm:w-[100%]">
          <img src={carouselData[currentIndex]?.image} alt="" />
        </div>
      </div>

      <div className="flex flex-row items-center gap-[10px] mt-[20px] sm:mb-[20px] justify-center">
        {carouselData.map((_, index) => (
          <span
            key={index}
            className={
              index === currentIndex
                ? "w-[15px] h-[15px] rounded-full bg-[#1A6334] cursor-pointer"
                : "w-[15px] h-[15px] rounded-full bg-[#4CAF4F] cursor-pointer"
            }
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Hero;
