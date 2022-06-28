import React from 'react'
import './Onboarding0.css'
import meju2 from './images/photo.png'
import meju2 from '../../Assets/Images/photo.png'
import { Link } from "react-router-dom";
const Onboarding0 = () => {
  return (
    <article >   
     <div className='rics'> 
    <Link to="/signupLogin">
     <img  src={meju2} alt="image"/> <p className='info'>Skip long queues, send and receive money anywhere</p>
      <div className='shadow'></div></Link>
    
      </div>
    </article>

  )
}

export default Onboarding0
