import React from "react";
import { Link } from "react-router-dom";

import '../index.css'
import logo from "../assets/logo_salary.png";

function Navbar() {
  return (
    <header className="header">
      <nav
        id="header"
        className="navbar navbar-expand-lg navbar-dark bg-transparent"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="torre logo" style={{ height: "70px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="https://torre.co" className="nav-link " style={{ color: "#D9D9D9" }}>
                  Know Torre
                </a>
              </li>
              <li className="nav-item">
                <a href="https://bio.torre.co/_a/your-bio" style={{ textDecoration: "none" }}>
                  <button
                    className="d-none d-lg-block btn btn btn-torre ml-3 rounded-torre"
                    type="button"
                  >
                  BUILD YOUR GENOME
                  </button>
                  <button
                      className="d-block d-lg-none btn btn-torre rounded-torre mt-2"
                      type="button"
                    >
                      BUILD YOUR GENOME
                    </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
