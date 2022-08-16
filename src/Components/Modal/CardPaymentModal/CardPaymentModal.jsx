import React from 'react'
import { Link } from 'react-router-dom'
import PaymentMethod from '../../../Assets/Images/card-type-img.png'
import LoadingPaymentMethod from '../../../Assets/Images/change-payment-method.png'
// import Cards from 'react-credit-cards'
// import 'react-credit-cards/es/styles-compiled-css'
import './cardPaymentModal.css'


function CardPaymentModal() {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <h2>CARD PAYMENTS</h2>
            <p className='txt'>Pay using bank cards</p>
            {/* <div className='card-payment-container'>
                <div className='card-payment-type'>
                 <img src={PaymentMethod} alt='' />   
                </div>
                <div className='card-payment-type-1'>
                 <p className='user-info'>Sarah King</p>
                 <span>123******</span>   
                </div>
                <button className='buttonProceed'>Proceed Securely</button>
            </div> */}

            <div className='card-payment-container'>
                <div className='card-payment-type'>
                 <img src={PaymentMethod} alt='' />   
                </div>
                <div className='card-payment-type-1'>
                 <p className='user-info'>Sarah King</p>
                 <span>123******</span>   
                </div>
                <Link to='/payWithCreditCard'><button className='buttonProceed'>Proceed Securely</button></Link>
                <div className='add-card'>
                   <Link to='#'><p>Add New Card</p></Link> 
                </div>
                <div className='change-method'>
                    <img src={LoadingPaymentMethod} alt='' />
                    <Link to='#'><span>Change Payment Method</span></Link>
                </div>
            </div>
            {/* <div className='titleCloseBtn'>
                <button>
                    X
                </button>
            </div>
            <div className='title'>
                <h1>Make Payment</h1>
                <form>
                    <div className='credit_cards-input'>
                        <input 
                            className=''
                            type='tel'
                            name='number'
                            placeholder='Enter card number'
                            // value={number}
                        />
                    </div>
                    <div className='credit_cards-input'>
                        <input 
                            className=''
                            type='text'
                            name='name'
                            placeholder='Name'
                            // value={number}
                        />
                    </div>
                    <div className='credit_cards-input'>
                        <input 
                            className=''
                            type='text'
                            name='expiry'
                            placeholder='MM/YY Expiry'
                            // value={number}
                        />
                    </div>
                    <div className='credit_cards-input'>
                        <input 
                            className=''
                            type='tel'
                            name='cvc'
                            placeholder='CVC'
                            // value={number}
                        />
                    </div>
                    
                    
                  
                </form>
            </div>
            <div className='cardForm'>

            </div>
            <div className='footer'>
                <button>
                    Cancel
                </button>
                <button>Continue</button>
            </div> */}
            
        </div>
    
    </div>
  )
}

export default CardPaymentModal
