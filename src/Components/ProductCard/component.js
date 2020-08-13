import React from "react";
import styled from "@emotion/styled";
import PanelHeading from "./PanelHeading";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import Discount from "./Discount";
import { useDispatch } from "react-redux";
import { change } from "../../actions";


const Card = ({ data, disabled }) => {

  const dispatch = useDispatch();


  const CardPanel = styled.div`
    position: relative;
  `;

  const addToCart = (a) => {
    let cart = [];
    if (window.localStorage.cart === "") {
      cart = [];
    } else {
      cart = JSON.parse(window.localStorage.cart);
    }
    cart.push(data);
    window.localStorage.cart = JSON.stringify(cart);
    dispatch(change())
  }


  // let discount = "";
  // if (data.discount) {
  //   discount = <Discount discount={data.discount} />;
  // }

  return (
    <CardPanel className="panel panel-primary">
      {data.discount ? <Discount discount={data.discount} /> : ''}
      <PanelHeading name={data.name} id={data.id} />
      <PanelBody image={data.image} />
      <PanelFooter
        price={data.price}
        discount={data.discount}
        disabled={disabled}
        addToCart={addToCart} />
    </CardPanel>
  );
};

export default Card;
