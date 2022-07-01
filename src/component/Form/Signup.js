import React from "react";
import "../Form/Signup.css";

const Signup = (props) => {
  return (
    <>
      <div className="container mt-4 signup">
        <div className="row  justify-content-center ">
          <div className="col-md-6 shadow-lg rounded-3 bg-light">
            <form>
              <div className="mb-4 text-center">
                <h4>SignUp</h4>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <label
                  for="exampleInputEmail1"
                  class="form-label"
                  style={{position:"absolute",right: "28%"}}
                >
                  Already have an account ?{" "}
                  <a className="navbar-brand" href="#">
                    Login
                  </a>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <span className="btn btn-success show">Show</span>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-success " type="button">
                  Signup for free
                </button>
              </div>

              <button onClick={()=>props.handleClose()}>close</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
