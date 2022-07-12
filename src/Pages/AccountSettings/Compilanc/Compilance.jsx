import React from 'react'
import {useNavigate, NavLink} from "react-router-dom";
import "./Compilance.css"
const Compilance = () => {
  return (
    <div className='meju-compilance'>
       <nav className='nav-mopilance'>
       <NavLink to ="/comprofile" className={({isActive}) => (isActive ? "Colink-active" : "Colink")}>
      Profile
    </NavLink>
     <NavLink to ="/comcontact" className={({isActive}) => (isActive ? "Colink-active" : "Colink")}>
   Contacts
    </NavLink>
     <NavLink to ="/comregistration" className={({isActive}) => (isActive ? "Colink-active" : "Colink")}>
    Registration
    </NavLink>
     <NavLink to ="/comdocuments" className={({isActive}) => (isActive ? "Colink-active" : "Colink")}>
      Documents
    </NavLink>
    
   </nav>
    </div>
  )
}

export default Compilance