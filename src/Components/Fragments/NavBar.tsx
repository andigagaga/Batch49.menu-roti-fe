import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
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
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item mx-5">
                    <Link
                      className="nav-link active bg-danger rounded"
                      aria-current="page"
                      to={"/"}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-5">
                    <Link className="nav-link bg-warning rounded" to={"/FormRegister"}>
                      Register
                    </Link>
                  </li>
                  <li className="nav-item mx-5">
                    <Link className="nav-link bg-success rounded" to={"/FormLogin"}>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
