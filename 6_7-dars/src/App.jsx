import React, { useState } from "react";
import "./App.css";
import "./components/Header/Header.css";
import logo from "./assets/icons/Logo.svg";
import { Router, Route, NavLink, Link, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Product from "./pages/Product/Product";
import Single from "./pages/Single-router/Single";
import Careers from "./pages/Careers/Careers";

function App() {
  const [toogle, setToggle] = useState(false);
  let data = [
    {
      id: 1,
      link: "/abaut",
      title: "About Us",
    },
    {
      id: 2,
      link: "/careers",
      title: "Careers",
    },
    {
      id: 3,
      link: "/services",
      title: "Services",
    },
    {
      id: 4,
      link: "/blog",
      title: "Blog",
    },
    {
      id: 5,
      link: "/product",
      title: "Product",
    },
  ];
  let navList = data?.map((el) => (
    <li key={el.id} className="header__list-item">
      <NavLink className="header__list-link" to={el.link}>
        {el.title}
      </NavLink>
    </li>
  ));
  // dark made qismi
  const [checked, setChecked] = useState(false);
  return (
    <div className={`projct  ${checked ? "active" : ""}`}>
      <header className={`header ${toogle ? "open" : ""}`}>
        <div className="container">
          <div className="header__start">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <div className="dark-mode">
              <nav className="header__nav">
                <ul className="header__list">{navList}</ul>
                <p
                  className="dark"
                  id="dark-change"
                  onClick={() => setChecked(!checked)}
                >
                  dark
                </p>
                <button className="header__btn">Clone project</button>
              </nav>
            </div>
            <div className="nimadir">
              <p
                className="darks"
                id="dark-change"
                onClick={() => setChecked(!checked)}
              >
                dark
              </p>
              <div className="header__menu-burgers">
                <button
                  className="header__menu"
                  id="menu-burger"
                  onClick={() => setToggle(!toogle)}
                >
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abaut" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path='/product/:id' element={<Single/>}/>
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
