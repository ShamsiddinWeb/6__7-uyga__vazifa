import React from "react";
import "./Strategy.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import serviceImg from "../../assets/images/Service image.png";
import ribbon from "../../assets/icons/Ribbon.svg";

const Strategy = () => {
  return (
    <section className="strategy">
      <div className="container">
        <div className="strategy__start">
          <img className="strategy__ribbon" src={ribbon} alt="" />
          <div className="strategy__card">
            <button className="strategy__btn">Business strategy</button>
            <button className="strategy__btn">Digitalization</button>
            <button className="strategy__btn">Risk assessment</button>
          </div>
          <div className="strategy__group">
            <div className="strategy__wrapper">
              <h2 className="strategy__title">
                Helping clients with research and strategy for their business
              </h2>
              <p className="strategy__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et, mattis
                purus. Vivamus commodo suscipit tellus et pellentesque. <br />
                <br />
                Mattis purus. Vivamus commodo suscipit tellus et pellent.
                Curabitur sit amet eros blan esque.
              </p>
              <Link className="news__list-link" to={"/services"}>
                See all services <HiOutlineArrowLongRight />
              </Link>
            </div>
            <img className="strategy__img" src={serviceImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
