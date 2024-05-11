import serviceIcon1 from "/serviceIcon1.png";

import serviceIcon3 from "/serviceIcon3.png";
const Services = () => {
  const serviceData = [
    {
      image: serviceIcon1,
      text: "Waste Collection",
      paragraph:
        "Convenient and reliable waste collection services tailored to your needs. Whether you're recycling at home, in your community, or at your workplace, Rawcycling is here to help.",
    },
    {
      image: serviceIcon1,
      text: "Recycling Rewards",
      paragraph:
        "Earn RawCoins for every recyclable item you contribute. From plastic bottles, every act of recycling earns you rewards that can be redeemed for topups, cashback, and more.",
    },
    {
      image: serviceIcon3,
      text: "Community Engagement",
      paragraph:
        "Join a community of like-minded individuals passionate about recycling and sustainability. Participate in events, challenges, and initiatives to make a positive impact on the environment and your community",
    },
  ];
  return (
    <div className="mt-[80px]" id="services">
      <h1 className="font-inter font-semibold text-[40px] text-center text-[#4D4D4D]">
        Our Services
      </h1>
      <p className="font-inter font-semibold text-[19px] text-center text-[#717171]">
        Empowering Sustainability Through Comprehensive Solutions
      </p>

      <div className="mt-[52px] flex flex-row sm:flex-col md:flex-col items-center gap-[150px] px-[100px] sm:px-[10px] md:px-[20px]">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="w-[500px] sm:w-[100%] h-[380px] py-[29px] px-[39px] shadow-[0px_2.39px_4.79px_0px_#ABBED166] rounded-[10px] bg-[#fff] flex flex-col items-center"
          >
            <img src={service.image} alt="" />
            <h1 className="font-inter text-[30px] leading-[43.1px] font-bold text-[#4D4D4D] text-center">
              {service.text}
            </h1>
            <p className="font-inter text-[15px] leading-[24px] font-normal text-[#717171] text-center">
              {service.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
