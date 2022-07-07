import React,{useState} from 'react'
// import menuToggle from '../../Assets/Images/menuToggle.svg'
// import notification from '../../Assets/Images/notification.svg'
// import profileIcon from '../../Assets/Images/profileIcon.svg'
// import navdropdown from '../../Assets/Images/navdropdown.svg'
import logo from '../../Assets/Images/NavbarIcons/logo.png'
import walletdownIcon from '../../Assets/Images/NavbarIcons/walletdownIcon.svg'
import profile from '../../Assets/Images/NavbarIcons/profile.svg'
import {IoMdNotifications} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = ({clickNav, setClickNav}) => {
    const [showNav,setShowNav] = useState(false)
    // const [clickNav,setClickNav] = useState(false)

    // const items  = [{icon: home,title: 'Home', url:'/'},{icon: order,title: 'Order', url:'/order'},]
    // const payments  = [{icon: transaction,title: 'Transaction', url:'/transaction'},
    //                     {icon: customer,title: 'Customers', url:'/customers'},
    //                     {icon: refunds,title: 'Refunds', url:'/refunds'},
    //                     {icon: payouts,title: 'Payouts', url:'/payouts'},
    //                     {icon: makePayments,title: 'Make Payment', url:'/makePayments'},]

    // const transfers = [{icon: transfer,title: 'Transfers', url:'/transfers'},
    //                     {icon: customer,title: 'Recipients', url:'/recipients'},
    //                     {icon: balance,title: 'Balance', url:'/balance'}]

    // const supports = [{icon: compliant,title: 'Compliant', url:'/compliant'},
    //                     {icon: product,title: 'Products', url:'/product'},
    //                     {icon: Invoice,title: 'Invoices', url:'/invoice'}]



  return (
        <nav className='mb-12 font-[DM-sans]'>
            <div className='w-full fixed top-0 h-[80px] z-30 bg-[#D9D9D9]  flex items-center justify-between lg:pl-[12px] lg:pr-[41px]'>
                <div className=''>
                    <img className='cursor-pointer h-12 ' onClick={() => setShowNav(!showNav)} src={logo} alt="Menu" />
                </div>
                <div className='flex items-center space-x-[32px]'>
                        <div className='flex items-center'>
                            <p className='mr-[8px] text-[#292561] text-[16px] leading-[20px] '>Wallet</p>
                            <img src={walletdownIcon} alt="wallet" />
                        </div>
                        <div className='w-full'>
                        <div className='flex items-center w-[52px] h-[32px] bg-[#292561] rounded-[24px] '>
                            <div className='w-[24px] h-[24px] bg-white rounded-full'></div>
                        </div>
                        </div>
                        <div className='w-full relative'>
                            <IoMdNotifications className=" fill-[#292561] w-[30px] h-[30px]" />
                            <div className='px-[2px] absolute right-[3px] top-[2px] bg-[#D9D9D9] rounded-full'>
                            <div className='px-[5px] font-semibold text-[10px] text-red-600 bg-[#292561] rounded-full'>1</div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <img className=' w-[30px] h-[30px]' src={profile} alt="profile" />
                        </div>
                </div>
                    {/* <img className='mr-[12px]  cursor-pointer' src={notification} alt="notification" />
                    <img className='mr-[12px]  cursor-pointer' src={profileIcon} alt="profile" />
                    <img onClick={()=> setClickNav(!clickNav)} className=' cursor-pointer ' src={navdropdown} alt="down arrow" /> */}
               
            </div>

                {/* mobile dropdown section */}
            {/* <div className={showNav ? `fixed top-[53px] left-0 z-20 w-[130px] bg-[#FBB44A] pb-[76px] ease-in duration-300 ` : `fixed top-[-100%] left-0 ease-in duration-300 `}>
                <img onClick={() => setShowNav(!showNav)} className='absolute top-2 right-2 ' src={downArrow} alt="navdropdown" />

                <ul className='pt-[49px] text-white'>
                    {items.map((item) => (
                       <Link to={item.url} onClick={()=>setShowNav(!showNav)}><li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px] ' src={item.icon} alt="home" />
                            {item.title}
                        </li>
                    </Link>
                    ))}

                    <p className='font-normal text-[16px] leading-[17px] mt-[27px] mb-[16px] ml-[6px]'>PAYMENTS</p>
                    {payments.map((payment) => (
                        <Link to={payment.url}> <li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px] ' src={payment.icon} alt="home" />
                            {payment.title}
                            </li>
                        </Link>
                    ))}
                    <p className='font-normal text-[16px] leading-[17px] mt-[27px] mb-[16px] ml-[6px]'>TRANSFERS</p>
                    {transfers.map((transfer) => (
                       <Link to={transfer.url}><li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px] ' src={transfer.icon} alt="home" />
                            {transfer.title}
                        </li>
                        </Link> 
                    ))}

                    <p className='font-normal text-[16px] leading-[17px] mt-[27px] mb-[16px] ml-[6px]'>SUPPORT</p>
                    {supports.map((support) => (
                       <Link to={support.url}> <li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px] ' src={support.icon} alt="home" />
                            {support.title}
                        </li>
                        </Link>
                    ))}
                </ul>
            </div> */}
        </nav>
  )
}

export default Navbar 