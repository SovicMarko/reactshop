import React from "react";
import styled from "@emotion/styled";

const Shop = ({ match }) => {
  const id = match.params.id;

  return (
    <>
      <h1>Shop page</h1>
      <h1>{id}</h1>
    </>
  );
};

export default Shop;
