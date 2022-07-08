import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import SignupOption from './Pages/Signup Option/SignupOption';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import SignupDetails from './Pages/Signup Details/SignupDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import ForgotPassword from './Pages/Forgot Password/ForgotPassword';
import BusinessDetails2 from './Pages/Business Details2/BusinessDetails2';
import BusinessDetails4 from './Pages/Business Details4/BusinessDetails4';
import BusinessDetails5 from './Pages/Business Details5/BusinessDetails5';
import Navbar from './Components/navbar/Navbar'
import { useLocation } from 'react-router-dom';
import Sidebar from './Components/sidebar/Sidebar';
import Transaction from './Pages/Transaction/Transaction';
import MyAccount from './Pages/MyAccount/MyAccount';
import Payment from "./Pages/Payment/Payment"
import ContactUs from "./Pages/ContactUs/ContactUs"
import DeveloperCode from "./Pages/DeveloperCode/DeveloperCode"
import Services from "./Pages/Services/Services";
import AccountSettings from "./Pages/AccountSettings/AccountSettings"
import Home from './Pages/Home/Home'
import Support from './Pages/Support/Support';
import AboutUs from './Pages/About us/AboutUs';
import API from "./Pages/AccountSettings/API"
import Compilance from "./Pages/AccountSettings/Compilance"
import Payout from "./Pages/AccountSettings/Payout"
import Profile from "./Pages/AccountSettings/Profile"



function App() {
  const location=useLocation()
 console.log(location)
  return (
    <div className="App">
      {(location.pathname==="/dashboard" || location.pathname==="/transaction" || location.pathname==="/myAccount" || location.pathname==="/payment" || location.pathname==="/contactUs"|| location.pathname==="/developerCode"|| location.pathname==="/services"|| location.pathname==="/accountSettings")&&(<><Navbar /><Sidebar/></>)}

        {/*setup for account settings in the side bar*/}     
       {(location.pathname==="/profile" || location.pathname==="/api" || location.pathname==="/compilance" || location.pathname==="/payout" )&&(<><Navbar /><Sidebar/><AccountSettings /></>)}

<Routes>
<Route path="/" element={<Home />} />
<Route path="/sidebar" element={<Sidebar />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/support" element={<Support />} />
<Route path="/signupLogin" element={<SignupOption />} />
<Route path="/signup" element={<Signup />} />
<Route path="/signupDetails" element={<SignupDetails />} />
<Route path="/login" element={<Login />} />
<Route path="/forgotPassword" element={<ForgotPassword />} />
<Route path="/busDetails2" element={<BusinessDetails2 />} />
<Route path="/busDetails4" element={<BusinessDetails4 />} />
<Route path="/busDetails5" element={<BusinessDetails5 />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/payment" element={<Payment />} />
<Route path="/transaction" element={<Transaction />} />
<Route path="/myAccount" element={<MyAccount />} />
<Route path="/contactUs" element={<ContactUs />} />
<Route path="/services" element={<Services />} />
<Route path="/developerCode" element={<DeveloperCode />} />
<Route path="/accountSettings" element={<AccountSettings/>} />
<Route path="/payout" element={<Payout/>} />
<Route path="/compilance" element={<Compilance/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/api" element={<API/>} />
</Routes>



<div>
    
{(location.pathname==="/" || location.pathname==="/onboarding0" || location.pathname==="/signupLogin" || location.pathname==="/signup" || location.pathname==="/signupDetails"|| location.pathname==="/login"|| location.pathname==="/forgotPassword"|| location.pathname==="/busDetails2" || location.pathname==="/busDetails4" || location.pathname==="/busDetails5")&&(<><Footer/></>)}
</div>
    </div>
  );
}
export default App;

