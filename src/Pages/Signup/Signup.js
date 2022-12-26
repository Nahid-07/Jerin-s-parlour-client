import React from 'react';
import { Container } from 'react-bootstrap';

const Signup = () => {
    return (
        <Container>
      <div className="d-flex justify-content-center align-items-center form-height">
        <div className="form-style">
        <form>
          <h1 className="mb-4 text-center">Signup</h1>
          <input className="styleInp d-block mb-4" type="text" placeholder="First Name" />
          <input className="styleInp d-block mb-4" type="text" placeholder="Last Name" />
          <input className="styleInp d-block mb-4" type="email" placeholder="Email" />
          <input className="styleInp mb-4 d-block" type="password" placeholder="Password" />
          <input className="styleInp mb-4" type="password" placeholder="Confirm Password" />
          <button className="form-button mb-4">Login</button>
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
};

export default Signup;