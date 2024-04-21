import React from 'react'
import "./main.css";
import wrapperImg from "../../assets/images/images3.png";

const ServicesHero = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper__start">
          <div className="wrapper__card">
            <h2 className="wrapper__title">
              We hired people who are very passionate about what they do
            </h2>
            <p className="wrapper__text">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw.
            </p>
            <button className="wrapper__btn">View Positions</button>
          </div>
          <img className="img" src={wrapperImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ServicesHero