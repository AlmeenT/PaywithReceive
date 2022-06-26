import React from 'react'
import './Onboarding0.css'
import meju2 from './images/photo.png'
import { Link } from "react-router-dom";
const Onboarding0 = () => {
  return (
    <article >
     
     <div className='rics'> 
    
    <Link to="/yome">
     <img  src={meju2} alt="image"/> <div className='shadow'></div> <p className='info'>Skip long queues, send and receive money anywhere</p>
      </Link>
     <div className='pots'>
      <Link to="/onboarding"><div className="pot active"></div></Link>
          <div className="pot"></div>
         <Link to="/yome"><div className="pot riop"></div></Link>
          </div>
      </div>
    </article>

  )
}

export default Onboarding0
