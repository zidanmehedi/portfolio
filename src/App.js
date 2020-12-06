import React from 'react';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Reset from './Reset';

function App() {
  
  return (
    <>
        <Reset/>
        <Navbar />
        <Home/>
        <About/>
        <Services/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
