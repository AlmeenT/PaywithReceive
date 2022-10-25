import { fromJS } from "draft-js/lib/BlockTree";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// import { GoogleLogin } from 'react-google-login'
import { useForm } from "react-hook-form";
import logo from "../../Assets/Images/brand.png";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigate = useNavigate();

  const collectData=async()=>{
    console.warn(username, email, password, confirmPassword)
    let result =await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({username, email, password, confirmPassword}),
      headers:{
        'content-type':'application/json'
      }
    });
    result =await result.json();
    console.log(result)
    localStorage.setItem("user", JSON.stringify(result))
    navigate('/dashboard')
    
  }
  const handlefailure = (result) => {
    alert(result)
  }

  // const handleLogin = (googleDate) => {
  //   console.log(googleDate)
  // }

  const [formValid, setFormValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const [username, setUsername] = useState('');

  // const collectData=()=>{
  //   console.warn(form)
  // }

  useEffect(() => {
    if (
      form.username !== "" &&
      form.email !== "" &&
      form.password !== "" &&
      form.confirmPassword !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
}, [form.username,
    form.email,
    form.password,
    form.confirmPassword])

    // useEffect(() => {
    //   fetch('http://localhost:5000/register')
    //   .then(response=>response.json())
    //   .then(data=>console.log(data))
    // }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler =(e) => {
    // e.preventDefault()
    sessionStorage.setItem("userDetails", JSON.stringify({ username, email, password, confirmPassword }));
   
    // window.location = "/dashboard";
    reset();
    
  }




  // const password = watch("password");

  return (
    <div className="auth__form-container register">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <div className="auth__form-container_fields-content__logo">
            <img
              src={logo}
              alt=""
              style={{ height: "100px", width: "100px", margin: "10px" }}
            />
            <h1
              className="first"
              style={{ 
                color: "#f7941d", 
                fontSize: "50px", 
                marginTop: "17px" }}
            >
              re
            </h1>
            <h1
              className="sec"
              style={{
                fontSize: "50px",
                color: "#2f3e91",
                display: "inline",
                marginTop: "17px",
              }}
            >
              ceive
            </h1>
          </div>
          <p>Sign up</p>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                className={`form-control ${errors.username && "invalid"}`}
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "username is required",
                })}
                onKeyUp={() => {
                  trigger("username");
                }}
                // onChange={handleChange}
                onChange={(e)=>setUsername(e.target.value)}
              />
              
              {errors.username && (<small>{errors.username.message}</small>)}
            </div>

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="email">Email</label>
              <input
                className={`form-control ${errors.email && "invalid"}`}
                type="text"
                placeholder="Email"
                errormessage="It should be a valid email address!"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
                // onChange={handleChange}
                onChange={(e)=>setEmail(e.target.value)}
              />
              {errors.email && <small>{errors.email.message}</small>}
            </div>

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                className={`form-control ${errors.password && "invalid"}`}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "minimum required length is 8",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
                // onChange={handleChange}
                onChange={(e)=>setPassword(e.target.value)}
              />
              {errors.password && <small>{errors.password.message}</small>}
            </div>

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Confirm Password</label>
              <input
                className={`form-control ${
                  errors.confirmPassword && "invalid"
                }`}
                type="password"
                placeholder="Confirm Password"
                {...register("ConfirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "password do not match",
                })}
                onKeyUp={() => {
                  trigger("confirmPassword");
                }}
                // onChange={handleChange}
                onChange={(e)=>setconfirmPassword(e.target.value)}
              />
              {errors.ConfirmPassword && (
                <small>{errors.ConfirmPassword.message}</small>
              )}
            </div>
            {/* checkbox */}
            {errors.checkbox && <small>{errors.checkbox.message}</small>}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "5px",
                justifyContent: "center",
              }}
            >
              <input
                className={`form-control ${errors.checkbox && "invalid"}`}
                type="checkbox"
                {...register("checkbox", {
                  required: "checkbox is required",
                })}
                onKeyUp={() => {
                  trigger("checkbox");
                }}
                style={{ width: "25px", margin: "-7px 7px 0 0" }}
                id="readTerms"
              />
              <p
                className="warning"
                style={{
                  fontSize: "12px",
                  color: "rgb(61, 79, 88)",
                  textAlign: "left",
                }}
              >
                By signing up, I confirmed that I have read and agreed to{" "}
                <a href="#">Receive's Privacy Policy,</a>
                <a href="#"> Cookies</a> and <a href="#">Terms</a>.
              </p>
            </div>
            <button
          
              className={
                formValid
                  ? "auth__form-container-active"
                  : "auth__form-container-submit"
              }
              id="btn"
              onClick={collectData}
            >
              Create Account
            </button>

            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Continue with Google"
              onSuccess={handleLogin}
              onFailure={handlefailure}
              cookiePolicy={'single_host_origin'} 
              /> */}

            <div className="auth__form-container_fields-content_logIn">
              <p>
                Already have an account? <a href="/login">Log in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
