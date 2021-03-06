import React, { useState } from 'react'
import './contactcom.css'
const Comcontact = () => {
   // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [cemail, setCemail] = useState('');
  const [check, setCheck] = useState(false);
  const [scemail, setScemail] = useState('');
   const [username, setUsername] = useState('');
    const [user, setUser] = useState('');

   const handleCemail = (e) => {
    setCemail(e.target.value);
    setSubmitted(false);
  };

    const handleScemail = (e) => {
    setScemail(e.target.value);
    setSubmitted(false);
  };

  const handleCheck = (e) =>{
    setCheck(e.target.value);
   setSubmitted(false);
  
   };
   
  
  
  const handleUser = (e) => {
    setUser(e.target.value);
    setSubmitted(false);
  };
   const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( cemail === '' || check === false & scemail === '') {
      setError(true);
    }
      else if (scemail === ''& check === true){
         setSubmitted(true);
          setError(false);
      }
    else {
      setSubmitted(true);
      setError(false);
    }
  };
  

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
   const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3 className='save'>User {cemail} successfully registered!!</h3>
      </div>
    );
  };
  return (
    
     <div className='Painn'>
    <div className="mporm">
     <h1>Contact</h1>
  
 
      {/* Calling to the methods */}
      
        {errorMessage()}
        {successMessage()}
   
 
     <form className='style-form'>
      <label className="label">General Email<span>*</span></label>
        <input onChange={handleCemail}
          value={cemail} type="email" placeholder='Enter email address'/>

           <label className="label">Support Email<span>*</span></label>
        <input onChange={handleScemail}
          value={scemail} type="email" placeholder='Enter support email'/>
          <div>
            <input onChange={handleCheck}
          value={check} type="checkbox"/>
          <label className="label">Use general email</label>
         
          </div>


          <label className="label">Phone Number</label>
        <input onChange={handleUsername} className="input"
          value={username} type="text" placeholder='Enter phone number' />

           <label className="label">Website(optional)</label>
        <input onChange={handleUser} className="input"
          value={user} type="text" placeholder='enter website' />
          </form>
          </div>
           <button onClick={handleSubmit} className="patn" type="submit">
          Save changes
        </button>
    </div>
  )
}

export default Comcontact