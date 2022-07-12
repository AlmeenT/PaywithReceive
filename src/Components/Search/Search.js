import React, {useEffect} from 'react'
import './Search.css'
import searchpic from '../../Assets/Images/smallsearch.png'
import searchchat from '../../Assets/Images/smallchat.png'

const Search = props => {
    if (!props.show){
        return null
    }
    
    

  return (
    <div className='searchModal'>
        <div className='searchContent'>
            <div className='searchHeader'>
                <div className='searchForm'>
                    <img className='searchicon' alt='' src={searchpic}/>
                    <input className='searchBox' placeholder='Find answers'/>
                </div>
                <div className='contactDiv'>
                    <img className='smallchat' alt='' src={searchchat}/>
                    <h3 className='chatText'>Contact us</h3>
                </div>
                <span><button onClick={props.onClose} className='ml-8 text-white'>&times;</button></span>
            </div>
            <div className='searchBody'>
                <div className='mt-4'>
                    <h3 className='text-xl text-blue-700 text-left ml-9'>How do I change the email address on my cutomer's receipt?</h3>
                    <p className='mt-1 text-sm ml-9 mr-5 text-left text-gray-400'>If a customer has an issue with a payment they made to your business, they will need to contact our support team. Customers can reach you by sending an email to the email address on their payment receipt</p>
                </div>
                <div className='ml-10 h-0.5 relative top-5 w-96  bg-gray-300'></div>
                <div className='mt-10'>
                    <h3 className='text-xl text-blue-700 text-left ml-9'>How do I change the email address on my cutomer's receipt?</h3>
                    <p className='mt-1 text-sm ml-9 mr-5 text-left text-gray-400'>If a customer has an issue with a payment they made to your business, they will need to contact our support team. Customers can reach you by sending an email to the email address on their payment receipt</p>
                </div>
                <div className='ml-10 h-0.5 relative top-5 w-96  bg-gray-300'></div>
                <div className='mt-10'>
                    <h3 className='text-xl text-blue-700 text-left ml-9'>How do I change the email address on my cutomer's receipt?</h3>
                    <p className='mt-1 text-sm ml-9 mr-5 text-left text-gray-400'>If a customer has an issue with a payment they made to your business, they will need to contact our support team. Customers can reach you by sending an email to the email address on their payment receipt</p>
                </div>
            </div>
            <div className='searchFooter'>

            </div>
        </div>
    </div>
  )
}

export default Search