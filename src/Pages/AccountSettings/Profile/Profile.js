import React, { useState } from 'react'
import {useNavigate, NavLink} from "react-router-dom";
import './profile.css'

export default function Profile() {

 const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
 const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  
 
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
  const handleUser = (e) => {
    setUser(e.target.value);
    setSubmitted(false);
  };
 const handleSurname = (e) => {
    setSurname(e.target.value);
    setSubmitted(false);
  };
 const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || user === '' || surname === ''|| username === '') {
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
        <h3 className='save'>User {name} successfully registered!!</h3>
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
        <h3 className='save'>Please enter all the fields</h3>
      </div>
    );
  };
 
  return (
    <div className='Mainn'>
    <div className="porm">
     
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

          <input onChange={handleSurname} className="iput"
          value={surname} type="text" placeholder='Surname'/>

          </div>
 
        <label className="label">Email</label>
        <input onChange={handleEmail}
          value={email} type="email" placeholder='Enter email address'/>
 
        <label className="label">Username</label>
        <input onChange={handleUsername} className="input"
          value={username} type="text" placeholder='Username' />

           <label className="label">User ID</label>
        <input onChange={handleUser} className="input"
          value={user} type="text" placeholder='User ID' />
 
        
      </form>
     
    </div>
     <button onClick={handleSubmit} id="patn" type="submit">
          Save changes
        </button>
    </div>
  );
}