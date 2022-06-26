import React from 'react'
import { Link } from "react-router-dom";
import meju from "./images/ON.png"
import './Onboarding.css'
const Onboarding = () => {
 
  return (

     <article >
 
     <div className='pics'> 
     <div className='dots'>
     <div className="dot active"></div>
         <Link to="/onboarding0"> <div className="dot"></div></Link>
         <Link to="/yome"><div className="dot riop"></div></Link>
          </div>
    <Link to="/onboarding0">
   <img  src={meju} alt="image"/> <h1 className='pext' >tap anywhere</h1>
     </Link>
      </div>  
    </article>
  


    

  )
}

export default Onboarding
