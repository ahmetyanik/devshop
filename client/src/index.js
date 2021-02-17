import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <HomePage />
    </Route>
  </Router>,
  document.getElementById("root")
);
