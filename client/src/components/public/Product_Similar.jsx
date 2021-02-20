import React, { useEffect } from "react";
import Product_Card from "./Product_Card.jsx";

const Product_Similar = (props) => {
  return (
    <React.StrictMode>
      <div className="container">
        <header className="section-heading">
          <h3>Benzer Ürünler </h3>
        </header>

        <div className="row">
          <Product_Card />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Product_Similar;
