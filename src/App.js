import React, { useEffect } from 'react';
import './index';
import './App.css'; 
import './main.css';
import Jadoopage from './components/Jadoopage';
import 'bootstrap/dist/css/bootstrap.css';
import Herocloud from './assets/png/Herocloud.png'
import HeroSection from './components/HeroSection';
import Bestservices from './components/Bestservices';
import Topdestinations from './components/Topdestinations';
import Booknexttrip from './components/Booknexttrip';
import Aboutus from './components/Aboutus';
import Slidergrayscale from './components/Slidergrayscale';
import Latestnews from './components/Latestnews';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    AOS.init({once:true});
  }, [])
  return (
    <div className='position-relative overflow-hidden'>
      <img className='cloudImg w-40 ' src={Herocloud} alt="Cloud" />
      
      <Container>
        <Jadoopage />
        <HeroSection />
        <Bestservices />
        <Topdestinations />
        <Booknexttrip />
        < Aboutus />
        <Slidergrayscale/>
        <Latestnews />
        <Footer />

      </Container>
    </div>
  
  )
}

export default App;
