import React, { useState, useRef } from 'react'
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
  };

  return (
    
     <div className='Painn'>
    <div className="mporm">
     <h1>Documents</h1>
  
 
      {/* Calling to the methods */}
      
        {errorMessage()}
        {successMessage()}
   
 
     <form className='style-form'>
     
     <button  onClick={hanClick}>choose file</button>
        <input  type="file" ref={fileInput} onChange={handleChange}  className='docfile'/>
       
         
          </form>
          </div>
           <button onClick={handleSubmit} className="patn" type="submit">
          Save changes
        </button>
    </div>
  )
}

export default Comdocuments