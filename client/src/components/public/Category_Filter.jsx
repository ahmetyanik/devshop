import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Category_Filter = () => {
  const query = new URLSearchParams(useLocation().search);

  const bulunduguSayfa =
    query.get("sayfa") === null ? 1 : parseInt(query.get("sayfa"));

  const secim = query.get("secim") === null ? "1" : query.get("secim");
  const marka = query.get("marka") === null ? [] : query.get("marka");
  var defaultMarka = [];
  console.log("marka", marka);
  if (marka !== [] && marka.length > 0) {
    defaultMarka = marka.split(",");
  }
  const [seciliMarkalar, setSeciliMarkalar] = useState(defaultMarka);
  function markaDegisiklik(e) {
    // current array of options
    const options = seciliMarkalar;
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(e.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    console.log(options);

    // update the state with the new array of options
    setSeciliMarkalar(options);
  }

  function gonder(e) {
    window.location.href =
      "http://localhost:3000/kategori/gomlek?sayfa=" +
      bulunduguSayfa +
      "&secim=" +
      secim +
      "&marka=" +
      seciliMarkalar;

    e.preventDefault();
  }
  return (
    <aside className="col-md-3">
      <form onSubmit={gonder}>
        <div className="card">
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_2"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Marka </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body">
                <label className="custom-control custom-checkbox">
                  <input
                    value="Polo"
                    onChange={markaDegisiklik}
                    type="checkbox"
                    defaultChecked={
                      seciliMarkalar.includes("Polo") ? true : false
                    }
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Polo</div>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    value="Altınyıldız"
                    onChange={markaDegisiklik}
                    type="checkbox"
                    defaultChecked={
                      seciliMarkalar.includes("Altınyıldız") ? true : false
                    }
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Altınyıldız</div>
                </label>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_3"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Price range </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_3">
              <div className="card-body">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                      className="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                      className="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Apply
                </button>
              </div>
            </div>
          </article>
        </div>
      </form>
    </aside>
  );
};

export default Category_Filter;
