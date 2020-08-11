import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header = (props) => {
  const Nav = styled.nav`
    border-radius: 0px;
  `;

  return (
    <>
      <Nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              Logo
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-user"></span> Your
                  Account
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Header;
