import React from 'react';
import './ForgotPassword.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logojay from "../../Assets/Images/brand.png";

const ForgotPassword = () => {
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
   
  });

  useEffect(() => {
    if (form.email !== "" ) {
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

    window.location = "/ForgotPassword2";
    reset();
  };
  return (
    <div className="contener">
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
      <h2 className='your'>Reset your password</h2>
      <p className='reg'>
        Type in the Email your registered your account with and click on
        'Request Password Reset'{" "}
      </p>
      <form className="formForpass" onSubmit={handleSubmit(submitHandler)}>
        <div className="rower">
          <label htmlFor="Email">Email Address</label>
        </div>
        <div className="colu">
          <input
            className={`colu ${errors.email && "invalid"}`}
            type="resetemail"
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

        <div className="loginRet">
          <div className="bck">
            <Link to="/login">
              <p className="backTo"> Back to Login </p>
            </Link>
          </div>

         
            <button className="request">Request Password Reset</button>
       
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword