import React from 'react'
import './SignupOption.css'
import logo from '../../Assets/Images/brand.png'
import {Link} from 'react-router-dom'


function signupOption() {
  return (
    <div className='option-wrapper'>

      <div className='logo-div'>
          <img className='logo' src={logo} alt="brand-logo"  />
      </div>
      <div className='option-div'>
        <div className='btn-div'>
          <Link to='/signup'><button className='btn1'>Sign Up</button></Link>
          <p>Already a member?</p>
          <Link to='/login'><button className='btn2'>Log In</button></Link>
        </div>

         <div className='terms-div'>
            <input type="checkbox" name="check" id="check" />
            <p>
              By signing up, I confirmed that I have read and 
              agreed to Recieve's Privacy Policy, Cookies and Terms.
            </p>
         </div>
      </div>
    </div>
  )
}

export default signupOption

