import React from 'react';

const Resources = () => {
  return (
    <section className="resources" id="resources">
      <div className="container">
        <div className="section-title">
          <h3>Resources</h3>
          <p>Free educational materials to help you understand and improve your brain health</p>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h4>Brain Health Guide</h4>
            <p>Download our comprehensive guide on maintaining optimal brain health through all stages of life.</p>
            <a href="#" className="secondary-button">Download</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h4>Webinar Series</h4>
            <p>Watch our educational webinars covering topics from sleep and cognition to nutrition for brain health.</p>
            <a href="#" className="secondary-button">Watch Now</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h4>Self-Assessment Tool</h4>
            <p>Try our quick online assessment to get personalized recommendations for your brain health journey.</p>
            <a href="#" className="secondary-button">Start Assessment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
