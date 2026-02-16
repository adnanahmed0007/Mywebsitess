 import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Myprojects from './Myprojects';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
             <Route path="/aboutme" element={<Myprojects />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
