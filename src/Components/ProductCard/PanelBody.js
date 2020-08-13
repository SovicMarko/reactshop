import React from "react";
// import { Link } from "react-router-dom";
// import styled from "@emotion/styled";

const PanelBody = ({ image }) => {
  const styles = {
    body: {
      height: "250px",
      textAlign: "center"
    },
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
      display: "block",
      margin: "auto"
    }
  }
  return (
    <>
      <div className="panel-body" style={styles.body}>
        <img src={image} className="img-responsive" alt="" style={styles.img} />
      </div>
    </>
  );
};

export default PanelBody;
