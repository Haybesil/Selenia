import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Features from './components/pages/features/Features';
import Contact from './components/pages/contact/Contact';

const App = () => {
  return (
    <div className="app background">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
