import React from "react";
import "./Experience.css";

const Experience = () => {
  let data = [
    {
      id: 1,
      span: "15+",
      title: "Awards received",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 2,
      span: "500+",
      title: "Clients served",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 3,
      span: "34",
      title: "Employees",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 4,
      span: "130+",
      title: "Custom solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
  ];
  let list = data?.map((el) => (
    <li key={el.id} className="experience__list-item">
      <p className="experience__list-span">{el.span}</p>
      <h4 className="experience__list-title">{el.title}</h4>
      <p className="experience__list-text">{el.text}</p>
    </li>
  ));
  return (
    <section className="experience">
      <div className="container">
        <div className="experience__start">
          <div className="experience__card">
            <h3 className="experience__title">
              The energy of a start-up combined with 30 years of experience
            </h3>
            <p className="experience__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>
          <ul className="experience__list">{list}</ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
