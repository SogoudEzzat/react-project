import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Navber from './components/Navber';
import Welcome from './pages/Welcome'; 
import CheckoutPage from './pages/CheckoutPage'; 


function App() {
  return (
    <Router>
      <Navber />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Welcome />} />  
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="//checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
