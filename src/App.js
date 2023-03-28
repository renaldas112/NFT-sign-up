import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/DALL·E 2023-03-27 18.06.31 - logo about futuristic city and lights.png";

function SignUpForm() {
  return (
    <main className="d-flex align-items-center background-colored ">
      <section className="form-section d-flex align-items-center flex-column justify-content-center mt-5 mx-auto rounded w-40 col-l-3">
        <img src={logo} className="logo my-4" alt="logo" />
        <h1 className="text-center">
          City Lights
          <br />
        </h1>
        <h4 className="my-4 mx-2 text-center">
          Experience the captivating beauty of urban landscapes through "City
          Lights" NFT
        </h4>
        <form
          autoComplete="off"
          className="d-flex flex-column flex-wrap justify-content-center text-center w-75"
        >
          <h4 className="my-3">Sign up and get ready!</h4>
          <div className="d-flex gap-5 justify-content-between form-container-small">
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email <br />
                with anyone else.
              </div>
            </div>
          </div>
          <div className="d-flex gap-5 justify-content-between form-container-small">
            <div className="mb-3 passwords-container">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword1"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                required
              />
            </div>
          </div>
          <button
            id="submitButton"
            type="submit"
            className="btn btn-customised my-5 p-2 w-40 mx-auto"
          >
            Create Account
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignUpForm;
