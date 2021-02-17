import React from "react";

const Header_Menu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link pl-0" href="#">
          {" "}
          <strong>All category</strong>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Fashion
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Supermarket
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Electronics
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Baby &amp Toys
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Fitness sport
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="http://example.com"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          More
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Foods and Drink
          </a>
          <a className="dropdown-item" href="#">
            Home interior
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Category 1
          </a>
          <a className="dropdown-item" href="#">
            Category 2
          </a>
          <a className="dropdown-item" href="#">
            Category 3
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Header_Menu;
