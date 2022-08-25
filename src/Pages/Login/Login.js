import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import logojay from "../../Assets/Images/brand.png";

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
    <div className="contaner">
      <div className="logojay">
        <img
          src={logojay}
          alt=""
          style={{
            height: "100px",
            width: "100px",
            margin: "10px",
          }}
        />
        <h6
          className="re"
          style={{
            color: "#f7941d",
            fontSize: "50px",
            marginTop: "20px",
            display: "inline",
          }}
        >
          re
        </h6>
        <h6
          className="ceive"
          style={{
            fontSize: "50px",
            color: "#2f3e91",
            display: "inline",
            marginTop: "20px",
          }}
        >
          ceive
        </h6>
      </div>
      <h2>Login to your account</h2>
      <form className="form" onSubmit={handleSubmit(submitHandler)}>
        <div className="rowin">
          <div className="colojay">
            <input
              className={`colojay ${errors.email && "invalid"}`}
              type="emailforlog"
           
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

        <div className="rowin">
          <div className="colojay">
            <input
              className={`colojay ${errors.password && "invalid"}`}
              type="passwordforlog"
           
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
            />
            <span>Remember me</span>
          </div>

          <p className="pass">
            <Link to="/forgotPassword">Forgot password?</Link>
          </p>
        </div>
        
          <button className="Lgin">Login</button>
      
        <p className="p">
          Do not have an account with us?
          <Link to="/signup">
            <p className="p2"> Register Now </p>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
