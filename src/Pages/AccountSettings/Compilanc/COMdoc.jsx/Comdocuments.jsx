import React, { useState, useRef } from 'react'
import {useNavigate, NavLink} from "react-router-dom";
import './comdoc.css'
const Comdocuments = (props) => {
  const fileInput = React.useRef(null);
 const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

     const hanClick = (e) =>{
      e.preventDefault();
      fileInput.current.click();
     };
    const handleChange= (e) => {
         const fileUploaded = e.target.files[0];
         props.handleFile(fileUploaded);
      }
    
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileInput===' ') {
      setError(true);
    }
    else {
      setSubmitted(true);
      setError(false);
    }
  };
  


  return (
    
     <div className='Painn'>
    <div className="mporm">
     <h1 className='docv'>Documents</h1>
  
 
      {/* Calling to the methods */}
      
      
   
 
     <form className='style-form'>
     
     {/*<button  onClick={hanClick}>choose file</button>*/}
        <label className="label">Company Certificate</label>
        <input  type="file"  onChange={handleChange}  className='docfile'/>
         <label className="label">Government Issue card</label>
         <input  type="file"  onChange={handleChange}  className='docfile'/>
          <label className="label">Utility Bill</label>
          <input  type="file"  onChange={handleChange}  className='docfile'/>
       
         
          </form>
          </div>
            <NavLink to ="/payout" className={({isActive}) => (isActive ? "link-active" : "link")}>
    Payout
    <button onClick={handleSubmit} className="patn" type="submit">
          Save changes
        </button></NavLink>
    </div>
  )
}

export default Comdocuments