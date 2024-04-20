import icon from "/JoinUsIcon.png";

const JoinUsToday = () => {
  return (
    <div className="mt-[100px] flex flex-row sm:flex-col items-center px-[100px] sm:px-[10px] gap-[100px]">
      <img src={icon} alt="" />

      <div>
        <h1 className="font-inter font-semibold text-[40px] text-[#164C28] sm:text-center">
          Join Us Today
        </h1>
        <p className="font-inter font-normal text-[17px] text-[#717171]">
          Ready to make a difference? Join Rawcycling today and become a part of
          the recycling revolution! Whether you're passionate about protecting
          the environment, earning rewards for your efforts, or simply want to
          contribute to a cleaner, greener future, Rawcycling welcomes you with
          open arms.
        </p>
        <p className="font-inter font-bold text-[17px] text-[#717171] mt-[20px]">
          How to Join:
        </p>

        <ol type="1" className="list-decimal sm:list-decimal">
          <li className="font-inter font-normal text-[17px] text-[#717171]">
            <span className="font-inter font-bold text-[17px] text-[#717171]">
              Download the App:{" "}
            </span>
            Get started by downloading the Rawcycling app from the App Store or
            Google Play Store. With just a few taps, you'll gain access to a
            world of recycling rewards and sustainable solutions
          </li>

          <li className="font-inter font-normal text-[17px] text-[#717171]">
            <span className="font-inter font-bold text-[17px] text-[#717171]">
              Start Recycling:{" "}
            </span>
            Once you've downloaded the app, start recycling today! Simply
            collect your recyclables, drop them off at one of our convenient
            locations, and earn RawCoins for every item you contribute.
          </li>
          <li className="font-inter font-normal text-[17px] text-[#717171]">
            <span className="font-inter font-bold text-[17px] text-[#717171]">
              USSD Activation:{" "}
            </span>
            {""}Can't access the app? No problem! Rawcycling is also available
            for USSD activation. Simply dial *989# to begin your recycling
            journey right from your mobile phone.
          </li>
        </ol>

        <p className="font-inter font-normal text-[17px] text-[#717171]">
          Join us in our mission to transform waste into wealth, one recyclable
          at a time. Together, we can create a cleaner, greener future for
          generations to come. Join Rawcycling today and start making a
          difference!
        </p>

        <button className="bg-[#164C28] py-[16px] px-[38px] text-white mt-[38px] sm:mt-[10px] font-inter font-medium text-[15px] rounded-[5px] hover:shadow-2xl">
          Register
        </button>
      </div>
    </div>
  );
};

export default JoinUsToday;
