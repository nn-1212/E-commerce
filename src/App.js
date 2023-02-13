// import logo from './logo.svg';
// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

import React from 'react'
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Slider
 from './components/Slider';

function App() {
  return (
    
      <div className="App">
        <Announcement/>
        <Navbar />
        <Slider/>

    </div>
  );
}

export default App;
