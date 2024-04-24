import React from "react";
import "./Teamwork.css";
import about1 from "../../assets/images/about1.png"
import about2 from "../../assets/images/about2.png"
import about3 from "../../assets/images/about3.png"
import about4 from "../../assets/images/about5.png"

const Teamwork = () => {
  return (
    <section className="Teamwork">
      <div className="container">
        <div className="Teamwork__start">
          <h3 className="Teamwork__title">Teamwork is the only way we work</h3>
          <p className="Teamwork__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
          <div className="Teamwork__card">
           <img src={about1} alt="" />
           <img src={about2} alt="" />
           <img src={about3} alt="" />
           <img src={about4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teamwork;
