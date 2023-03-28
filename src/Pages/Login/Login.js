import React, { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../ContextApi/AuthProvider";
import "./style.css";

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  const [err,setErr] = useState('');
  let from = location.state?.from?.pathname || "/"
  const {login,googleLogin} = useContext(authContext);
  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email,password)
    .then(result => {
      const user = result.user;
      toast.success('Successfully logged in');
      navigate(from, { replace: true })
    })
    .cathc(err => setErr(err.message))
  }
  const handleGoogle = ()=>{
    googleLogin().then(()=>{
      toast.success("Successfully logged in")
    }).cathc(err => {
      toast.error(err.message)
      navigate(from, { replace: true })
    })
  }
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center form-height">
        <div className="form-style">
        <form onSubmit={handleLogin}>
          <h1 className="mb-4 text-center">Login</h1>
          <input className="styleInp d-block mb-4" name="email" type="email" placeholder="Email" />
          <input className="styleInp mb-4" name="password" type="text" placeholder="Password" />
          <p className="text-danger">{err}</p>
          <button className="form-button mb-4">Login</button>
          <p>Didn't have any account? <Link to='/signup'>Signup</Link></p>
          <div className="text-center mb-4 fs-4">
            <hr />
            or
            <hr/>
            </div>
        </form>
          <button onClick={handleGoogle} className="google-button">Continue with google</button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
