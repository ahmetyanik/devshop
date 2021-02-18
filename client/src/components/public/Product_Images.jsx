import React from "react";

// Tek Satırda
/* 
    Yorum
    Satırı
*/

const Product_Images = () => {
  return (
    <article className="gallery-wrap">
      {/* Yorum*/}
      <div className="img-big-wrap">
        <a href="#">
          <img src="/images/items/12.jpg" alt="" />
        </a>
      </div>
      <div className="thumbs-wrap">
        <a href="#" className="item-thumb">
          <img src="/images/items/12-1.jpg" alt="" />
        </a>
        <a href="#" className="item-thumb">
          <img src="/images/items/12-2.jpg" alt="" />
        </a>
        <a href="#" className="item-thumb">
          <img src="/images/items/12.jpg" alt="" />
        </a>
        <a href="#" className="item-thumb">
          <img src="/images/items/4.jpg" alt="" />
        </a>
      </div>
    </article>
  );
};

export default Product_Images;
