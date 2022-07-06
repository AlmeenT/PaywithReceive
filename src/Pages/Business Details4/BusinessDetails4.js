import React from 'react'
import './BusinessDetails4.css'
import Registered from  '../../Assets/Images/Registered.png'
import  NotRegistered from '../../Assets/Images/NotRegistered.png'

const BusinessDetails4 = () => {
  return (
    <div className='BusinessDetails4-div'>
        <p>Select Business Type</p>

      <div className='wrapper'>
        <div className='parent'>
          <div className='option-div'>
            <p>Not Registered Business</p>
            <div className='img-parent'>
              <div className='img-div'>
                <img src={Registered} alt='building'></img>
              </div>
              <input type="radio" />
            </div>
          </div>

          <div className='option-div'>
            <p> Registered Business</p>
            <div className='img-parent'>
              <div className='img-div'>
                <img src={NotRegistered} alt='building'></img>
              </div>              
              <input type="radio" />
            </div>
          </div>
        </div>
        
        <button className='btn'>Next</button>
      </div>
    </div>
  )
}

export default BusinessDetails4