import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product_Comment from "./Product_Comment";
import axios from "axios";

const Product_Comments = () => {
  const [yorumlar, setYorumlar] = useState([]);
  const parametreler = useParams();

  function yorumlariAl() {
    var adres = "http://localhost:5000/api/yorumlar/" + parametreler.id;
    axios.get(adres).then(function (gelenVeri) {
      setYorumlar(gelenVeri.data);
    });
  }

  useEffect(yorumlariAl, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <header className="section-heading">
            <h3>Ürün Yorumları </h3>
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
                4.0
                <span className="text-muted">| {yorumlar.length} yorum</span>
              </strong>
            </div>
          </header>

          {yorumlar.map(function (yorum) {
            return (
              <Product_Comment
                key={yorum._id}
                id={yorum._id}
                isim={yorum.isim}
                icerik={yorum.icerik}
                kullanici_id={yorum.kullanici_id}
                yildiz={yorum.yildiz}
                like={yorum.like}
                dislike={yorum.dislike}
                tarih={yorum.tarih}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product_Comments;
