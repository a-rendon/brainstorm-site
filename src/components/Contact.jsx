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
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info-box">
            <h4>Get In Touch</h4>
            <div className="contact-detail">
              <Phone size={18} />
              <span>(123) 456-7890</span>
            </div>
            <div className="contact-detail">
              <Mail size={18} />
              <span>brainstorm.vrneurofeedback@gmail.com</span>
            </div>
            <div className="contact-detail">
              <MapPin size={18} />
              <span>123 Brain Street, Mindful City</span>
            </div>
            <div className="contact-detail">
              <Calendar size={18} />
              <span>Mon-Fri: 9am-5pm</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
