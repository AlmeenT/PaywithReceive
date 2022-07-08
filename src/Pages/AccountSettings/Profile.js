import React, { useState } from 'react'
import {useNavigate, NavLink} from "react-router-dom";
import Navbar from '../../Components/navbar/Navbar';
import './profile.css'

export default function Profile() {

 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className='Mainn'>
    <div className="form">
     
        <h1>Profile</h1>
  
 
      {/* Calling to the methods */}
      
        {errorMessage()}
        {successMessage()}
   
 
      <form className='style-form'>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <div className='names'>
        <input onChange={handleName} className="aput"
          value={name} type="text" placeholder='First Name'/>
          <input onChange={handleName} className="iput"
          value={name} type="text" placeholder='Surname'/>
          </div>
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        
      </form>
     
    </div>
     <button onClick={handleSubmit} className="batn" type="submit">
          Save changes
        </button>
    </div>
  );
}