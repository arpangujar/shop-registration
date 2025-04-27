import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';
import ShopRegistration from './components/ShopRegistration';
import ShopList from './components/ShopList';
import Navbar from './components/Navbar';

function App() {
  // Manage shops state here
  const [shops, setShops] = useState([]);

  // Add shop to the list (on successful registration)
  const addShop = (shopData) => {
    setShops([...shops, shopData]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/register" element={<ShopRegistration addShop={addShop} />} />
        <Route path="/shops" element={<ShopList shops={shops} />} />
      </Routes>
    </Router>
  );
}

export default App;
