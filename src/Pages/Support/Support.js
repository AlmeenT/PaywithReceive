import React, {useState} from 'react'
import Footer from '../../Components/Footer/Footer'
import MainNav from '../../Components/Main Nav/MainNav'
import './Support.css'
import Assist from '../../Assets/Images/support.png'
import search from '../../Assets/Images/search.png'
import touch from '../../Assets/Images/touch.png'
import suggest from '../../Assets/Images/suggest.png'
import api from '../../Assets/Images/api.png'
import guide from '../../Assets/Images/guide.png'
import Search from '../../Components/Search/Search'
import Touch from '../../Components/Touch/Touch'
import Suggest from '../../Components/Suggest/Suggest'
import APIdoc from '../../Components/API doc/APIdoc'

const Support = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='main'>
        <MainNav />
        <img className='call' alt='' src={Assist} />
        <h1 className='mainHead'>Support</h1>
            <div className='supportContainer'>
                <div className='otherContainer'>
                    <div className='iconContainer'><img className='supportIcon' alt='' src={search}/></div>
                    <h2 className='supportIntro'> Search the help desk</h2>
                    <p className='sp'>Get quick answers to any questions about Receive</p>
                    <button className='Sbutton' onClick={()=> setShow(true)}>find answer</button>
                    <Search onClose={() => setShow(false)} show={show} />
                </div>
                <div className='otherContainer'>
                    <div className='iconContainer'><img className='supportIcon1' alt='' src={touch}/></div>
                    <h2 className='supportIntro'> Get in touch</h2>
                    <p className='sp'>Send us a message or chat when someone is available</p>
                    <button className='Sbutton' onClick={()=> setShow(true)}>contact us</button>
                    <Touch onClose={() => setShow(false)} show={show}/>
                </div>
                <div className='otherContainer'>
                    <div className='iconContainer'><img className='supportIcon' alt='' src={suggest}/></div>
                    <h2 className='supportIntro'> Suggest an improvement</h2>
                    <p className='sp'>If you spot something that can be better, let us know</p>
                    <button className='Sbutton' onClick={()=> setShow(true)}>make a suggestion</button>
                    <Suggest onClose={() => setShow(false)} show={show}/>
                </div>
                <div className='otherContainer'>
                    <div className='iconContainer'><img className='supportIcon2' alt='' src={api}/></div>
                    <h2 className='supportIntro'> API Documemtation </h2>
                    <p className='sp'>Learn how to build amaxing things with the receive API</p>
                    <button className='Sbutton' onClick={()=> setShow(true)}>read docs</button>
                    <APIdoc onClose={() => setShow(false)} show={show}/>
                </div>
                <div className='otherContainer'>
                    <div className='iconContainer'><img className='supportIcon2' alt='' src={guide}/></div>
                    <h2 className='supportIntro'> Set up Guide</h2>
                    <p className='sp'>Learn how to integrate Receive with your business</p>
                    <button className='Sbutton'>show me</button>
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Support