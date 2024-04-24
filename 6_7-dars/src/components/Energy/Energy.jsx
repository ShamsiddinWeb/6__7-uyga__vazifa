import React from 'react'
import "./Energy.css"
import img from "../../assets/images/About-Image.png"

const Energy = () => {
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
  ];
  let list = data?.map((el) => (
    <li key={el.id} className="energy__list-item">
      <p className="experience__list-span">{el.span}</p>
      <h4 className="energy__list-title">{el.title}</h4>
      <p className="experience__list-text">{el.text}</p>
    </li>
  ));
  return (
    <section className="energy max__container ">
      <div className="container">
        <div className="energye__start">
          <div className="energy__card">
            <h3 className="energy__title">
              The energy of a start-up combined with 30 years of experience
            </h3>
            <p className="energy__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
            <ul className="energy__list">{list}</ul>
          </div> 
          <img className='energy__img' src={img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Energy