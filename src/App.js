import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Company from './components/Company/Company';


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicesandsolutions" element={<Services/>} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
