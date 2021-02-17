import React from "react";

const Header_Card = () => {
  return (
    <a href="#" className="widget-header pl-3 ml-3">
      <div className="icon icon-sm rounded-circle border">
        <i className="fa fa-shopping-cart"></i>
      </div>
      <span className="badge badge-pill badge-danger notify">0</span>
    </a>
  );
};

export default Header_Card;
