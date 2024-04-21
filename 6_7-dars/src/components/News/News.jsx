import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

const News = () => {
  let data = [
    {
      id: 1,
      img: img1,
      title: "Why you have to digitalize in 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      link: "Learn More",
    },
    {
      id: 2,
      img: img2,
      title: "Our internal process and longerm vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      link: "Learn More",
    },
    {
      id: 3,
      img: img3,
      title: "Helping the next generation of leaders",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      link: "Learn More",
    },
  ];
  let newsData = data?.map((e) => (
    <li key={e.id} className="news__list-item">
      <img src={e.img} alt="" />
      <h3 className="news__list-title">{e.title}</h3>
      <p className="news__list-text">{e.text}</p>
      <Link className="news__list-link" to={"/blog"}>
        {e.link} <HiOutlineArrowLongRight />
      </Link>
    </li>
  ));
  return (
    <section className="news">
      <div className="container">
        <div className="news__start">
          <h2 className="news__title">Latest Blog & News</h2>
          <ul className="news__list">{newsData}</ul>
        </div>
      </div>
    </section>
  );
};

export default News;
