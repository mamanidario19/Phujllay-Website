import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header>
        <h1>Acerca del juego</h1>
      </header>
      <section className="synopsis-section">
        <h2>Historia del Juego</h2>
        <p>Aquí va la sinopsis del juego...</p>
      </section>
      <section className="features-section">
        <h2>Características principales</h2>
        <div className="feature-box">
          <p>Aquí van las características del juego...</p>
        </div>
        <div className="feature-box">
          <p>Aquí van las características del juego...</p>
        </div>
        <div className="feature-box">
          <p>Aquí van las características del juego...</p>
        </div>
      </section>
    </div>
  );
};

export default About;