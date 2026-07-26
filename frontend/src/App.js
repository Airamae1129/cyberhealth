import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* Automatically scrolls to top on every page change */}
        <ScrollToTop />

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;