import React from 'react';
import {Route, Routes} from 'react-router-dom'

import './App.css';
import logo from './images/logo.png';
import Navbar from './components/Navbar/navbar.tsx';
import Home from './pages/HomePage/home.tsx';
import Store from './pages/StorePage/store.tsx';
import Cart from './pages/CartPage/cart.tsx';
import Shipping from './pages/ShippingPage/shipping.tsx';
import Account from './pages/AccountPage/account.tsx';
import About from './pages/AboutPage/about.tsx';
import DataFetching from './components/http/DataFetching.tsx';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
