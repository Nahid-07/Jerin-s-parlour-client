import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { authContext } from "../../ContextApi/AuthProvider";

const Signup = () => {
  const { singUp } = useContext(authContext);
  const [err, setErr] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const formData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    if (password === confirmPassword) {
      singUp(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((err) => setErr(err.message));
    } else {
      setErr("Your password did not match");
    }
    setErr("");
  };
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center form-height">
        <div className="form-style">
          <form onSubmit={handleSignUp}>
            <h1 className="mb-4 text-center">Signup</h1>
            <input
              className="styleInp d-block mb-4"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <input
              className="styleInp d-block mb-4"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="styleInp d-block mb-4"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="styleInp mb-4 d-block"
              name="password"
              type="password"
              placeholder="Password"
            />
            <input
              className="styleInp mb-4"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            <p className="text-danger">{err}</p>
            <button className="form-button mb-4">Login</button>
            <div className="text-center mb-4 fs-4">
              <hr />
              or
              <hr />
            </div>
          </form>
          <button className="google-button">Continue with google</button>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
