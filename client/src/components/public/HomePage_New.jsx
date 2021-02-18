import React from "react";
import Product_Card from "./Product_Card.jsx";

const HomePage_New = () => {
  return (
    <section className="section-content">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">Yeni Ürünler</h3>
        </header>

        <div className="row">
          <Product_Card />
          <Product_Card />
          <Product_Card />
          <Product_Card />
        </div>
      </div>
    </section>
  );
};

export default HomePage_New;
