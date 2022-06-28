import React from 'react'
import { Link } from "react-router-dom";
import meju from "../../Assets/Images/ON.png"
import './Onboarding.css'
const Onboarding = () => {
 
  return (
    <article >
     <div className='pics'> 
      <Link to="/onboarding0"><img  src={meju} alt="image"/><h1 className='pext' >tap anywhere</h1></Link>
     </div>
    </article>
  )
}

export default Onboarding