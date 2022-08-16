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

const Sidebar = ({showSideNav, setShowSideNav}) => {
    const navigate=useNavigate()
  return (
    <>
      <nav className='fixed hidden lg:block  lg:w-[264px] pt-[150px] lg:pt-[222px] top-0 left-0 h-full overflow-y-auto ' style={{backgroundImage:'linear-gradient(9.01deg, #2F3E91 26.77%, #FBB44A 128%)'
        }}>
         
        <ul className="">
        {sidebarItems.map((item, index) => (
              <li className={`flex items-center whitespace-nowrap justify-between pl-[16px] pr-[22px] border-t-[2px] ${index===0 ? 'white' : 'border-[#292561]'} font-medium cursor-pointer text-white lg:text-[20px] lg:leading-[28px] py-[14px] `} 
              onClick={()=>navigate(item.url)} key={index}>
                  <span>{item.text}</span>
                  <img className='w-4' src={item.icon} alt={item.text} />
              </li>
        ))}

      </ul>
</nav>



{/* mobile side bar */}
<nav className='fixed lg:hidden lg:w-[264px] pt-[150px] lg:pt-[222px] top-0 left-0 h-full overflow-y-auto ' style={{width:showSideNav?'0%':'200px',transition:'.5s linear',backgroundImage:'linear-gradient(9.01deg, #2F3E91 26.77%, #FBB44A 128%)'
        }}>
         
      <ul className="">
      {sidebarItems.map((item, index) => (
            <li className={`flex items-center whitespace-nowrap justify-between pl-[16px] pr-[22px] border-t-[2px] ${index===0 ? 'white' : 'border-[#292561]'} font-medium cursor-pointer text-white lg:text-[20px] lg:leading-[28px] py-[14px] `} 
            onClick={()=>{navigate(item.url);setShowSideNav(true)}} key={index}>
                <span>{item.text}</span>
                <img className='w-4' src={item.icon} alt={item.text} />
            </li>
      ))}
      </ul>
</nav>
</>
  )
}

export default Sidebar