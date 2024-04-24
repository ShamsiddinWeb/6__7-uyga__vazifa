import React, { useEffect, useState } from "react";
import "./singleRoute.css";
import { useParams } from "react-router-dom";
import axios from "../../api";
import Footer from "../../components/Footer/Footer";
import SingleRoute from "./SingleRoute";

const Single = () => {
  const { id } = useParams();
  const [data, setProduct] = useState(null);
  console.log(id);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <SingleRoute/>
      <Footer />
    </div>
  );
};

export default Single;
