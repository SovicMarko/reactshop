import React from "react";
import styled from "@emotion/styled";
import PanelHeading from "./PanelHeading";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import Discount from "./Discount";

const component = ({ data }) => {
  const Card = styled.div`
    position: relative;
  `;

  let discount = "";
  if (data.discount) {
    discount = <Discount discount={data.discount} />;
  }

  return (
    <Card className="panel panel-primary">
      {discount}
      <PanelHeading name={data.name} id={data.id} />
      <PanelBody image={data.image} />
      <PanelFooter price={data.price} discount={data.discount} />
    </Card>
  );
};

export default component;
