import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import FeatureSection from './Components/FeatureSection';
import Workflow from './Components/Workflow';  
import Footer from './Components/Footer';

//import { Workflow } from 'lucide-react';


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
    </div>
  )
}

export default App; 
