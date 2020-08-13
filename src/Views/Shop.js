import React from "react";
// import styled from "@emotion/styled";
import data from "../TestData/data.json";

const Shop = ({ match }) => {
  const id = Number(match.params.id);
  let product = {};
  data.forEach(el => {
    if (el.id === id) {
      product = el;
    }
  });

  return (
    <div className="container">
      <h1>{product.name}</h1>
    </div>
  );
};

export default Shop;
