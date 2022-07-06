import React from 'react'
import './BusinessDetails2.css'
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'


const BusinessDetails2 = () => {

  const [formValid, setFormValid] = useState(false)
  const [form, setForm] = useState({
    name: "",
    location: "",
  })

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

useEffect(() => {
  if(
    form.name !== "" &&
    form.location !== "" 
  ){
    setFormValid(true)
  }else{
    setFormValid(false)
  }

}, [form])


const handleSubmit = (e) =>{
  e.preventDefauilt();
  sessionStorage.setItem('businessDetails', JSON.stringify({...form}))  

    window.location="/busDetails4";

}



  return (
    <div className='BusinessDetails2-div'>
      <p>Important Detail</p>

      <form onSubmit={handleSubmit}>
        <label for="name">Business Name</label>
        <input type="text" name='name' placeholder='Business name' onChange={handleChange} required></input>
        
        <label for="location">Location</label>
        <input type="text" name='location' placeholder='Location' onChange={handleChange} required></input>
        
      <button className={formValid? 'btn': 'bttn2'} onChange={handleChange}>Next</button>
      </form>
    </div>
  )
}

export default BusinessDetails2