import React from 'react'
import './Dashboard.css'

const cards = [
    {
        balance: '0.00',
        status: 'Active',
        acctNumber: '0123233353',
        acctType: 'Personal Account'
    },
    {
        balance: 0.01,
        status: 'Active',
        acctNumber: '1234567890',
        acctType: 'Business Account'
    },
]
const DashboardCard = () => {
  return (
    <div>
        <div className='flex items-center justify-evenly mt-[34px]'>
            {cards.map((card) => (
                    <div className='dashboardBoxes lg:w-[408px] p-[16px]'>
                    <div className='flex justify-between text-white font-normal font-[DM-sans]'>
                        <div>
                            <p className='text-[16px] leading-[20px] '>Balance</p>
                            <p className='text-[24px] leading-[20px] font-medium mt-[6px]'>{card.balance}</p>
                            <p className='text-[16px] leading-[20px] mt-[12px]'>Account Number</p>
                            <p className='text-[16px] leading-[20px] font-medium mt-[8px]'>{card.acctNumber}</p>
                            
                        </div>
                        <div>
                            <p className='text-[16px] leading-[20px] '>status</p>
                            <p className='text-[24px] leading-[20px] font-medium mt-[6px] '>{card.status}</p>
                            <p className='text-[16px] leading-[20px] mt-[12px] '>Type</p>
                            <p className='text-[16px] leading-[20px] font-medium mt-[8px] '>{card.acctType}</p>
                        </div>
                    </div>
                        <div className='flex justify-between space-x-[16px] mt-[10px]'>
                            <button className='w-full text-[#32230D] text-[14px] leading-[21px] font-normal whitespace-nowrap bg-[#FAAF40] py-[10px] px-[24px] font-[poppins] rounded-[8px] outline-none'>Fund Account</button>
                            <button className='w-full text-[#32230D] text-[14px] leading-[21px] font-normal whitespace-nowrap bg-[#FAAF40] py-[10px] px-[24px] font-[poppins] rounded-[8px] outline-none'>Transactions History</button>
                        </div>
                </div>
    
            ))}
        </div>
    </div>
  )
}

export default DashboardCard