import React from "react";

const Product_Similar = () => {
  return (
    <React.StrictMode>
      <div className="container">
        <header className="section-heading">
          <h3>Benzer Ürünler </h3>
        </header>

        <div className="row">
          <div className="col-md-3">
            <figure className="card card-product-grid">
              <div className="img-wrap">
                {" "}
                <img src="../images/items/5.jpg" alt="" />{" "}
              </div>
              <figcaption className="info-wrap border-top">
                <a href="#" className="title">
                  Bell & Ross Nightlum
                </a>
                <div className="price mt-2">$299.00</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="card card-product-grid">
              <div className="img-wrap">
                <img src="../images/items/6.jpg" alt="" />
                <span className="topbar">
                  <a href="#" className="float-right">
                    <i className="fa fa-heart"></i>
                  </a>
                </span>
                <a className="btn-overlay" href="#">
                  <i className="fa fa-search-plus"></i> Quick view
                </a>
              </div>
              <figcaption className="info-wrap border-top">
                <a href="#" className="title">
                  Leather Sleeve - Macbook 13’’
                </a>
                <div className="price mt-2">$3753.00</div>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="card card-product-grid">
              <div className="img-wrap">
                <span className="topbar">
                  <span className="badge badge-success"> NEW </span>
                </span>
                <img src="../images/items/7.jpg" alt="" />
              </div>
              <figcaption className="info-wrap border-top">
                <a href="#" className="title">
                  H&M Polo Shirt Slim Fit
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">$12.99</span>
                  <del className="price-old">$14.99</del>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="card card-product-grid">
              <div className="img-wrap">
                <img src="../images/items/1.jpg" alt="" />
              </div>
              <figcaption className="info-wrap border-top text-center">
                <small className="text-uppercase font-weight-bolder text-warning">
                  ELECTRONICS
                </small>
                <p>
                  <a href="#" className="title">
                    IKEA Poäng Swivel Chair
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Product_Similar;
