import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logojay from "../../Assets/Images/brand.png";
import "./ForgotPassword2.css";

const ForgotPassword2 = () => {
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
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (
      form.password !== "" &&
      form.confirmPassword !== ""
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

  const password = watch("password");

  return (
    <div className="cntainer">
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
      <h2 className="put">Reset your password</h2>
      <p>Type in your New Password.</p>
      <form className="form" onSubmit={handleSubmit(submitHandler)}>
        <div className="rower">
          <label htmlFor="NewPassword">New Password</label>
        </div>
        <div className="colun">
          <input
            className={`colun resetpassw ${errors.password && "invalid"}`}
            type="password"
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

        <div className="rower">
          <label htmlFor="password">Confirm Password</label>
        </div>
        <div className="colun">
          <input
            className={`form-control resetpassw ${
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
            onChange={handleChange}
          />
          {errors.ConfirmPassword && (
            <small>{errors.ConfirmPassword.message}</small>
          )}
        </div>

        <div className="loginReset">
          <Link to="/login" className="reset">
            <p>Back to Login </p>
          </Link>

          <button className="continue">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword2