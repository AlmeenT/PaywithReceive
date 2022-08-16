import React from 'react'
import image from '../../Assets/Images/dashboardIcons/sofiritari.png'
import DashboardCard from '../../Components/dashboardCard/DashboardCard'
import sparkles from '../../Assets/Images/dashboardIcons/Sparkles.svg'
import DashboardSetup from '../../Components/dashboardAccountSetup/DashboardSetup'


const Dashboard = () => {
  return (
    //please dont remove this lg:ml-[264px] mt-[100px] lg:mt-[112px] just write your own code in it. thank you
    <section>
    <div className='max-w-[1150px] mx-auto mt-[100px] lg:mt-[112px] pb-[100px] px-[20px] lg:px-0'>
      {/* write here */}
        <div className='flex items-center lg:pl-[120px]'>
            <img className='w-[80px] h-[80px] rounded-full' src={image} alt="Mypic" />
            <div className='ml-[20px] lg:ml-[37px]'>
              <h2 className='text-[18px] lg:text-[24px] leading-[20px] lg:leading-[32px] font-medium text-black font-[DM-sans]'>Amgbara Sofiritari Ibikoroma</h2>
              <p className='underline cursor-pointer lg:mt-[10px] text-[12px] lg:text-[16px] leading-[20px] font-normal text-[#292561] lg:ml-[24px]'>View profile</p>
            </div>
        </div>

        <DashboardCard />
        <div className='flex justify-between font-[DM-sans] lg:px-[120px] lg:mt-[18px]'>
            <div className='flex items-center'>
                <p className='mr-[8px] text-[18px] lg:text-[24px] leading-[21px] lg:leading-[36px] font-medium text-[#292561]'>My Favorite</p>
                <img src={sparkles} alt="sparkles" />
            </div>
            <p className='underline cursor-pointer text-[14px] lg:text-[16px] leading-[20px] font-normal text-[#292561]'>Edit Favorite</p>
        </div>
        <DashboardSetup />
    </div>
    </section>
  )
}

export default Dashboard