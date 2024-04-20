import Clients from "../../Components/Clients";
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

      <div className="pt-[100px] sm:pt-[60px]">
        <Hero />
        <Clients />
        <Services />
        <WhoAreWe />

        <TrackRecord />

        <JoinUsToday />
      </div>
    </div>
  );
};

export default Home;
