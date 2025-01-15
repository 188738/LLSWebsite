import React from "react";
import Navbar from "../../navbar"; // Adjust path based on your project structure
import Footer from "../../footer"; // Adjust path based on your project structure
import './ATECH.css'; // Optional: Add specific styles for the ATECH page

function ATECH() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Navbar />
      <h1>Welcome to ATECH</h1>
      <p>
        ATECH is all about innovative solutions, cutting-edge technology, and making the world a better place through engineering and technology.
      </p>
      <Footer />
    </div>
  );
}

export default ATECH;
