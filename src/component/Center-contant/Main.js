import React from "react";
import Hakuna from "../../../src/assets/Images/images.png";
import logo from "../../../src/assets/Images/logo193.png";
import logo2 from "../../../src/assets/Images/bootstrap.png";
import logo3 from "../../../src/assets/Images/javascript.png";
import "../Center-contant/Main.css";

const Main = () => {
  return (
    <div className="container mt-4 main">
      <div className="row ">
        <div className="col-md-6">
          <img src={Hakuna} alt="Hakuna"></img>
        </div>
        <div className="col-md-6">
          <h4>React for Beginners</h4>
          <p>
            If you feel that the React documentation goes at a faster pace than
            you’re comfortable with, check out this overview of React by Tania
            Rascia. It introduces the most important React concepts in a
            detailed, beginner-friendly way. Once you’re done, give the
            documentation another try!
          </p>
        </div>
        <div className="col-sm-12">
          <button type="button" className="btn btn-outline-warning mainButton mt-4">
            Get Started
          </button>
        </div>
      </div>
      <div className="row mt-4 " style={{ marginLeft: "95px" }}>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">
                In this guide, we will examine the building blocks of React
                apps: elements and components. Once you master them, you can
                create complex apps from small reusable pieces.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={logo2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text">
                Powerful, extensible, and feature-packed frontend toolkit. Build
                and customize with Sass, utilize prebuilt grid system and
                components, and bring projects to life with powerful JavaScript
                plugins.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={logo3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
              <p className="card-text">
                JavaScript is a dynamic programming language that's used for web
                development, in web applications, for game development, and lots
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
