// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home'; // Import HomePage
import CS from './components/CS/CS'; // Import CS Page
import JSOM from './components/JSOM/JSOM'; // Import JSOM Page
import About from './components/About/About'; // Import About Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/CS" element={<CS />} /> {/* CS Page */}
        <Route path="/JSOM" element={<JSOM />} /> {/* JSOM Page */}
        <Route path="/About" element={<About />} /> {/* About Page */}
      </Routes>
    </Router>
  );
}

export default App;

