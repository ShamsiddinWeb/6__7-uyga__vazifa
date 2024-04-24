import React from "react";
import bb from "../../assets/icons/bb.svg";
import img8 from "../../assets/images/img8.png";
import "./Finsweet.css";

const Finsweet = () => {
  return (
    <section className="finsweet">
      <div className="container">
        <div className="finsweet__start">
          <div className="finsweet__card">
            <h2 className="finsweet__title">
              Finsweet was a dream to work with
            </h2>
            <p className="finsweet__text">
              Maecenas efficitur scelerisque lorem, et varius lacus tincidunt
              vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci.
              Vivamus eleifend nec felis vel auctor.
            </p>
            <div className="finsweet__group">
              <img  src={bb} alt="" />
              <div>
                <p className="finsweet__span">Chikelu Neo</p>
                <p className="finsweet__bb">CEO at MazeAI</p>
              </div>
            </div>
          </div>
          <img  className="finsweet__img" src={img8} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Finsweet;
