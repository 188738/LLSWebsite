// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home'; // Import HomePage
import CS from './components/CS/CS'; // Import CS Page
import JSOM from './components/JSOM/JSOM'; // Import JSOM Page
import PreHealth from './components/PreHealth/PreHealth';
import PreLaw from './components/PreLaw/PreLaw';
import ATECH from './components/ATECH/ATECH';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/CS" element={<CS />} /> {/* CS Page */}
        <Route path="/JSOM" element={<JSOM />} /> {/* JSOM Page */}
        <Route path="/PreHealth" element={<PreHealth />} /> {/* JSOM Page */}
        <Route path="/PreLaw" element={<PreLaw />} />
        <Route path="/ATECH" element={<ATECH />} /> {/* About Page */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

