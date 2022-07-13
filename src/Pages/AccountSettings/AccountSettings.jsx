import React, { useState } from 'react'
import "./Account.css"
import {useNavigate, NavLink} from "react-router-dom";
import { buildQueries } from '@testing-library/react';
import Vector from '../../Assets/Images/Group.png'
const AccountSettings = () => {
  return (

    //please dont remove this lg:ml-[264px] lg:mt-[112px] just write your own code in it. thank you
    <div className='lg:ml-[264px] lg:mt-[112px]'>
      {/* write here */}
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
              Compliance
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
    </div>
  )
}

export default AccountSettings

 