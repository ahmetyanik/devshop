import React from "react";
import Product_Card from "./Product_Card";

const HomePage_Popular = () => {
  return (
    <section className="section-content">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">Populer Ürünler</h3>
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

export default HomePage_Popular;
