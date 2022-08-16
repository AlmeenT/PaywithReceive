import React from 'react'
// import menuToggle from '../../Assets/Images/menuToggle.svg'
// import notification from '../../Assets/Images/notification.svg'
// import profileIcon from '../../Assets/Images/profileIcon.svg'
// import navdropdown from '../../Assets/Images/navdropdown.svg'
import logo from '../../Assets/Images/NavbarIcons/logo.png'
import walletdownIcon from '../../Assets/Images/NavbarIcons/walletdownIcon.svg'
import profile from '../../Assets/Images/NavbarIcons/profile.svg'
import {IoMdNotifications} from 'react-icons/io'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = ({showSideNav, setShowSideNav}) => {
    return (
        <nav className='mb-12 font-[DM-sans]'>
            <div className='w-full fixed top-0 h-[80px] z-20 bg-[#D9D9D9]  flex items-center justify-between lg:pl-[12px] lg:pr-[41px] px-[20px]'>
                <div className=''>
                    <img className='cursor-pointer w-[70%] h-10 lg:w-full lg:h-12 ' src={logo} alt="Menu" />
                </div>
                <div className='flex  items-center space-x-[20px] lg:space-x-[32px]'>
                        <div className='flex hidden items-center'>
                            <p className='mr-[8px] text-[#292561] text-[14px] lg:text-[16px] leading-[20px] '>Wallet</p>
                            <img src={walletdownIcon} alt="wallet" />
                        </div>
                        <div className='w-full hidden'>
                        <div className='flex items-center w-[46px] lg:w-[52px] h-[24px] lg:h-[28px] bg-[#292561] rounded-[24px] '>
                            <div className='w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] bg-white rounded-full'></div>
                        </div>
                        </div>
                        <div className='w-full relative'>
                            <IoMdNotifications className=" fill-[#292561] w-[30px] h-[30px]" />
                            <div className='px-[2px] absolute right-[3px] top-[2px] bg-[#D9D9D9] rounded-full'>
                            <div className='px-[5px] font-semibold text-[10px] text-red-600 bg-[#292561] rounded-full'>1</div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <img className=' w-[24px] h-[24px]' src={profile} alt="profile" />
                        </div>
                        <div className='pl-4 lg:hidden'>
                        {showSideNav? <AiOutlineMenu onClick={()=>setShowSideNav(!showSideNav)} className='' size={26} />
                        : <AiOutlineClose onClick={()=>setShowSideNav(!showSideNav)} className='' size={26} />}
                        </div>
                </div>
                    {/* <img className='mr-[12px]  cursor-pointer' src={notification} alt="notification" />
                    <img className='mr-[12px]  cursor-pointer' src={profileIcon} alt="profile" />
                    <img onClick={()=> setClickNav(!clickNav)} className=' cursor-pointer ' src={navdropdown} alt="down arrow" /> */}
               
            </div>
        </nav>
  )
}

export default Navbar 