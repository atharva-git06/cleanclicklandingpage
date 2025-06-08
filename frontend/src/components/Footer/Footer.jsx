import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-footer">
        <p>stay in the loop</p>
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
      <p className="copy">copyright CleanClick 2025</p>
    </footer>
  );
};

export default Footer;
