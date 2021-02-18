import React from "react";
import Product_Comment from "./Product_Comment";

const Product_Comments = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <header className="section-heading">
            <h3>Review components </h3>
            <div className="rating-wrap">
              <ul className="rating-stars stars-lg">
                <li style={{ width: "80%" }} className="stars-active">
                  <img src="../images/icons/stars-active.svg" alt="" />
                </li>
                <li>
                  <img src="../images/icons/starts-disable.svg" alt="" />
                </li>
              </ul>
              <strong className="label-rating text-lg">
                4.5 <span className="text-muted">| 112 reviews</span>
              </strong>
            </div>
          </header>

          <Product_Comment />
          <Product_Comment />
          <Product_Comment />
          <Product_Comment />
        </div>
      </div>
    </div>
  );
};

export default Product_Comments;
