import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = (props) => {
  console.log(props)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React.Js
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/imageGallary">
                  Image Gallary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crud">
                  Crud
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Get Started
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://reactjs.org/docs/getting-started.html">
                      React.js
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
                      Bootstrap
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex"> 
              <button className="btn btn-outline-success" type="submit" onClick={()=>props.handleChange()}>
                Login/SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
