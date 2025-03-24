// Import necessary modules
import React from 'react';
import './Home.css';
import CS from '../../components/CS/CS';
import Navbar from '../../navbar';
import Footer from '../../footer';
function HomePage() {
  return (
    <div className="App">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={`${process.env.PUBLIC_URL}/recording1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="content">
        <section className="hero">
          <h1>Leukemia and Lymphoma Society</h1>
          <h3>
            Our mission at the Leukemia and Lymphoma Society (LLS) is to raise awareness about blood cancers and engage as many college students as possible in our efforts. There are countless ways to get involved, and we welcome students from all majors and backgrounds. No matter your skill set, we have opportunities for you to contribute and make a meaningful impact in the fight against blood cancer.
          </h3>
          
        </section>
        

       

        
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
