import React from "react";
// import styled from "@emotion/styled";
import Card from "../Components/ProductCard/component";
// import PageTitle from "../Components/Shared/PageTitle";
import data from "../TestData/data.json";

const Home = (props) => {
  let items = data;
  return (
    <>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div className="col-xs-12 col-sm-6 col-md-4" key={item.id}>
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
