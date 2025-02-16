import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import FeatureSection from './Components/FeatureSection';


const App=()=> {
  return (
    <div>
     <Navbar/>
     <div className='max-w-7xl mx-auto pt-20 px-6'>
     <Herosection/>
     <FeatureSection/>
     </div>
    </div>
  )
}

export default App; 
