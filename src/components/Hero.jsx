import React from 'react';
import happyImage from '../styles/happy.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Better Brain Health for Everyone</h2>
            <p>Accessible, engaging, and effective: Brainstorm uses VR games to deliver neurofeedback that helps you sharpen focus and build calm—no clinic required.</p>
            <a href="#services" className="cta-button">Explore Our Work</a>
          </div>
          <div className="hero-image">
  <div className="hero-image-cover">
    <img src={happyImage} alt="Smiling person representing brain health" className="hero-img" />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
