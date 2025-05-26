import React from 'react';
import './HeaderTop.css';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon-circle">
          <img src="/Images/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-circle">
          <img src="/Images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="icon-circle">
          <img src="/Images/youtube.svg" alt="YouTube" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="icon-circle">
          <img src="/Images/tiktok.svg" alt="TikTok" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-circle">
          <img src="/Images/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
      <div className="contact-info">
        <span><img src="/Images/map-marker.svg" alt="Location" /> Kampus 2 YASMI : Jl. Tuparev / Islamic Center No. 1-3</span>
        <span><img src="/Images/envelope.svg" alt="Email" /> info@akpar.yasmicrb.ac.id</span>
        <span><img src="/Images/phone.svg" alt="Phone" /> (+62) 812-2339-4535</span>
      </div>
    </div>
  );
};

export default HeaderTop;
