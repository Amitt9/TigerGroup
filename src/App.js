import React, {useState , useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
