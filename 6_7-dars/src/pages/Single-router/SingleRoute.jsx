import React, { useEffect, useState } from "react";
import "./singleRoute.css";
import { useParams } from "react-router-dom";
import axios from "../../api";
import Loading from "./Loading";

const SingleRoute = () => {
  const { id } = useParams();
  const [data, setProduct] = useState(null);
  const [loading, setloading] = useState(false);
  console.log(id);
  useEffect(() => {
    setloading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, []);
  return (
    <div className="singleRoute "> 
      <div className="productsSingle">
        <div className="container">
        {loading ? (
              <Loading/>
            ) : (
              <></>
            )}
          <h2 className="data__title">{data?.title}</h2>
          <div className="products__single">
            <div className="products__singleImg-card">
              <img src={data?.images[0]} alt="" width={100} />
              <img src={data?.images[1]} alt="" width={100} />
              <img src={data?.images[2]} alt="" width={100} />
              <img src={data?.images[4]} alt="" width={100} />
            </div>
            <img src={data?.thumbnail} alt="" width={400} />
            <div className="card">
              <div className="products__singleImg-wrapper">
                <p>that's all: ({data?.stock})</p>
                <span>In Stock</span>
              </div>
              <p className="products__sena">$ {data?.price}.00</p>
              <p className="products__texts">{data?.description}</p>
              <div className="products__groupp">
                <p>Colours:</p>
                <span className="products__groupp-span1"></span>
                <span className="products__groupp-span2"></span>
              </div>
              <div className="products__size">
                <p>Size:</p>
                <span className="products__size-span">XS</span>
                <span className="products__size-span">S</span>
                <span className="products__size-span">M</span>
                <span className="products__size-span">L</span>
                <span className="products__size-span">XL</span>
              </div>
              <div className="products__cards">
                <div>
                  <p className="products__cards-text">
                    <span className="products__cards-span">-</span>2
                    <span className="products__cards-span">+</span>
                  </p>
                </div>
                <button className="products__cards-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
