import React from 'react'
import account from '../../Assets/Images/dashboardIcons/account.png'
import payment from '../../Assets/Images/dashboardIcons/payments.png'
import transaction from '../../Assets/Images/dashboardIcons/transaction.png'
import './dashboardSetup.css'

const setups = [
    {
        image: account,
        title: 'My Account'
    },
    {
        image: transaction,
        title: 'Transaction History'
    },
    {
        image: payment,
        title: 'Payment'
    },
]
const DashboardSetup = () => {
  return (
      <>
    <div className='flex justify-evenly font-[DM-sans] mt-[30px] lg:mt-[24px] '>
        {setups.map((setup, index) => (
            <div>
                    <div className={`flex items-center justify-center w-[60px] md:w-[80px] h-[60px] md:h-[80px] ${index ===0 ? 'bg-[#3d43d861]': 'bg-[#faaf4047]'} rounded-full`}>
                        <img className='w-[50%] md:w-[60%]' src={setup.image} alt={setup.title} />
                    </div>
                    <p className='w-[70px] md:w-[90px] mt-[5px] text-[#63543E] text-[14px] lg:text-[18px] leading-[28px] font-medium mx-auto text-center break-words '>{setup.title}</p>
            </div>
        ))}
    </div>
    <div className='flex justify-center mt-[30px]'>
        <div>
        <div className='flex justify-between'>
            <p className='text-[16px] lg:text-[20px] leading-[20px] font-medium text-[#292561]'>Account Setup</p>
            <p className='text-[14px] lg:text-[16px] leading-[20px] font-normal text-[#8CDB28]'>90% DONE</p>
        </div>
        <div className='flex mt-[16px] lg:mt-[24px]'>
            <div className='dashboardSetupBox w-[90px] md:w-[200px] lg:w-[230px] h-[20px] lg:h-[24px]'></div>
            <div className='bg-[#86d56b] w-[90px] md:w-[200px] lg:w-[230px] h-[20px] lg:h-[24px] border-l-0 border border-black'></div>
            <div className='bg-[#86d56b] w-[70px] md:w-[130px] lg:w-[176px] h-[20px] lg:h-[24px] border-l-0 border border-black'></div>
            <div className='dashboardSetupBoxRight w-[40px] md:w-[50px] lg:w-[79px] h-[20px] lg:h-[24px] border-l-0 border border-black'></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default DashboardSetup