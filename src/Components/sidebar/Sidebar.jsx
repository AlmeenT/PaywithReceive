import React from 'react'
import {useNavigate} from "react-router-dom";
import dropdown from '../../Assets/Images/sidebarIcons/dropdown.svg'

const sidebarItems = [
  {
    text: "Dashboard",
    url: '/dashboard',
    icon: dropdown
  },
  {
    text: "My Account",
    url: '/myAccount',
    icon: dropdown
  },
  {
    text: "Payment",
    url: '/payment',
    icon: dropdown
  },
  {
    text: "Transactions",
    url: '/transaction',
    icon: dropdown
  },
  {
    text: "Contact Us",
    url: '/contactUs',
    icon: dropdown
  },
  {
    text: "Services",
    url: '/services',
    icon: dropdown
  },
  {
    text: "Developer Code",
    url: '/developerCode',
    icon: dropdown
  },
  {
    text: "Account Settings",
    url: '/accountSettings',
    icon: dropdown
  },
]

const Sidebar = () => {
    const navigate=useNavigate()
  return (
        <nav className='fixed w-[264px] pt-[222px] top-0 left-0 h-full overflow-y-auto ' style={{backgroundImage:'linear-gradient(9.01deg, #2F3E91 26.77%, #FBB44A 128%)'
        }}>
<ul className="">
  {sidebarItems.map((item, index) => (
        <li  className={`flex items-center justify-between pl-[16px] pr-[22px] border-t-[2px] ${index===0 ? 'white' : 'border-[#292561]'} font-medium cursor-pointer text-white lg:text-[20px] lg:leading-[28px] py-[14px] `} 
        onClick={()=>navigate(item.url)} key={index}>
            <span>{item.text}</span>
            <img className='w-4' src={item.icon} alt={item.text} />
        </li>
  ))}
  
  {/* <li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/myAccount')}>
    My Account
  </li>
  <li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/payment')}>
Payment  
</li>
  <li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/transaction')}>
transaction 
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/contactUs')}>
Contact Us
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/services')}>
Services
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/developerCode')}>
Developer Code
</li>
<li className='font-semibold cursor-pointer text-white text-xl mb-2 mt-4 text-center' onClick={()=>navigate('/accountSettings')}>
Account Settings 
</li> */}
  </ul>
</nav>
  )
}

export default Sidebar