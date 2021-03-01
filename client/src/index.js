import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CartPage from "./components/pages/CartPage.jsx";
import CategoryPage from "./components/pages/CategoryPage.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
import { CookiesProvider } from "react-cookie";
import PaymentPage from "./components/pages/PaymentPage.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51INGWaEKIejjwtwZG64KMynkwBQHXzXXuBvTugXlCaLAYMz54K17DfnT0jpAcxbQ5KJonZua4ryZn88QKozYhUV100zYmIoFNH"
);

ReactDOM.render(
  <CookiesProvider>
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/urun/:id">
        <ProductPage />
      </Route>
      <Route path="/kategori/:kategori_url">
        <CategoryPage />
      </Route>
      <Route path="/sepetim">
        <CartPage />
      </Route>
      <Route path="/kayit">
        <RegisterPage />
      </Route>
      <Route path="/giris">
        <LoginPage />
      </Route>
      <Route path="/odeme">
        <Elements stripe={promise}>
          <PaymentPage />
        </Elements>
      </Route>
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);
