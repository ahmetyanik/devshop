import React from "react";

const Product_Comment = () => {
  return (
    <article className="box mb-3">
      <div className="icontext w-100">
        <img
          src="../images/avatars/avatar1.jpg"
          className="img-xs icon rounded-circle"
          alt=""
        />
        <div className="text">
          <span className="date text-muted float-md-right">24.04.2020 </span>
          <h6 className="mb-1">Mike John </h6>
          <ul className="rating-stars">
            <li style={{ width: "80%" }} className="stars-active">
              <img src="../images/icons/stars-active.svg" alt="" />
            </li>
            <li>
              <img src="../images/icons/starts-disable.svg" alt="" />
            </li>
          </ul>
          <span className="label-rating text-warning">Good</span>
        </div>
      </div>
      <div className="mt-3">
        <p>
          Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip
        </p>
      </div>
    </article>
  );
};

export default Product_Comment;
