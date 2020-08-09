import React from "react";
import Header from "./Components/Header/component";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Shop from "./Views/Shop";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop/:id" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
