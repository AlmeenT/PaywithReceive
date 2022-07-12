import React from 'react'
import image from '../../Assets/Images/dashboardIcons/sofiritari.png'
import DashboardCard from '../../Components/dashboardCard/DashboardCard'
import sparkles from '../../Assets/Images/dashboardIcons/Sparkles.svg'
import DashboardSetup from '../../Components/dashboardAccountSetup/DashboardSetup'


const Dashboard = () => {
  return (
    //please dont remove this lg:ml-[264px] lg:mt-[112px] just write your own code in it. thank you
    <div className='lg:ml-[264px] lg:mt-[112px] pb-[100px]'>
      {/* write here */}
        <div className='flex items-center lg:pl-[120px]'>
            <img className='w-[80px] h-[80px] rounded-full' src={image} alt="Mypic" />
            <div className='ml-[37px]'>
              <h2 className='text-[24px] leading-[32px] font-medium text-black font-[DM-sans]'>Amgbara Sofiritari Ibikoroma</h2>
              <p className='underline cursor-pointer mt-[10px] text-[16px] leading-[20px] font-normal text-[#292561] ml-[24px]'>View profile</p>
            </div>
        </div>

        <DashboardCard />
        <div className='flex justify-between font-[DM-sans] lg:px-[120px] mt-[18px]'>
            <div className='flex items-center'>
                <p className='mr-[8px] text-[24px] leading-[36px] font-medium text-[#292561]'>My Favorite</p>
                <img src={sparkles} alt="sparkles" />
            </div>
            <p className='underline cursor-pointer text-[16px] leading-[20px] font-normal text-[#292561]'>Edit Favorite</p>
        </div>
        <DashboardSetup />
    </div>
  )
}

export default Dashboard