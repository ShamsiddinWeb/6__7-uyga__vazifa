import React from "react";
import "./Combined.css";
import alll from "../../assets/images/img7.png";

const Combined = () => {
  return (
    <section className="combined">
      <img className="combined__img" src={alll} alt="" />
      <div className="combined__card">
        <h3 className="combined__title">
          Energy of a start-up combined with 30 years of experience.
        </h3>
        <button className="combined__btn">See Job Vacancies</button>
      </div>
    </section>
  );
};

export default Combined;
