import React, { useState, useEffect } from 'react'
// import Cards from 'react-credit-cards'
import { useForm } from 'react-hook-form'
import 'react-credit-cards/es/styles-compiled.css'
// import InputNumber from 'react-input-number'
import './creditCard.css'

const CreditCard = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    const [email, setEmail] = useState('')
    // const [num, setNum] = useState(2.2);

    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        expiry: "",
        cvc: ""
      });

    // handle event
    const {
        register,
        
        formState: { errors },
        reset,
        trigger,
        // watch,
      } = useForm();

      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

    // const [form, setForm] = useState({
    //     email: "",
    //     name: "",
    //     number: "",
    //     expiry: "",
    //     cvc: "",
    //     country: ""
    // })
    // const handleChange = (e) => {
    //     setNumber (e.target.value);
    //     setName (e.target.value);
    //     setExpiry (e.target.value);
    //     setCvc (e.target.value);
    //     setEmail (e.target.value);

    //     console.log(number)
    // }
    // const handleFocus = (e) => {
    //     setFocus (e.target.name)
    // }
    const [countries, setCountries] = useState([])
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const data = require('./CountryData.json')
        setCountries(data)
    }, [])

    useEffect(() => {
        if (
          form.name !== "" &&
          form.email !== "" &&
          form.expiry !== "" &&
          form.cvc !== "" &&
          form.number !== ""
        ) {
          setFormValid(true);
        } else {
          setFormValid(false);
        }
    }, [form.name,
        form.email,
        form.cvc,
        form.expiry,
        form.number])

    const submitHandler = (e) => {
        e.preventDefault()
        // sessionStorage.setItem("userDetails", JSON.stringify({ ...form }));
    
        window.location = "/payment/cardPayment/creditCard/otp";
        reset();

        console.log(submitHandler)
      }




  return (
    <div className='auth__form-container'>
        <div className='credit-card-container'>
            {/* <div className="credit-real-card">
                <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}   
                />
            </div> */}
           
            <div className='credit-card-main-container'>
                <form onSubmit={submitHandler}>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            className={`form-control ${errors.email && "invalid"}`} 
                            type="text" 
                            name='email'
                            placeholder='Email'
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
                            onChange={handleChange}
                            onFocus={e => setFocus(e.target.email)}
                         />
                         {errors.email && <small>{errors.email.message}</small>}
                    </div>
                    <div className="email-container">
                        <label htmlFor="cardInformation">Card information</label>
                        <input 
                            className={`form-control ${errors.email && "invalid"}`} 
                            type="text" 
                            name='number'
                            // value={number}
                            placeholder='0000 0000 0000 0000' 
                            {...register("number", {
                                required: "Card number is required",
                                maxLength: {
                                  value: 16,
                                  message: "maximum required length is 16",
                                },
                                
                                pattern: {
                                    // value: /^[0-9\b]*$/,
                                    message: "Invalid card number",
                                  },
                                  
                              })}
                              
                              onKeyUp={() => {
                                trigger("number");
                              }}
                            onChange={handleChange}
                            onFocus={e => setFocus(e.target.name)}
                        />
                        {errors.number && <small>{errors.number.message}</small>}
                        <div className="date-cvc-container">
                            <div className="expiry-date">
                                <input 
                                    className={`form-control ${errors.expiry && 'invalid'}`}
                                    type="text" 
                                    name='expiry'
                                    min='4'
                                    max='4'
                                    
                                    placeholder='mm/yy'
                                    {...register("expiry", {
                                        required: "card expiry date is required",
                                        
                                        message: "input the correct date on the card",
                                        maxLength: {
                                            value: 5,
                                            message: "Maximum required length is 5",
                                        },
                                        pattern: {
                                            value: /^[0-9\b]*$/,
                                            message: "correct date is required",
                                        },
                                    })}
                                    onKeyUp={() => {
                                        trigger("expiry");
                                      }}
                                    onChange={handleChange}
                                    onFocus={e => setFocus(e.target.name)}

                                 />
                                 {errors.expiry && <small>{errors.expiry.message}</small>}
                            </div>
                            <div className="cvc">
                                {/* <InputNumber 
                                    min={3}
                                    max={3}
                                    step={0.03}
                                    value={num}
                                    onChange={setNum}
                                /> */}
                                <input 
                                    className={`form-control ${errors.cvc && 'invalid'}`}
                                    type="text"
                                    name='cvc'
                                    placeholder='cvc'
                                    {...register ('cvc', {
                                        required: 'cvc is required'
                                    })}
                                    onKeyUp={() => {
                                        trigger("expiry");
                                      }}
                                    value={cvc}
                                    onChange={handleChange}
                                    onFocus={e => setFocus(e.target.name)}
                                 />
                                 {errors.cvc && <small>{errors.cvc.message}</small>}
                            </div>
                        </div>
                    </div>
                    <div className="email-container">
                        <label htmlFor="name">Name</label>
                        <input 
                            className={`form-control ${errors.name && 'invalid'}`} 
                            type="text" 
                            name='name'
                            
                            placeholder='name' 
                            {...register ('name', {
                                required: 'card registered name is required',
                                
                            })}
                            onKeyUp={() => {
                                trigger("expiry");
                              }}
                            
                            onChange={handleChange}
                            onFocus={e => setFocus(e.target.name)}
                        />
                        {errors.name && <small>{errors.name.message}</small>}
                    </div>
                    <div className="email-container">
                        <label htmlFor="country">Country</label>
                        {/* <input 
                            type="text" 
                            name='country'
                            placeholder='Country or region' 
                            onChange={e => setCountry(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        /> */}
                        <select 
                        className='credit-card-country' name="country" id=""
                        {...register('country', {required: 'Country is required'})}
                        >
                            <option value="">--Select Country--</option>
                            {
                                countries.map((item) => {
                                    return (
                                        <option key={item.country}>
                                            {item.country}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {errors.country && <small>errors.country.message</small>}
                    </div>
                    <div className="credit-card-btn">
                        <a href='/'>
                            <button
                              className={
                                formValid
                                  ? "auth__form-container-active"
                                  : "auth__form-container-submit"
                              }
                            type='btn'>Pay</button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreditCard