import React from "react";
import { Link } from "react-router-dom";
// import styled from "@emotion/styled";

const About = ({ name, id }) => {
  const LinkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const NameStyle = {
    width: '75%'
  }
  return (
    <>
      <div className="panel-heading">
        <Link to={`/shop/${id}`} style={LinkStyle}>
          <h4 style={NameStyle}>{name}</h4>
        </Link>
      </div>
    </>
  );
};

export default About;
