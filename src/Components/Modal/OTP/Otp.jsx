import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './otp.css'

function Otp() {
    const [formValid, setFormValid] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
        // watch,
      } = useForm();

      const [form, setForm] = useState({
        otp: ''
      })

      useEffect(() => {
        if (
          form.otp !== "" 
        
        ) {
          setFormValid(true);
        } else {
          setFormValid(false);
        }
    }, [form.otp])

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.otp]: e.target.value,
        });
      };

      const submitHandler = (e) => {
        // e.preventDefault()
        sessionStorage.setItem("userDetails", JSON.stringify({ ...form }));
    
        window.location = "/dashboard";
        reset();
      }
  return (
    <div className="otp-container">
        <div className='otp-main-container'>
            <div className="otp-container-wrapper">
                <div className="otp-form-container">
                    <div className="input-label-wrapper">
                        <p>Input OTP</p>
                    </div>
                    <div className="otp-form-main-container">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <input
                                className={`form-control ${errors.email && "invalid"}`} 
                                type="text" 
                                name='otp'
                                placeholder='John Doe'
                                errormessage="It should be a valid otp!"
                                {...register("otp", {
                                required: "otp is required",
                                pattern: {
                                    value:
                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid otp",
                                },
                                })}
                                onKeyUp={() => {
                                trigger("email");
                                }}
                                onChange={handleChange}
                                
                            />
                            {errors.otp && <small>{errors.otp.message}</small>}

                            <div className="otp-btn">
                        
                                <button
                                className={
                                    formValid
                                    ? "otp-container-active"
                                    : "otp-container-submit"
                                }
                                type='btn'>Ok</button>
                    
                            </div>
                        </form>
                    </div>
                                            
                </div>
            </div>
        </div>
    </div>

  )
}

export default Otp