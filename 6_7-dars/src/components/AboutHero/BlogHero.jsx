import React from "react";
import "./main.css";
import wrapperImg from "../../assets/images/Images4.png";
import wrappericon from "../../assets/icons/Image.svg";
import { BsArrowRight } from "react-icons/bs";

const BlogHero = () => {
  return (
    <section className="wrappers">
      <div className="container">
        <div className="wrapper__start">
          <div className="wrapper__card">
            <div className="wrapper__group">
              <img src={wrappericon} alt="" />
              <p>Andrew Jonson</p>
              <p>Posted on 27th January 2021</p>
            </div>
            <h2 className="wrapper__title">
              Our internal process and longerm vision
            </h2>
            <p className="wrapper__text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the
            </p>
            <a className="wrapper__link" href="#">Read More <BsArrowRight /></a>
          </div>
          <img className="img" src={wrapperImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
