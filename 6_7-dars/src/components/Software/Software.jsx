import React from "react";
import "./Software.css";
import img1 from "../../assets/icons/Icon.svg";
import img2 from "../../assets/icons/Icon2.svg";
import img3 from "../../assets/icons/Icon3.svg";

const Software = () => {
  let data = [
    {
      id: 1,
      img: img1,
      title: "Invoicing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",

    },
    {
      id: 2,
      img: img2,
      title: "Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
    },
    {
      id: 3,
      img: img3,
      title: "Surveying",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
    },
  ];
  let software = data?.map((e) => (
    <li key={e.id} className="software__list-item">
      <img className="software__list-img" src={e.img} alt="" />
      <h4 className="software__list__title">{e.title}</h4>
      <p className="software__list-text">{e.text}</p>
    </li>
  ));
  return (
    <section className="software">
      <div className="container">
        <div className="software__start">
          <div className="software__group">
            <h3 className="software__title">
              We are building software solution that solves your business
              challenges
            </h3>
            <p className="software__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>
          <ul className="software__list">{software}</ul>
        </div>
      </div>
    </section>
  );
};

export default Software;
