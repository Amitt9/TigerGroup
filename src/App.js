import React, {useState , useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import Layout from './Layout';

function App() {

  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          {/* <Route path="/aboutus" element={<AboutUs/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
