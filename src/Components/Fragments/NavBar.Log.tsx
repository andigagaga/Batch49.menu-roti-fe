import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <i className="fa-solid fa-2x fa-burger"></i>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link
                      className="nav-link active bg-danger rounded mx-5"
                      aria-current="page"
                      to={"/"}
                    >
                      Home
                    </Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                <Link className="nav-link bg-warning rounded  mx-2 p-1" to={"/FormRegister"}>
                      Register
                    </Link>
                <Link className="nav-link bg-success text-white fw-bolder mx-5 rounded p-1" to={"/FormLogin"}>
                      Login
                </Link>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
