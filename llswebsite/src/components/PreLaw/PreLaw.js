import React from "react";
import Navbar from "../../navbar"; // Ensure Navbar is correctly exported and imported
import Footer from "../../footer"; // Ensure Footer is correctly exported and imported
import './PreLaw.css';

function PreLaw() {
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <Navbar />
      <h1>This is Pre Law</h1>
      <Footer />
    </div>
  );
}

export default PreLaw;
