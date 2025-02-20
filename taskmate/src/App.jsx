import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './LandingPage/Navbar';
import Herosection from './LandingPage/Herosection';
import FeatureSection from './LandingPage/FeatureSection';
import Workflow from './LandingPage/Workflow';
import Footer from './LandingPage/Footer';
import HomePage from './Home/homepage';


const App=()=> {
  return (
    <div>
     <Navbar/>
     <div className='max-w-7xl mx-auto pt-20 px-6'>
     <Herosection/>
     <FeatureSection/>
     <Workflow/>
   
     </div>
          <Footer/>
          <div>
          <Routes>
          < Route path="/homepage" element={<Home/>} />
          </Routes>
          </div>
    </div>
  )
}

export default App; 
