import React from "react";
import Header from "./Components/Header/component";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Views/About";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Shop from "./Views/Shop";
import Cart from "./Views/Cart";
import Profile from "./Views/Profile";

import AddProduct from "./Views/Admin/AddProduct";
import Products from "./Views/Admin/Products";

import { useDispatch } from "react-redux";
import { change } from "./actions";

function App(props) {

  const dispatch = useDispatch();

  if (window.localStorage.cart === undefined) {
    window.localStorage.cart = "";
  } else {
    dispatch(change());
  }



  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop/:id" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        {/* -----------A D M I N-------------- */}
        <Route path="/add" component={AddProduct} />
        <Route path="/products" component={Products} />

      </Switch>
    </Router>
  );
}

export default App;
