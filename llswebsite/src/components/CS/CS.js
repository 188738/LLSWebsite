import React from 'react';
import Navbar from '../../navbar';
import Footer from '../../footer';
import Card from '../Card/Card';
import './CS.css';

function CS() {
  return (
    <div className="CS">
      <Navbar />
      <h1 className="header-for-ECS-page">ECS Opportunities</h1>
      <div className="card-container"> {/* Flex container for cards */}
        {/* Left Card */}
        <Card 
          className="card-left" 
          title="Prediction of Treatment Outcomes" 
          description={
            <ul>
              <li>Develop a predictive model to estimate the success rate of specific treatments like chemotherapy or bone marrow transplantation.</li>
              <li>Use patient history and medical conditions as key factors.</li>
              <li>Tech Stack: Python, PyTorch, NumPy.</li>
            </ul>
          }
        />
        
        {/* Middle Card */}
        <Card 
          className="card-middle" 
          title="Blood Cancer Detection using Machine Learning" 
          description={
            <ul>
              <li>Create a model to classify blood cancer types (e.g., leukemia, lymphoma) based on patient data.</li>
              <li>Use data such as blood test results or genetic data.</li>
              <li>Tech Stack: Python, scikit-learn, TensorFlow/Keras, pandas.</li>
            </ul>
          }
        />
        
        {/* Right Card */}
        <Card 
          className="card-right" 
          title="Risk Prediction for Family Members" 
          description={
            <ul>
              <li>Analyze genetic data and family history to predict the likelihood of blood cancer occurrence in family members.</li>
              <li>Tech Stack: Bioinformatics libraries like Biopython, machine learning.</li>
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default CS;