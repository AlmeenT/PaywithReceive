import React from 'react'
import permission from '../../Assets/Images/permission.svg'
import preference from '../../Assets/Images/preference.svg'
import profileIcon2 from '../../Assets/Images/profileIcon2.svg'
import logout from '../../Assets/Images/logout.svg'
import support from '../../Assets/Images/support.svg'
import NavPopUpList from './NavPopUpList'
import './NavPopUp.css'

const NavPopUp = ({clickNav, setClickNav}) => {

    const items = [
        {
            icon: profileIcon2,
            title:'Profile'
        },
        {
            icon: permission,
            title:'Permission'
        },
        {
            icon: preference,
            title:'Preferences'
        },
        {
            icon: support,
            title:'Message'
        },
    ]
  return (
    <div style={{display:clickNav ? 'block':'none', transition:".5s ease-in"}} className='navPopUp fixed z-40 top-10 right-4  bg-white'>
        {items.map((item)=> (
           <NavPopUpList {...item} clickNav={clickNav} setClickNav={setClickNav}/>
        ))}

        <div className='w-full border border-[#DCD6D6] my-[7px]'></div>
        <NavPopUpList icon={logout} title="LogOut" />
    </div>  
  )
}

export default NavPopUp 