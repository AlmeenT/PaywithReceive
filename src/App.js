import './App.css';
import {Routes, Route} from 'react-router-dom'
import Yome from './Pages/Onboarding/Yome.js';
import Onboarding0 from './Pages/Onboarding/Onboarding0';
import Onboarding from './Pages/Onboarding/Onboarding';
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



function App() {
  
  
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Onboarding />} />
          <Route path="/onboarding0" element={<Onboarding0 />} />
          <Route path="/signupLogin" element={<SignupOption />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupDetails" element={<SignupDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/busDetails2" element={<BusinessDetails2 />} />
          <Route path="/busDetails4" element={<BusinessDetails4 />} />
          <Route path="/busDetails5" element={<BusinessDetails5 />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
    </div>
  );
}
export default App;
