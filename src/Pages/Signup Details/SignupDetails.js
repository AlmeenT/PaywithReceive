import React, { useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import logo from '../../Assets/Images/brand.png'
import { v4 as uuidv4 } from 'uuid';
import './SignupDetails.css'

const SignupDetails = () => {
  // let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  reset,
  trigger,
  
 } = useForm();
  const [form, setForm] = useState({
    fullname: "",
    date: "",
    address: "",
    phone: "",
    code: ""

  });

  const[countries, setCountries] = useState([])

  useEffect (() => {
    const data = require('./CountryData.json')
    console.log('data', data)
    setCountries(data)
  }, [])

  const handleChange = (e) => {
    setForm ({
      ...form,
      [e.target.username]: e.target.value
    })

  }

  const submitHandler = (e) => {
    e.preventDefault()
    // sessionStorage.setItem('userDetails', JSON.stringify({...form}))  

    window.location="/dashboard";
    reset();
  }


  return (
    
    <div className="auth_form-container">
      {/* <p>{ userDetails }</p> */}
      <div className="auth_form-container_fields">
        <div className="auth_form-container_fields-content">
          <div className='auth_form-container_fields-content__logo'>
            <img src={logo} alt="" style={{ height:'100px', width:'100px', margin:'10px' }} />
            <h1 className='first' style={{color:'#f7941d', fontSize:'40px', marginTop:'-10px' }} >re</h1><h1 className='sec' style={{fontSize:'40px', color:'#2f3e91', display: 'inline', marginTop:'-10px'}} >ceive</h1>
          </div>
           <p>Tell us a bit about you</p>
           <form onSubmit={handleSubmit(submitHandler)}>
            <div className='auth_form-container_fields-content_input'>
              <label htmlFor='fullname'>Full Name</label>
              <input 
              className={`form-container ${errors.fullname && "invalid"}`}
              type='text'
              placeholder='Full Name'
              {...register("fullname", {
                required: 'fullname is required' 
              })}
              onKeyUp = {() => {
                trigger('fullname');
              }}
              />
              {errors.fullname && (<small>{errors.fullname.message}</small>)}
            </div>

            <div className='auth_form-container_fields-content_input'>
              <label htmlFor='date'>Birthday</label>
              <input 
              className={`form-container ${errors.date && "invalid"}`}
              type='date'
              placeholder='Birthday'
              {...register('date',{required: "Birthday is required", 
              })} 
              onKeyUp = {() => {
                trigger('date');
              }}
              onChange={handleChange}
              />
              {errors.date && (<small>{errors.date.message}</small>)}
            </div>

            <div className='auth_form-container_fields-content_input'>
              <label htmlFor='address'>Address</label>
              <textarea 
              className={`form-container ${errors.address && "invalid"}`}
              type='text'
              placeholder='Address'
              {...register('address',{required: "address is required",
              minLength: {value: 10, message: "minimum required length is 10"}, 
              maxLength: {value: 100, message: "minimum required length is 100"}
              })} 
              onKeyUp = {() => {
                trigger('address');
              }}
              onChange={handleChange}
              />
              {errors.address && (<small>{errors.address.message}</small>)}
            </div>

            <div className='auth_form-container_fields-content_input'>
              <label htmlFor='phone'>Phone Number</label>
              <div  id='Phone-code-grid'>
                <select
                  className={`form-container ${errors.code && "invalid"}`}
                  type='tel'

                  {...register('code',{required: {
                    value: true,
                    message: "Country Code is required",
                  }
                  })} 
                  onKeyUp = {() => {
                    trigger('code');
                  }}
                  onChange={handleChange}
                >
                  {
                    countries.map((item) => {
                      return(
                        <option
                          
                          key={uuidv4()} value={item.calling_code}>
                          {item.calling_code}
                        </option>
                      )
                    })
                  }
                  
                </select>
                
                <input 
                className={`form-container ${errors.phone && "invalid"}`}
                type='tel'
                placeholder='Phone Number'
                {...register('phone',{required: "Phone Number is required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
                })} 
                onKeyUp = {() => {
                  trigger('phone');
                }}
                onChange={handleChange}
                />
              


              </div>
              <div className='small errorPhone'>
              {errors.code && (<small>{errors.code.message}</small>)}
              {errors.phone && (<small>{errors.phone.message}</small>)}
              </div>
             
             
            </div>
            
          <button className='btn-1'>
              Continue
            </button>
            
           </form>
        </div>
  </div>

  </div>
  )
}

export default SignupDetails