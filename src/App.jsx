
import './App.css'
import { Homepage } from './component/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPage2 from './component/PricingPage2';
import Header from './component/Header';
import Footer from './component/Footer';
import ContactForm from './component/ContactForm';

function App() {

  return (
    <>

   <Router>
   <Header/>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />
        {/* Pricing Page Route */}
        <Route path="/pricing" element={<PricingPage2 />} />


      </Routes>
      <Footer/>

    </Router>
    </>
  )
}

export default App
