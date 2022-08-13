import React from 'react'
import './Touch.css'
import searchpic from '../../Assets/Images/smallsearch.png'
import searchchat from '../../Assets/Images/smallchat.png'
import mail from '../../Assets/Images/@.png'
import Tcall from '../../Assets/Images/tcall.png'
import Chat from '../../Assets/Images/chat.png'

const Touch = props => {
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
            <div className='searchBody mt-16 space-y-8'>
              <div className='flex ml-12 w-96 h-24 border-solid border-2 border-black'>
                <img alt='' src={mail} className='w-16 h-16 mt-4 ml-4'/>
                <div className='text-left'>
                  <h2 className='text-2xl font-bold'>Send an email</h2>
                  <h2 className='ml-10 -mt-9 text-black'>Get a response within hours</h2>
                </div>
              </div>
              <div className='flex ml-12 w-96 h-24 border-solid border-2 border-black'>
                <img alt='' src={Chat} className='w-16 h-16 mt-4 ml-4'/>
                <div className='text-left'>
                  <h2 className='text-2xl font-bold'>Chat with us</h2>
                  <h2 className='ml-14 -mt-9 text-black'>Get response within minutes</h2>
                </div>
              </div>
              <div className='flex ml-12 w-96 h-24 border-solid border-2 border-black'>
                <img alt='' src={Tcall} className='w-16 h-16 mt-4 ml-4'/>
                <div className='text-left'>
                  <h2 className='text-2xl font-bold mt-4 ml-14'>Call us</h2>
                </div>
              </div>
            </div>    
        </div>
    </div>
  )
}

export default Touch