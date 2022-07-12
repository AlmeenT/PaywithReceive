import React from 'react'
import './Suggest.css'

const Suggest = props => {
    if (!props.show){
        return null
    }
    
  return (
    <div className='searchModal'>
        <div className='searchContent'>
            <div className='searchHeader'>
                <h1 className='text-white font-medium text-3xl ml-20 mt-5'> Suggest an improvement </h1>              
                <span><button onClick={props.onClose} className='ml-14 text-white'>&times;</button></span>
            </div>
            <div className='searchBody'>
              <form className='space-y-3 mt-6'>
                <div >
                  <label className='text-black text-xl font-semibold -ml-72'>Product Category</label>
                  <select className='block border-solid border-2 border-gray-400 w-80 h-10 ml-5 mt-1' name='--choose--' id='--choose'>
                    <option>--choose--</option>
                    <option>simple</option>
                    <option>plc</option>
                    <option>sole proprietorship</option>
                  </select>
                </div>
                <div>
                  <label className='text-black text-xl font-semibold -ml-96'>Urgency</label>
                  <select className='block border-solid border-2 border-gray-400 w-80 h-10 ml-5 mt-1' name='--choose--' id='--choose'>
                    <option>--choose--</option>
                    <option>sharp sharp</option>
                    <option>slow slow</option>
                    <option>anyhow</option>
                  </select>
                </div>
                <div>
                  <label className='text-black text-xl font-semibold -ml-96'>Title</label>
                  <input className='block border-solid border-2 border-gray-400 w-80 h-10 ml-5 mt-1'/>
                </div>
                <div>
                  <label className='text-black text-xl font-semibold -ml-80'>Description</label>
                  <input className='block border-solid rounded-br-3xl border-2 border-gray-400 w-80 h-24 ml-5 mt-1'/>
                </div>
              </form>
            </div>
            <div className='w-100 h-1 bg-blue-800 mt-5'></div>
            <div className='searchFooter space-x-48 ml-24 mt-2'>
              <button  onClick={props.onClose} className='border-solid border-2 border-blue-900 w-16 border-radius -ml-32 text-xs rounded-lg'>Close</button>
              <button className='bg-blue-900 w-32 border-radius  rounded-lg text-white text-xs'>Request feature</button>
            </div>
        </div>
    </div>
  )
}

export default Suggest