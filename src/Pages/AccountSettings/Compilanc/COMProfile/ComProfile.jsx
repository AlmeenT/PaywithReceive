
import React, { useState } from 'react'

import "./comprofile.css"
const Comprofile = () => {
  const staffsizes =[
   {value: 'one', text: '1'},
   {value:'two', text:"2"},
  ];
  const[elected, setElected] = useState('')
  const[selected, setSelected] = useState(elected)
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
    const staffChange = event =>{
      console.log(event.target.value);
      setSelected(event.target.value);
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
    <div className='mporm'>
    <h1>Profile</h1>
    {/* Calling to the methods */}
      
        {errorMessage()}
        {successMessage()}
    <form className='style-form'>
        {/* Labels and inputs for form data */}
        <input onChange={TradingName} className="input"
          value={tname} type="text" placeholder='Trading name'/>

          <input onChange={Tdescription} className="input"
          value={desc} type="text" placeholder='Description'/>

    {/*staff size*/}
       <select className='sinput' value={selected} onChange={staffChange}>
       <option  className="leo" value={elected} selected disabled >Select Staff size</option>
    {staffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
</select>
{/*industry*/}
       <select className='sinput' value={selected} onChange={staffChange}>
       <option value={elected} selected disabled >Select industry</option>
    {staffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
</select>
{/*staff size*/}
       <select className='sinput' value={selected} onChange={staffChange}>
       <option value={elected} selected disabled >Select category</option>
    {staffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
</select>
{/*staff size*/}
       <select className='sinput' value={selected} onChange={staffChange}>
       <option value={elected} selected disabled >Select  Business</option>
    {staffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
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