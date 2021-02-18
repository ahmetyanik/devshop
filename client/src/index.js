import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/urun/:id">
      <ProductPage />
    </Route>
  </Router>,
  document.getElementById("root")
);
