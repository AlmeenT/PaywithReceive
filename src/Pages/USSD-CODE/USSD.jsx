import React from 'react'
import { Link } from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import './ussd.css'

const USSD = () => {
  return (
    <div className='ussd-wrapper'>
        <div className='ussd-text'>
            <div className='ussd-main-text'>
                <h1>USSD CODE</h1>
                <p>Pay using Ussd Code</p>
            </div>
            
        </div>
        <div className='ussd-code'>
               <p>*USSD#</p> 
            </div>
        <div className=''>
            <div className='ussd-container'>
                <div className='ussd-search-wrapper'>
                    <div className='ussd-search-wrapper-container'>    
                        <div className='ussd-search-input'>
                            <input type='text' placeholder='Search banks'></input>
                        </div>    
                        <div className=''>  
                            <FcSearch style={{height:'30px', width:'40px', marginTop:'5px'}} />
                        </div> 
                         
                    </div>
         
                </div>
                <div className='ussa-bank-all-wapper'>
                       
                    <div className='ussd-bank-name-wrapper'>
                        <div className='ussd-bank-wrapper-container'>
                            <div className='ussd-bank-name-container'>
                                <div className='ussd-bank-txt'>
                                    <p>First Bank</p>
                                </div>
                            </div>
                            <div className='ussd-bank-code-container'>
                                <div className='ussd-bank-txt'>
                                    <p>*894#</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div> 
                    <div className='ussd-bank-name-wrapper'>
                        <div className='ussd-bank-wrapper-container'>
                            <div className='ussd-bank-name-container'>
                                <div className='ussd-bank-txt'>
                                    <p>First Bank</p>
                                </div>
                            </div>
                            <div className='ussd-bank-code-container'>
                                <div className='ussd-bank-txt'>
                                    <p>*894#</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    <div className='ussd-bank-name-wrapper'>
                        <div className='ussd-bank-wrapper-container'>
                            <div className='ussd-bank-name-container'>
                                <div className='ussd-bank-txt'>
                                    <p>First Bank</p>
                                </div>
                            </div>
                            <div className='ussd-bank-code-container'>
                                <div className='ussd-bank-txt'>
                                    <p>*894#</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>

                </div>
                       

            </div>
        </div>
        <div className='button-wrapper'>
            <Link to='/payment' className='back-btn'>Back</Link>
            <Link to='#' className='next-btn'>Next</Link>
        </div>

    </div>
   
  )
}

export default USSD