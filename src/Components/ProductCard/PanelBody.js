import React from "react";
// import { Link } from "react-router-dom";
// import styled from "@emotion/styled";

const PanelBody = ({ image }) => {
  return (
    <>
      <div className="panel-body">
        <img src={image} className="img-responsive" alt="Image" />
      </div>
    </>
  );
};

export default PanelBody;
