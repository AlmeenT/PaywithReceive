import React, { useState } from 'react'
import './payout.css'

const Payout = () => {
  const astaffsizes =[
   {value: 'one', text: 'Visa'},
   {value:'two', text:"affirm"},
   {value:'three', text:'alipay'},
    {value:'four', text:'googlepay'},
     {value:'five', text:'opay'},
      {value:'six', text:'paypal'},
       {value:'seven', text:'union pay'},
  ];
  const[aelected, setAelected] = useState('')
  const[aselected, setAselected] = useState(aelected)
 const [ausername, setAusername] = useState('');
  const [auser, setAuser] = useState('');
  
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  
 
  // Handling the password change
  const handleAuser = (e) => {
    setAuser(e.target.value);
    setSubmitted(false);
  };

 const handleAusername = (e) => {
    setAusername(e.target.value);
    setSubmitted(false);
  };
 
  const astaffChange = event =>{
      console.log(event.target.value);
      setAselected(event.target.value);
    }
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (  auser === '' || ausername === '') {
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
        <h3 className='save'>User {} successfully registered!!</h3>
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
     
        <h1>Payout</h1>
  
 
      {/* Calling to the methods */}
      
        {errorMessage()}
        {successMessage()}
   
 
      <form className='style-form'>
        {/* Labels and inputs for form data */}
       
 
        <input onChange={handleAusername} className="input"
          value={ausername} type="text" placeholder='Minimum Amount' />

          
        <input onChange={handleAuser} className="input"
          value={auser} type="text" placeholder='Days Interval' />

           <select className='sinput' value={aselected} onChange={astaffChange}>
       <option  className="leo" value={aelected} selected disabled >Select Bank</option>
    {astaffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
</select>
 
        
      </form>
     
    </div>
     <button onClick={handleSubmit} className="patn" type="submit">
          Save changes
        </button>
    </div>
  );
}

export default Payout