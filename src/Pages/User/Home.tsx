import { useState } from "react";
import Clients from "../../Components/Clients";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import JoinUsToday from "../../Components/JoinUsToday";
import Navbar from "../../Components/Navbar";
import Services from "../../Components/Services";
import TrackRecord from "../../Components/TrackRecord";
import WhoAreWe from "../../Components/WhoAreWe";
import { SelectedPage } from "../../utils/types";
import Hero from "./Hero";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <div className="pt-[100px] sm:pt-[60px] md:pt-[40px]">
        <Hero setSelectedPage={setSelectedPage} />
        <Clients />
        <Services setSelectedPage={setSelectedPage} />
        <WhoAreWe setSelectedPage={setSelectedPage} />
        <TrackRecord setSelectedPage={setSelectedPage} />
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
