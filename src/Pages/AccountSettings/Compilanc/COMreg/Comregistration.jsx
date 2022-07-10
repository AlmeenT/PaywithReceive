import React, { useState } from 'react'
import "./Comregistration.css"
const Comregistration = () => {
  const staffsizes =[
   {value: 'one', text: '1'},
   {value:'two', text:"2"},
  ];
  const[elected, setElected] = useState('')
  const[selected, setSelected] = useState(elected)
  const [tbus, setTbus] = useState('');
  const [street, setTstreet] = useState('');
   const [apart, setTapart] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
const Tbus = (e) => {
    setTbus(e.target.value);
    setSubmitted(false);
   }
  
   const Tstreet = (e) => {
    setTstreet(e.target.value);
    setSubmitted(false);
   }
    const Tapart = (e) => {
    setTapart(e.target.value);
    setSubmitted(false);
    }
    const staffChange = event =>{
      console.log(event.target.value);
      setSelected(event.target.value);
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    if (selected === '' || Tapart=== '') {
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
        <h1>User {} successfully registered!!</h1>
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
 
    <div className='Rainn'>
    <div className='mporm'>
    <h1 className='dress'>Registration</h1>
    {/* Calling to the methods */}
      
        {errorMessage()}
        {successMessage()}
    <form className='style-form'>
        {/* Labels and inputs for form data */}
        {/*staff size*/}
       <select className='sinput' value={selected} onChange={staffChange}>
       <option  className="leo" value={elected} selected disabled >Select State or Region</option>
    {staffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
</select>
{/*industry*/}
       <select className='sinput' value={selected} onChange={staffChange}>
       <option value={elected} selected disabled >City</option>
    {staffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
</select>
     
        <h2 className='address'>Registered Address</h2>
              <input onChange={Tbus} className="input"
          value={tbus} type="text" placeholder='Legal Business name'/>
 <select className='sinput' value={selected} onChange={staffChange}>
       <option value={elected} selected disabled >Select Registration type</option>
    {staffsizes.map(staffsize =>(<option key={staffsize.value} value={staffsize.value} >{staffsize.text}</option>))}
</select>

    
 <input onChange={Tstreet} className="input"
          value={street} type="text" placeholder='Street Address'/>

          <input onChange={Tapart} className="input"
          value={apart} type="text" placeholder='Apartment or House number'/>


          
    </form>
    </div>

     <button onClick={handleSubmit} className="patn" type="submit">
          Save changes
        </button>
    </div>
  )
}

export default Comregistration