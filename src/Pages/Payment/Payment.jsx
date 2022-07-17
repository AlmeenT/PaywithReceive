import React from 'react';
import { CardList } from '../../Components/Helper/CardList';
import CardItem from '../../Components/cardItem';
import { Link  } from 'react-router-dom';
import './payment.css'


import PaymentCard from '../../Assets/Images/card-payment.png';
import BankTransfer from '../../Assets/Images/Transfer-1 1.png';
import Crypto from '../../Assets/Images/crypto-1.png';
import USSDCODE from '../../Assets/Images/ussd.png';
import CardPaymentModal from '../../Components/Modal/CardPaymentModal/CardPaymentModal';

import { FaRegUser } from 'react-icons/fa'

const Payment = ({cardLists}) => {
  let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
 
  return (
    //please dont remove this lg:ml-[264px] mt-[100px] lg:mt-[112px] just write your own code in it. thank you
    <div className='lg:ml-[264px] mt-[100px] lg:mt-[112px]'>
      {/* write here */}
    <div className='ml-[10px] px-6'>
      {/* <h2> Payment</h2> */}

      <div className='profleContainer'>
        <div className='profileImg'><FaRegUser style={{height:'50%', width:'50%', margin:'10px'}}/></div>
        <div className='profileDetails'>
          {/* <h3>{ userDetails.username }</h3> */}
          <h2>Username</h2>
          <Link to='#'><span>View Profile</span></Link>
        </div>

      </div>
      <div className='card'>

        <div className='cardList'>
          <div className='cardItem'>
          <Link to='/card-payment-modal' className='btn'>
              <img src={ PaymentCard } alt='' />
              <span>Pay with card</span>
            </Link>
          
            
          </div>
          <div className='cardItem'>
            <Link to='/bank-transfer' className='btn'>
              <img src={ BankTransfer } alt='' />
              <span>Bank Transfer</span>
            </Link>
           
          </div>
          <div className='cardItem'>
            <Link to='/cryptocurrency' className='btn'>
              <img src={ Crypto } alt='' />
              <span>Cryptocurrency</span>
            </Link>
            
          </div>
          <div className='cardItem'>
            <Link to='/ussd-code' className='btn'>
              <img  src={ USSDCODE } alt='' />
              <span className='ussd'>ussd</span>
            </Link>
            
          </div>
        </div>

        {
          // cardLists && cardList.map((cardList) => 
          // <div className=''>
            
          //     <div className='card-images'>
          //       <img src={cardList.image} alt="" />
          //     </div>
          //     <p> {cardList.name} </p>
            
          // </div>
          // )
        }
        
        {/* <>
         <Link to={`${CardList.name}`}>
          <div className='cardList'>
            {CardList.map((cardItem, key) => 
              
              <CardItem 
                key={key}
                image={cardItem.image}
                tittle={cardItem.tittle}
                name={cardItem.name}
              />
            
            )} 
          </div>
          </Link>    
            
          
          
        </> */}
        {/* <CardPaymentModal /> */}
        <div className='payment-table'>
          <table className='table-content'>
              
              <tr>
                <th>Transaction ID</th>
                <th>Description</th>
                <th>Date</th>
                <th>Method</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            
            <br /><br /><br /><br />

              <tr>
                <td>R123456</td>
                <td>Received</td>
                <td>01/02/22</td>
                <td>Bank Transfer</td>
                <td>Successful</td>
                <td>20,000</td>
              </tr>
              <br /><br /><br /><br />

              <tr>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
              </tr>
              <br /><br /><br /><br />

              <tr>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
              </tr>
              <br /><br /><br /><br />

              <tr>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
                <td>R123456</td>
              </tr>
            
            
          
          </table>
          {/* <table>
            <tbody>
              <tr>
                <td>R123456</td>
              </tr>
            </tbody>
          </table> */}
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Payment