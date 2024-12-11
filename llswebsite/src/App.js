// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home'; // Import HomePage
import CS from './components/CS/CS'; // Import HelloPage (CS Page)
import About from './components/About/About'; // Import HelloPage (CS Page)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/CS" element={<CS />} /> {/* CS Page */}
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
