// import React from "react";
// import styled from "@emotion/styled";
import React, { useState, useEffect } from 'react';
import Card from "../Components/ProductCard/component";
// import PageTitle from "../Components/Shared/PageTitle";
// import data from "../TestData/data.json";
import firebase from 'firebase';

const Home = (props) => {
  const [state, setState] = useState({ items: [] })
  const db = firebase.firestore();

  let itemsList = [];


  useEffect(() => {
    db.collection("items").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        itemsList.push({
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          price: doc.data().price,
          discount: doc.data().discount
        });
        setState({
          items: itemsList
        })
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {state.items.map((item) => (
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
