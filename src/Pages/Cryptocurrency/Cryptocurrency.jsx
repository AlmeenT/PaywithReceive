import React from 'react'
import { Link } from 'react-router-dom'
// import bitcoin from '../../Assets/Images/Cryptocurrency-content-icons/litcoin-and-icons.png'
import bitcoin from '../../Assets/Images/bitcoin.png'
import dogecoin from '../../Assets/Images/Cryptocurrency-content-icons/dogecoin-icon.png'
import zcash from '../../Assets/Images/Cryptocurrency-content-icons/Zcash-icon.png'
import ethereum from '../../Assets/Images/Cryptocurrency-content-icons/ethereum-icon.png'
import litcoin from '../../Assets/Images/Cryptocurrency-content-icons/litcoin-icon.png'
import BNB from '../../Assets/Images/Cryptocurrency-content-icons/BNB-icon.png'

import './cryptocurrency.css'

const Cryptocurrency = () => {
  return (
    <div className='crytocurrency-wrapper'>
        <div className='crytocurrency-container'>
        <div className='text'>
            <h2>CRYTOCURRENCY</h2>
            <p>Pay using Cryptocurrency</p>
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
                

            <div className='crytocurrency-content'>
        
        
                <div className='bank-transfer-bank-list'>
                    <div className='most-used'>
                        <div className='crypto-pack'>
                            <div className=''>
                                <img src={bitcoin} alt='' style={{height:'40px', width:'40px', margin:'0 20px 0px 20px' }} />
                            </div>
                            <div>
                                
                                 <p> BITCOIN </p>

                            </div>
                        </div>
                        
                    </div>
                    <div className='most-used'>
                        <div className='crypto-pack'>
                            <div className=''>
                                <img src={dogecoin} alt='' style={{height:'40px', width:'40px', margin:'0 20px 0px 20px' }} />
                            </div>
                            <div>
                                
                                 <p> DOGECOIN </p>

                            </div>
                        </div>
                        
                    </div>
                    <div className='most-used'>
                        <div className='crypto-pack'>
                            <div className=''>
                                <img src={zcash} alt='' style={{height:'40px', width:'40px', margin:'0 20px 0px 20px' }} />
                            </div>
                            <div>
                                
                                 <p> ZCASH </p>

                            </div>
                        </div>
                        
                    </div>
                    {/* <div className='most-used'><img src={bitcoin} alt='' style={{height:'390%', width:'300%'}} /></div>
                    <div className='most-used'><p>DOGECOIN </p></div>
                    <div className='most-used'><p>ZCASH </p></div> */}
                </div>
                <div className='bank-transfer-most-use'>
                <div className='most-used'>
                        <div className='crypto-pack'>
                            <div className=''>
                                <img src={ethereum} alt='' style={{height:'40px', width:'40px', margin:'0 20px 0px 20px' }} />
                            </div>
                            <div>
                                
                                 <p> ETHEREUM </p>

                            </div>
                        </div>
                        
                    </div>
                    <div className='most-used'>
                        <div className='crypto-pack'>
                            <div className=''>
                                <img src={litcoin} alt='' style={{height:'40px',   width:'40px', margin:'0 20px 0px 20px' }} />
                            </div>
                            <div>
                                
                                 <p> LITCOIN </p>

                            </div>
                        </div>
                        
                    </div>
                    <div className='most-used'>
                        <div className='crypto-pack'>
                            <div className=''>
                                <img src={BNB} alt='' style={{height:'70px', width:'80px', margin:'0 0px 0px 0' }} />
                            </div>
                            <div>
                                
                                 <p> BNB </p>

                            </div>
                        </div>
                        
                    </div>
                    {/* <div className='most-used'><p>ETHEREUM</p></div>
                    <div className='most-used'><p>LITCOIN</p></div>
                    <div className='most-used'><p>BNB</p></div> */}
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

export default Cryptocurrency