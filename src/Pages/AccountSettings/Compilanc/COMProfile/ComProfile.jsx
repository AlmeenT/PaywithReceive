
import { Dropdown } from 'bootstrap';
import React, { useState } from 'react'
import "./comprofile.css"
const Comprofile = () => {
  const [tname, setTname] = useState('');
  const [desc, setDesc] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

   const TradingName = (e) => {
    setTname(e.target.value);
    setSubmitted(false);
   }
    const Tdescription = (e) => {
    setDesc(e.target.value);
    setSubmitted(false);
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    if (tname === '' || desc=== '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  }
      const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {tname} successfully registered!!</h1>
      </div>
    );
    }

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
 
    <div className='Painn'>
    <div className='porm'>
    <h1>Profile</h1>
    {/* Calling to the methods */}
      
        {errorMessage()}
        {successMessage()}
    <form className='style-form'>
        {/* Labels and inputs for form data */}
        <input onChange={TradingName} className="aput"
          value={tname} type="text" placeholder='Trading name'/>

          <input onChange={Tdescription} className="iput"
          value={desc} type="text" placeholder='Description'/>

          <select name="selectList" id="selectList">
   <option value="option 1">Option 1</option>
   <option value="option 2">Option 2</option>
</select>

          
    </form>
    </div>

     <button onClick={handleSubmit} className="patn" type="submit">
          Save changes
        </button>
    </div>
  )
}

export default Comprofile