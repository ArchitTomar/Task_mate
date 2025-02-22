import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./LandingPage/Navbar";
import Herosection from "./LandingPage/Herosection";
import FeatureSection from "./LandingPage/FeatureSection";
import Workflow from "./LandingPage/Workflow";
import Footer from "./LandingPage/Footer";
import HomePage from "./Home/homepage";
import Create from "./Home/Create";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./LoginPage/SignupPage";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection />
        <FeatureSection />
        <Workflow />
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* Root route fixed */}
        <Route path="/HomePage" element={<HomePage />} /> 
        <Route path="/LoginPage" element={<LoginPage />} /> 
        <Route path="/Create" element={<Create />} /> 
        <Route path="/SignupPage" element={<SignupPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
