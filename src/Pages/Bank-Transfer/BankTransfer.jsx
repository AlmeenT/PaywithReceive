import React from 'react'
import { Link } from 'react-router-dom'
import './banktransfer.css'

const BankTransfer = () => {
  return (
    <div className='bank-transfer'>
        <div className='bank-transfer-container'>
           <div className='text'>
            <h2>BANK TRANSFER</h2>
            <p>Pay using Bank Transfer</p>
           </div>
    
                {/* <div className='bank-transfer-content-paragraph-wrapper'>
                    <div className='bank-transfer-content-paragraph-main-wrapper'>
                        <div>
                            <p>Search Banks</p>
                        </div>
                        <div>
                        <p className='txt-1'>Most used banks</p>
                        </div>
                    </div>
                </div> */}
                

            <div className='bank-transfer-content'>
        
        
                <div className='bank-transfer-bank-list'>
                    <p className='textHead'>Search Banks</p>
                    <div className='most-used'
                    ><p>ALL BANKS </p></div>
                </div>
                <div className='bank-transfer-most-use'>
                    <p className='textHead'>Most used banks</p>
                    <div className='most-used'><p>ACCESS BANK</p></div>
                    <div className='most-used'><p>GT BANK</p></div>
                    <div className='most-used'><p>FIRST BANK</p></div>
                </div>
            </div>
            <div className="proceed-container">
                <Link to='/pay-now'><button className='buttonProceed-1'>Proceed Securely</button></Link>
                <Link to='/payment' className='back-btn'>Back</Link>
            </div>
            
           

        </div>
        

    </div>
  )
}

export default BankTransfer