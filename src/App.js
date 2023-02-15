// import logo from './logo.svg';
// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

import React from 'react'
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Slider from './components/Slider';
import Shop from './components/Shop';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="App">
        
        <Navbar />
        <Announcement/>
        <Slider/>
        <Shop/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  );
}

export default App;
