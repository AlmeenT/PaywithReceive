import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="container">
      <h1>Login to your account</h1>
      <p class="p">Securely login to your account</p>
      <form action="" class="form">
        <div class="row">
          <div class="col">
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              maxlength="35"
              minlength="10"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              maxlength="20"
            
            />
          </div>
        </div>
        <div class="login">
          <a href="/">
            <input type="submit" value="Log In"  />
          </a>
        </div>
        <p class="p">
          Don't have an account?
          <a href="/" target="_blank">
            Sign Up
          </a>
        </p>
        <p class="p">
          <a href="/" target="_blank" >
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login
