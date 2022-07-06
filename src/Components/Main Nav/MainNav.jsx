import React from 'react'
import Logo from '../../Assets/Images/brand.png'
import { Link } from 'react-router-dom'
import './MainNav.css'

const MainNav = () => {
  return (
    <div className='flex mb-2'>
        <Link to='/'><div className='flex ml-2 mt-2 lg:ml-24 lg:mt-3' >
            <img alt='' src={Logo} className='w-5 h-5 lg:w-10 lg:h-10' />
            <h2 className=' text-xs lg:text-2xl  text-orange-400'>re</h2><h2 className='text-xs lg:text-2xl text-blue-800'>ceive</h2>
        </div></Link>
        <div className='links flex ml-14 space-x-4 mt-3 lg:space-x-10 lg:mt-6 lg:ml-80'>
            <h2 className=' text-blue-800'>Developers</h2>
            <Link to='/about'><h2 className=' text-blue-800'>About us</h2></Link>
            <Link to='/support'><h2 className=' text-blue-800'>Support</h2></Link>
        </div>
        <div  className='buttons flex ml-12 space-x-1 mt-3 lg:ml-80 lg:space-x-6 lg:mt-6'>
            <Link to='/login'><div className=' w-7 h-4 lg:w-24 lg:h-7 border-solid border-2 border-blue-800 text-center rounded-2xl text-blue-800'>Login</div></Link>
            <Link to='/signup'><div className=' w-14 h-4 lg:w-32 lg:h-7 bg-orange-400 rounded-2xl text-center'>Register Now</div></Link>
        </div>

    </div>
  )
}

export default MainNav
