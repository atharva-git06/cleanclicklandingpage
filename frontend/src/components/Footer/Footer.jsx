import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Side: Tagline */}
        <div className="footer-left">
          <p className="footer-tagline">
            <img src="/images/spark.png" alt="sparkle" className="sparkle-icon" />
            we’re a <span className="italic-bold">community-led</span><br />
            <span className="bold">AI-powered platform for</span><br />
            <span className="italic-bold-2">clean living.</span>
          </p>
        </div>

        {/* Right Side: Newsletter and Social */}
        <div className="footer-right">
          <label htmlFor="newsletter" className="newsletter-label">
            sign up to our newsletter:
          </label>
          <input
            type="text"
            id="newsletter"
            placeholder="Enter your email"
            className="newsletter-input"
          />

          <div className="social-footer">
        <p className="footer-tags-p" style={{ fontWeight: 'bold' }}>stay in the loop</p>
        <img src="/images/arrow.png" alt="arrow" className="footer-arrow" />
        <div className="footer-tags">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            tiktok
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            youtube
          </a>
        </div>
      </div>
          <p className="email-link">📧 hello@cleanclick.com</p>
        </div>
      </div>

      <p className="copy">copyright CleanClick 2025</p>
    </footer>
  );
};

export default Footer;
