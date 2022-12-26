import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Login() {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center form-height">
        <div className="form-style">
        <form>
          <h1 className="mb-4 text-center">Login</h1>
          <input className="styleInp d-block mb-4" type="email" placeholder="Email" />
          <input className="styleInp mb-4" type="text" placeholder="Password" />
          <button className="form-button mb-4">Login</button>
          <p>Didn't have any account? <Link to='/signup'>Signup</Link></p>
          <div className="text-center mb-4 fs-4">
            <hr />
            or
            <hr/>
            </div>
        </form>
          <button className="google-button">Continue with google</button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
