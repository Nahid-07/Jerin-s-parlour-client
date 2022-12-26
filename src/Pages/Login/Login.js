import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

function Login() {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center form-height">
        <form className="form-style">
          <h1 className="mb-4 text-center">Login</h1>
          <input className="styleInp d-block mb-4" type="text" placeholder="Email" />
          <input className="styleInp mb-4" type="text" placeholder="Password" />
          <button className="form-button mb-4">Login</button>
          <div className="text-center mb-4 fs-4">
            <hr />
            or
            <hr/>
            </div>
          <button className="google-button">Continue with google</button>
        </form>

      </div>
    </Container>
  );
}

export default Login;
