import React from "react";
import "./Identification.css"
import ig9 from "../../assets/images/ig9.png"

export const Identification = () => {
  return (
    <section className="Identification">
      <div className="container">
        <div className="Identification__start">
          <div className="Identification__card">
            <h3 className="Identification__title">
              We want to get local identification in every corner of the world
              in this era of global citizenship.
            </h3>
            <p className="Identification__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>
          <img className="Identification__img" src={ig9} alt="" />
        </div>
      </div>
    </section>
  );
};
