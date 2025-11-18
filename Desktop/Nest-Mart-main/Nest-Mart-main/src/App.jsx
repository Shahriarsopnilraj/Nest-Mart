import React from 'react';
import Navbar from './Layout/Navbar';
import Hero from './Layout/Hero';
import Alt from './Layout/Alt';
import Products from './Layout/Products';
import FourCards from './Layout/FourCards';
import Footer from './Layout/Footer';
import Banner from './Layout/Banner';

const App = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero/>
      <Alt/>
      <Products/>
      <FourCards/>
    </div>
  );
}

export default App;
