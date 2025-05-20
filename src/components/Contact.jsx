import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-title">
          <h3>Contact Us</h3>
          <p>We're here to answer your questions and help you begin your brain health journey</p>
        </div>

        <div className="contact-wrapper">
          <div className="form-iframe-wrapper">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSevNWCKRHhLAvQyVQlS393yOK9W4OSpmQmcBADmv7Bba2CH8Q/viewform?usp=header"
              width="100%"
              height="310"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>

          <div className="contact-info-box">
            <h4>Get In Touch</h4>
            <div className="contact-detail">
              <Phone size={18} />
              <span>(630) 863-9144  </span>
            </div>
            <div className="contact-detail">
              <Mail size={18} />
              <span>brainstorm.vrneurofeedback@gmail.com</span>
            </div>
            <div className="contact-detail">
              <MapPin size={18} />
              <span>Remote - Based in Illinois, US</span>
            </div>
            <div className="contact-detail">
              <Calendar size={18} />
              <span>Mon-Fri: 9am-5pm</span>
            </div>
         {/*   <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
