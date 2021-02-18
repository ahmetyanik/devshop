import React from "react";

const Product_Info = () => {
  return (
    <section className="section-pagetop bg">
      <div className="container">
        <nav>
          <ol className="breadcrumb text-white">
            <li className="breadcrumb-item">
              <a href="/">Anasayfa</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Kategori</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ürün ismi
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Product_Info;
