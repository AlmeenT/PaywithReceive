import React,{useState} from 'react'
import downArrow from '../../Assets/Images/down-arrow.svg'
import menuToggle from '../../Assets/Images/menuToggle.svg'
import notification from '../../Assets/Images/notification.svg'
import profileIcon from '../../Assets/Images/profileIcon.svg'
import home from '../../Assets/Images/home.svg'
import order from '../../Assets/Images/order.svg'
import makePayments from '../../Assets/Images/makePayments.svg'
import balance from '../../Assets/Images/balance.svg'
import compliant from '../../Assets/Images/compliant.svg'
import Invoice from '../../Assets/Images/Invoice.svg'
import payouts from '../../Assets/Images/payouts.svg'
import refunds from '../../Assets/Images/refunds.svg'
import transfer from '../../Assets/Images/transfer.svg'
import product from '../../Assets/Images/product.svg'
import transaction from '../../Assets/Images/transaction.svg'
import customer from '../../Assets/Images/customer.svg'
import navdropdown from '../../Assets/Images/navdropdown.svg'
import { Link } from 'react-router-dom'

const Navbar = ({clickNav, setClickNav}) => {
    const [showNav,setShowNav] = useState(false)
    // const [clickNav,setClickNav] = useState(false)

    const items  = [{icon: home,title: 'Home', url:'/'},{icon: order,title: 'Order', url:'/order'},]
    const payments  = [{icon: transaction,title: 'Transaction', url:'/transaction'},
                        {icon: customer,title: 'Customers', url:'/customers'},
                        {icon: refunds,title: 'Refunds', url:'/refunds'},
                        {icon: payouts,title: 'Payouts', url:'/payouts'},
                        {icon: makePayments,title: 'Make Payment', url:'/makePayments'},]

    const transfers = [{icon: transfer,title: 'Transfers', url:'/transfers'},
                        {icon: customer,title: 'Recipients', url:'/recipients'},
                        {icon: balance,title: 'Balance', url:'/balance'}]
    
    const supports = [{icon: compliant,title: 'Compliant', url:'/compliant'},
                        {icon: product,title: 'Products', url:'/product'},
                        {icon: Invoice,title: 'Invoices', url:'/invoice'}]



  return (
        <nav className='mb-12'>
            <div className='fixed top-0 w-full left-0 right-0 h-[53px] z-30 bg-[#D9D9D9]  flex items-center justify-between px-3 md:px-6'>
                <div className='flex items-center '>
                    <img className='cursor-pointer' onClick={() => setShowNav(!showNav)} src={menuToggle} alt="Menu" />
                    <p className='ml-[12px] font-medium text-[16px] leading-[19px]'>Home</p>
                </div>
                <div className='flex mr-[12px]'>
                    <img className='mr-[12px] cursor-pointer' src={notification} alt="notification" />
                    <img className='mr-[12px] cursor-pointer' src={profileIcon} alt="profile" />
                    <img onClick={()=> setClickNav(!clickNav)} className=' cursor-pointer' src={downArrow} alt="down arrow" />
                </div>
            </div>

                {/* mobile dropdown section */}
            <div className={showNav ? `fixed top-[53px] left-0 z-30 w-[130px] bg-[#FBB44A] pb-[76px] ease-in duration-300 ` : `fixed top-[-100%] left-0 ease-in duration-300 `}>
                <img onClick={() => setShowNav(!showNav)} className='absolute top-2 right-2' src={navdropdown} alt="navdropdown" />

                <ul className='pt-[49px] text-white'>
                    {items.map((item) => (
                       <Link to={item.url} onClick={()=>setShowNav(!showNav)}><li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px]' src={item.icon} alt="home" />
                            {item.title}
                        </li></Link>
                    ))}

                    <p className='font-normal text-[16px] leading-[17px] mt-[27px] mb-[16px] ml-[6px]'>PAYMENTS</p>
                    {payments.map((payment) => (
                        <Link to={payment.url}> <li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px]' src={payment.icon} alt="home" />
                            {payment.title}
                            </li>
                        </Link>
                    ))}
                    <p className='font-normal text-[16px] leading-[17px] mt-[27px] mb-[16px] ml-[6px]'>TRANSFERS</p>
                    {transfers.map((transfer) => (
                       <Link to={transfer.url}><li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px]' src={transfer.icon} alt="home" />
                            {transfer.title}
                        </li>
                        </Link> 
                    ))}

                    <p className='font-normal text-[16px] leading-[17px] mt-[27px] mb-[16px] ml-[6px]'>SUPPORT</p>
                    {supports.map((support) => (
                       <Link to={support.url}> <li className='flex items-center mb-[16px] ml-[9px] whitespace-nowrap text-[12px] leading-[12px] font-normal'>
                            <img className='mr-[10px]' src={support.icon} alt="home" />
                            {support.title}
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
  )
}

export default Navbar