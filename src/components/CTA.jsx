import React from 'react';

const CTA = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        {/*  <h3>Get Started Today</h3>
        <p>Take the first step toward a healthier brain and improved cognitive function with our personalized approach.</p> */}
        <h3>Like What You See?</h3>
        <p>Help us take the first step toward a healthier brain and improved cognitive function with our personalized approach.</p>

        
        <div className="cta-buttons">
{/*          <a href="#" className="cta-button">Schedule a Call</a> */} 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSevNWCKRHhLAvQyVQlS393yOK9W4OSpmQmcBADmv7Bba2CH8Q/viewform?usp=header" className="secondary-button">Schedule a Meeting</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
