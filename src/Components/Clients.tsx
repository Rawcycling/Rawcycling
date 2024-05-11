import client1 from "/client1.png";
import client2 from "/client2.png";
import client3 from "/client3.png";
import client4 from "/client4.png";
import client5 from "/client5.png";
import client6 from "/client6.png";
import client7 from "/client7.png";

const Clients = () => {
  const clientData = [
    { image: client1 },
    { image: client2 },
    { image: client3 },
    { image: client4 },
    { image: client5 },
    { image: client6 },
    { image: client7 },
  ];
  return (
    <div className="mt-[90px]">
      <h1 className="font-inter font-semibold text-[40px] text-center text-[#4D4D4D]">
        Our Clients
      </h1>
      <p className="font-inter font-semibold text-[19px] text-center text-[#717171]">
        We have been working with some Fortune 10000+ clients
      </p>

      <div className="flex flex-row items-center sm:flex-col md:flex-col justify-center gap-[100px] sm:gap-[10px] w-[100%] mt-[50px] ">
        {clientData.map((client, index) => (
          <img src={client.image} alt="" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
