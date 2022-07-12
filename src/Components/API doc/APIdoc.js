import React from 'react'
import './APIdoc.css'
import searchpic from '../../Assets/Images/smallsearch.png'
import searchchat from '../../Assets/Images/smallchat.png'
import api from '../../Assets/Images/api.png'

const APIdoc = props => {
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
                <span><button onClick={props.onClose} className='ml-14 text-white'>&times;</button></span>
            </div>
            <div className='searchBody mt-10 space-y-6'>
              <h1 className='text-xl font-medium'>API Documemtation</h1>
              <div className='ml-40 w-40 h-40 rounded-full bg-blue-900'>
                <img className='relative left-8 top-8 w-24 h-24' alt='' src={api}/>
              </div>
              <h1 className='text-4xl font-bold'>Arriving soon</h1>
            </div>
        </div>
    </div>
  )
}



export default APIdoc