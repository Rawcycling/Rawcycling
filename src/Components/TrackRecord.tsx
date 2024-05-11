import tr1 from "/tr1.png";
import tr2 from "/tr2.png";
import tr3 from "/tr3.png";
import tr4 from "/tr4.png";
const TrackRecord = () => {
  const trackRecordData = [
    {
      image: tr1,
      numbers: "10000+",
      text: "Happy Clients",
    },
    {
      image: tr2,
      numbers: "466,328+",
      text: "Successful Transactions",
    },
    {
      image: tr3,
      numbers: "828,867+",
      text: "Pick-Up Locations",
    },
    {
      image: tr4,
      numbers: "1,926,436 RC",
      text: "RawCoins Earned",
    },
  ];
  return (
    <div className="mt-[100px] w-[100%] bg-[#F5F7FA] flex flex-row sm:flex-col md:flex-col items-center px-[100px] sm:px-[10px] md:px-[20px] py-[75px]">
      <div className="w-[50%] sm:w-[100%] md:w-[100%]">
        <h1 className="font-inter font-semibold text-[43px] md:text-center sm:text-[40px] sm:text-center leading-[50px] sm:leading-10 text-[#4D4D4D]">
          Empowering Connections: Clients, Locations, Transactions.
        </h1>
        <p className="font-inter font-normal text-[19px] md:text-center leading-[29px] text-[#18191F] mt-[10px] sm:text-center">
          Experience seamless connections: from clients to locations to
          transactions, Rawcycling ensures convenience at every step.
        </p>
      </div>

      <div className="w-[50%] sm:w-[100%] md:w-[100%] grid grid-cols-2 sm:grid-cols-1 gap-[20px] sm:items-center sm: justify-items-center sm:mt-[20px] md:mt-[50px]">
        {trackRecordData.map((tr, index) => (
          <div key={index} className="flex flex-row items-start gap-[20px]">
            <img src={tr.image} alt="" />

            <div>
              <h1 className="font-inter font-bold text-[30px] leading-[29px] text-[#4D4D4D]">
                {tr.numbers}
              </h1>
              <p className="font-inter font-normal text-[15px] leading-[24px] text-[#717171]">
                {tr.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackRecord;
