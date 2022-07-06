import React,{useState} from 'react'
import Navbar from '../../Components/navbar/Navbar'
import NavPopUp from '../../Components/navPopUp/NavPopUp'
// import NavPopUpList from '../../Components/navPopUp/NavPopUpList'
import './Dashboard.css'

const Dashboard = () => {
  const [clickNav,setClickNav] = useState(false)
  return (
    <div>
        <Navbar clickNav={clickNav} setClickNav={setClickNav} />
        <NavPopUp clickNav={clickNav} setClickNav={setClickNav}/>
    </div>
  )
}

export default Dashboard