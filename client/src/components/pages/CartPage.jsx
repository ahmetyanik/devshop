import React from "react";
import { useCookies } from "react-cookie";
import CartPage_Product from "../public/CartPage_Product";
import Footer from "../public/Footer";
import Header from "../public/Header";

const CartPage = () => {
  const [cookies, setCookie] = useCookies(["sepet"]);

  return (
    <React.StrictMode>
      <Header />

      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row">
            <aside className="col-lg-9">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120"></th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" className="text-right" width="200">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookies.sepet !== undefined && cookies.sepet.length > 0
                      ? cookies.sepet.map(function (urun) {
                          return (
                            <CartPage_Product
                              key={urun.id}
                              id={urun.id}
                              isim={urun.isim}
                              resim={urun.resim}
                              size={urun.size}
                              miktar={urun.miktar}
                              fiyat={urun.fiyat}
                            />
                          );
                        })
                      : ""}
                  </tbody>
                </table>

                <div className="card-body border-top">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                </div>
              </div>
            </aside>
            <aside className="col-lg-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">$69.97</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right text-danger">- $10.00</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right text-dark b">
                      <strong>$59.97</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img src="/images/misc/payments.png" height="26" alt="" />
                  </p>
                  <a href="#" className="btn btn-primary btn-block">
                    {" "}
                    Make Purchase{" "}
                  </a>
                  <a href="#" className="btn btn-light btn-block">
                    Continue Shopping
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </React.StrictMode>
  );
};

export default CartPage;
