import React from "react";
import "./main.css";
import wrapperImg from "../../assets/images/images.png";

const AboutHero = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper__start">
          <div className="wrapper__card">
            <h2 className="wrapper__title">
              We value human, organizational, and operational intelligence, not
              just artificial
            </h2>
            <p className="wrapper__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio, sagittis quis ornare quis.
            </p>
            <button className="wrapper__btn">Work With Us</button>
          </div>
          <img className="img" src={wrapperImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
