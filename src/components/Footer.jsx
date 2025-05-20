import React from 'react';
import logo from '../styles/brainstorm logo.png';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
          <div className="footer-logo">
              <img src={logo} alt="Brainstorm Logo" className="footer-logo-icon" /> 
              <h3>Brainstorm</h3>
            </div>          
          
          <p>Empowering individuals to achieve optimal brain health through evidence-based, accessible solutions.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Work</a></li>
              <li><a href="#about">About Us</a></li>
            {/*  <li><a href="#resources">Resources</a></li>*/}
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
{/*
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Cognitive Assessment</a></li>
              <li><a href="#">Brain Training</a></li>
              <li><a href="#">Nutrition Consulting</a></li>
              <li><a href="#">Workshops & Webinars</a></li>
              <li><a href="#">Corporate Programs</a></li>
            </ul>
          </div>
  */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <Phone size={18} />
              <span>(630) 863-9144</span>
            </div>
            <div className="contact-info">
              <Mail size={18} />
              <span>brainstorm.vrneurofeedback@gmail.com</span>
            </div>
            <div className="contact-info">
              <MapPin size={18} />
              <span>Remote - Based in Illinois, USA</span>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2025 Brainstorm. All Rights Reserved.  |  Website Designed by{' '}
        <a
        href="https://www.linkedin.com/in/alexia-rendon"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight-ar"
      >
    Alexia Rendon
  </a>
</p>
          { /* <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
  </div>   */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
