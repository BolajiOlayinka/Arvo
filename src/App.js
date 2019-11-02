import React from 'react';
import logo from './logo.png';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./Navbar";
import Banner from './Banner';
import Advert from './Advert';
import Testimonial from './Testimonial';
import FooterWrapper from './FooterWrapper';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
    <div className="bannerArea">
      <Navbar/>
      <Banner/>
      <Advert/>
      <Testimonial/>
      <FooterWrapper/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
