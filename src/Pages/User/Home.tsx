import Clients from "../../Components/Clients";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import JoinUsToday from "../../Components/JoinUsToday";
import Navbar from "../../Components/Navbar";
import Services from "../../Components/Services";
import TrackRecord from "../../Components/TrackRecord";
import WhoAreWe from "../../Components/WhoAreWe";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="pt-[100px] sm:pt-[60px] md:pt-[40px]">
        <Hero />
        <Clients />
        <Services />
        <WhoAreWe />
        <TrackRecord />
        <JoinUsToday />
        <GetInTouch />

        <h3 className="font-inter font-semibold text-[70px] text-[#1A6334] text-center my-[38px]">
          Waste to Wealth
        </h3>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
