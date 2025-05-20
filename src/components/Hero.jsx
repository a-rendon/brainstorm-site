import React from 'react';

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
            <div className="hero-image-placeholder">
              [Brain Health Illustration]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;