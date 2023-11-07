import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/porotofolio/src/Components/Home.js">Home</a></li>
            <li><a href="/porotofolio/src/Components/Pages/About.js">About Us</a></li>
            <li><a href="/porotofolio/src/Components/Services/Services.jsx">Services</a></li>
        
            <li><a href="/porotofolio/src/Components/Pages/Contact.js">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Street Name, City</p>
          <p><i className="fas fa-envelope"></i> info@example.com</p>
          <p><i className="fas fa-phone"></i> +1 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100044120594647&mibextid=2JQ9oc"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://instagram.com/__raju__1010__?igshid=OGQ5ZDc2ODk2ZA=="><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
