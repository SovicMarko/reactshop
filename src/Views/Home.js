import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Home = (props) => {
  //   useEffect(() => {
  //     fetchItems();
  //   });

  //   const [items, setItems] = useState([]);

  //   const fetchItems = () => {
  const items = [
    {
      id: 1,
      name: "proizvod 1",
      price: 300,
      discount: 0.1,
    },
    {
      id: 2,
      name: "proizvod 2",
      price: 400,
      discount: 0.15,
    },
  ];

  const LinkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <>
      <h1 className="text-center">Home page</h1>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div className="col-sm-4" key={item.id}>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <Link to={`/shop/${item.id}`} style={LinkStyle}>
                    {item.name}
                  </Link>
                </div>
                <div className="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>
                <div className="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
