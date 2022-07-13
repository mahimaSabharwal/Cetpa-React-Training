import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../redux/actions/productActions";

const ReduxApp = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  console.log(products);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(storeProducts(response.data));
    });
  }, []);
  return (
    <div>
      {products &&
        products.map((item) => {
          <p>{item.title}</p>;
        })}
    </div>
  );
};

export default ReduxApp;
