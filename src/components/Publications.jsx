import React from 'react';
import demoVideo from '../styles/Demo1_2.mp4'; 

const Publications = () => {
  return (
    <section className="symposium-section">
      <div className="container">
        <div className="section-title">
          <h3>Early Preview of our Software</h3>
          <p>While still a work in progress we have made advances worth sharing.</p>
        </div>

        <div className="symposium-content">
          <div className="poster-image">
            <video
              src={demoVideo}
              className="symposium-video"
              muted
              loop
              playsInline
              preload="auto"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
          <div className="poster-details">
            <h4 className="poster-title">A Feedback Loop Between Focus and Play</h4>
            <p>
  As the user’s focus increases, the game gradually slows down and stabilizes 
  in speed, creating a calmer, more controlled experience. Conversely, when 
  focus decreases, the game accelerates, introducing more difficulty to encourage
  re-engagement and help users regain control. The penalty for losing, a mandatory 
  five-second delay before restarting, reinforces the incentive to stay focused by 
  making in-game time more valuable and emphasizing the importance of sustained attention.
  <br></br>
  <br></br>
  To play the video, hover your mouse over the paused video, or click the button below to see the video up close.           
</p>

            <a href="https://drive.google.com/file/d/1Nd7LwYDFhoFu7Tc5R5HLdtHrNPhIBObC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="secondary-button">
              View Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
