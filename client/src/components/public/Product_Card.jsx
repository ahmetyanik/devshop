import React from "react";

const Product_Card = () => {
  return (
    <div className="col-md-3">
      <a href="#" className="card card-product-grid">
        <div className="img-wrap">
          <img src="/images/items/2.jpg" />
        </div>
        <div className="info-wrap text-center ">
          <p className="title text-truncate">
            Bose Headphones 700 best for Gaming
          </p>
          <ul className="rating-stars">
            <li style={{ width: "80%" }} className="stars-active">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <small className="text-muted">34</small>
          <div className="price-wrap mt-2 text-center">
            <span className="price">$399.95</span>
            <del className="price-old">$449.99</del>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product_Card;
