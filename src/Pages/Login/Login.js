import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import logo from "../../Assets/Images/brand.png";

const Login = () => {

  const [formValid, setFormValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,

  } = useForm();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (
  
      form.email !== "" &&
      form.password !== "" 
     
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.username]: e.target.value,
    });
  };

 const submitHandler = (e) => {
   // e.preventDefault()
   sessionStorage.setItem("userDetails", JSON.stringify({ ...form }));

   window.location = "/dashboard";
   reset();
 };



  return (
    <div className="container">
      <div className="logo">
        <img
          src={logo}
          alt=""
          style={{ height: "100px", width: "100px", margin: "10px" }}
        />
        <h1
          className="re"
          style={{ color: "#f7941d", fontSize: "40px", marginTop: "-10px" }}
        >
          re
        </h1>
        <h1
          className="ceive"
          style={{
            fontSize: "40px",
            color: "#2f3e91",
            display: "inline",
            marginTop: "-10px",
          }}
        >
          ceive
        </h1>
      </div>
      <h2>Login to your account</h2>
      <form className="form" onSubmit={handleSubmit(submitHandler)}>
        <div className="row">
          <div className="col">
            <input
              className={`col ${errors.email && "invalid"}`}
              type="email"
              id="email"
              maxlength="35"
              minlength="7"
              placeholder="Email"
              {...register("email", { required: "email is required" })}
              onKeyUp={() => {
                trigger("email");
              }}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email.message}</small>}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input
              className={`col ${errors.password && "invalid"}`}
              type="password"
              id="password"
              placeholder="Password"
              maxlength="30"
              minlength="5"
              pattern="(?=.*d)(?=.*[a - z])(?.*[A - Z])(.8,)"
              {...register("password", { required: "password is required" })}
              onKeyUp={() => {
                trigger("password");
              }}
              onChange={handleChange}
            />
            {errors.password && <small>{errors.password.message}</small>}
          </div>
        </div>

        <div className="remember">
          <div className="forgot">
            <input
              className={`forgot ${errors.checkbox && "invalid"}`}
              type="checkbox"
              {...register("checkbox", {
                required: "checkbox is required",
              })}
              onKeyUp={() => {
                trigger("checkbox");
              }}
              // style={{ width: "25px", margin: "-7px 7px 0 0" }}
             
            />
            <span>Remember me</span>
          </div>

          <p className="pass">
            <Link to="/forgotPassword">Forgot password?</Link>
          </p>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
        <p className="p">
          Do not have an account with us?
          <Link to="/signup"> Register Now </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
