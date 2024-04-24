import React from "react";
import "./singleRoute.css";

const Loading = () => {
  return (
    <div className="products__laoding container">
      <div className="products__loadings-span"></div>
      <div className="products__loadings">
        <div className="products__loadings-one">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="products__loadings-firt"></div>
        <div className="products__loadings-end">
          <div className="products__loadings-end-bir"></div>
          <div className="products__loadings-end-ikki"></div>
          <div className="products__loadings-end-uch"></div>
          <div className="products__loadings-end-tort"></div>
          <div className="products__loadings-end-besh">
            <div className="products__loadings-end-besh-divs"></div>
            <div className="products__loadings-end-besh-div"></div>
            <div className="products__loadings-end-besh-div"></div>
          </div>
          <div className="products__loadings-end-olti">
            <div className="products__loadings-end-olti-span"></div>
            <div className="products__loadings-end-olti-span"></div>
            <div className="products__loadings-end-olti-span"></div>
            <div className="products__loadings-end-olti-span"></div>
            <div className="products__loadings-end-olti-span"></div>
            <div className="products__loadings-end-olti-span"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
