import React from 'react'
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import Service from './components/Service.jsx';

const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutUs/>
      <Service/>
      <Footer/>
      
    </div>
  )
}

export default Layout;
