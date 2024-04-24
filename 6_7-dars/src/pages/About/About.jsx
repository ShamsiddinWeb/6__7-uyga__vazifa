import React from "react";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import AboutHero from "../../components/AboutHero/AboutHero";
import Experience from "../../components/Experience/Experience";
import Finsweet from "../../components/Finsweet/Finsweet";
import { Identification } from "../../components/Identification/Identification";
import Teamwork from "../../components/Teamwork/Teamwork";

function About() {
  return (
    <div>
      <AboutHero/>
      <Experience/>
      <Identification/>
      <Teamwork/>
      <Finsweet/>
      <News/>
      <Footer/>
    </div>
  );
}

export default About;
