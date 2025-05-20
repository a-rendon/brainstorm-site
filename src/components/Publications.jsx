<<<<<<< HEAD
import React from 'react';
import posterImage from '../styles/test poster.jpg'; // Add your image here

const Publications = () => {
  return (
    <section className="symposium-section">
      <div className="container">
        <div className="section-title">
          <h3>Research Symposium Project</h3>
          <p>Our work presented at the 2025 Undergraduate Research Symposium</p>
        </div>

        <div className="symposium-content">
          <div className="poster-image">
            <img src={posterImage} alt="Symposium Poster" />
          </div>
          <div className="poster-details">
            <h4 className="poster-title">Salesperson-Product Matching Recommender System</h4>
            <p>
              This project explores intelligent assignment models to pair salespeople with products
              based on lead attributes, performance history, and contextual match. We presented this work 
              as part of our ongoing research under the UR2PhD initiative, applying AI to real-world business strategy.
            </p>
            <a href="/path-to-pdf.pdf" target="_blank" rel="noopener noreferrer" className="secondary-button">
              View Full Poster (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
=======
import React from 'react';
import posterImage from '../styles/test poster.jpg'; // Add your image here

const Publications = () => {
  return (
    <section className="symposium-section">
      <div className="container">
        <div className="section-title">
          <h3>Research Symposium Project</h3>
          <p>Our work presented at the 2025 Undergraduate Research Symposium</p>
        </div>

        <div className="symposium-content">
          <div className="poster-image">
            <img src={posterImage} alt="Symposium Poster" />
          </div>
          <div className="poster-details">
            <h4 className="poster-title">Salesperson-Product Matching Recommender System</h4>
            <p>
              This project explores intelligent assignment models to pair salespeople with products
              based on lead attributes, performance history, and contextual match. We presented this work 
              as part of our ongoing research under the UR2PhD initiative, applying AI to real-world business strategy.
            </p>
            <a href="/path-to-pdf.pdf" target="_blank" rel="noopener noreferrer" className="secondary-button">
              View Full Poster (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
>>>>>>> b73328d27004a5a1b2672bd98b4ae38b2a781449
