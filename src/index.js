import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Hero from './Hero';
import LogoTicker from './LogoTicker';
import Product from './Product';

ReactDOM.createRoot(document.getElementById('root')).render(<div>
    <Navbar></Navbar>
    <Hero></Hero>
    <LogoTicker></LogoTicker>
    <Product></Product>
</div>)