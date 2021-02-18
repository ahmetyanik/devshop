import React from "react";
import Footer from "../public/Footer.jsx";
import Header from "../public/Header.jsx";
import Product_Comments from "../public/Product_Comments.jsx";
import Product_Detail from "../public/Product_Detail.jsx";
import Product_Info from "../public/Product_Info.jsx";
import Product_Similar from "../public/Product_Similar.jsx";

const ProductPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <Product_Info />
      <Product_Detail />
      <Product_Similar />
      <Product_Comments />
      <Footer />
    </React.StrictMode>
  );
};

export default ProductPage;
