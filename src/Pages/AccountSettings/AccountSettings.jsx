import React, { useState } from 'react'
import "./Account.css"
import {useNavigate, NavLink} from "react-router-dom";
import { buildQueries } from '@testing-library/react';
import Vector from '../../Assets/Images/Group.png'
const AccountSettings = () => {
  return (
    <div className='account-start'>
    <div className='settings'>
    <img src={Vector} alt="icon"/>
      <h1 className='topic'>Account Settings</h1>
    </div>
    <div className='reku'>
    <nav className='peku'>
    <NavLink to ="/profile" className={({isActive}) => (isActive ? "link-active" : "link")}>
      Profile
    </NavLink>
     <NavLink to ="/comprofile" className={({isActive}) => (isActive ? "link-active" : "link")}>
   Compilance
    </NavLink>

     <NavLink to ="/payout" className={({isActive}) => (isActive ? "link-active" : "link")}>
    Payout
    </NavLink>
     <NavLink to ="/api" className={({isActive}) => (isActive ? "link-active" : "link")}>
      API
    </NavLink>
   </nav>
    </div>
    </div>
 
  )
}

export default AccountSettings

 