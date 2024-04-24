import React from "react";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import Sectors from "../../components/Sectors/Sectors";
import Software from "../../components/Software/Software";
import Energy from "../../components/Energy/Energy";
import Strategy from "../../components/Strategy/Strategy";
import Combined from "../../components/Combined/Combined";
import Finsweet from "../../components/Finsweet/Finsweet";

function Home() {
  return (
    <div className="Home">
      <Hero/>
      <Sectors/>
      <Software/>
      <Energy/>
      <Strategy/>
      <Combined/>
      <Finsweet/>
      <News/>
      <Footer/>
    </div>
  );
}

export default Home;
