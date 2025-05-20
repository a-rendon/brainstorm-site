import React from 'react';

const Services = () => {
  return (
    <section className="features" id="services">
      <div className="container">
        <div className="section-title">
          <h3>Our Work</h3>
          <p>Comprehensive solutions designed to support and enhance the future of cognitive wellbeing</p>
        </div>
        
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h4>Neuroadaptive Gameplay</h4>
            <p>Our VR games adapt in real-time to your brainwaves—encouraging focus by adjusting game speed and difficulty based on your cognitive state.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <h4>Personalized Focus Training</h4>
            <p>Using EEG-enabled VR headstraps, we deliver at-home neurofeedback therapy tailored to your focus patterns and in-game performance data.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h4>Cognitive Insights</h4>
            <p>Track your mental performance over time through engaging gameplay, with feedback rooted in real neurodata, no clinic visits required.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;