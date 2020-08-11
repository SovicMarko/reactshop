import React from "react";
import styled from "@emotion/styled";

import Card from "../Components/ProductCard/component";
import PageTitle from "../Components/Shared/PageTitle";

const Home = (props) => {
  const items = [
    {
      id: 1,
      name: "Candy Mašina za sušenje veša CSO C8TE S",
      image: "https://static.tehnomanija.rs/UserFiles/products/143191.jpg",
      price: 39989,
      discount: 0.2,
    },
    {
      id: 2,
      name: "proizvod 2",
      price: 400,
      discount: 0.15,
    },
    {
      id: 3,
      name: "proizvod 2",
      price: 400
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div className="col-sm-4" key={item.id}>
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
