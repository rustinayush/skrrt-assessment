import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-heading">
        <h1 style={{marginRight:"50px"}}>The Grand Cruise</h1>
      </div>
      <div className="footer-icons" >
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <YouTubeIcon />
        </a>
      </div>
      <div className="footer-links" style={{marginRight:"50px",marginLeft:"50px"}}>
        <a href="#">Help</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Refund Policy</a>
      </div>
      <div className="footer-subscribe">
        <p>Stay in Touch</p>
        <input type="email" placeholder="Enter email" />
        <label>
          <input type="checkbox" />
          I have read and accepted The Grand Cruise privacy policy.
        </label>
        <button>Join Now</button>
      </div>
      <div className="footer-line"></div>
      <div className="footer-copyright">
        <p>&copy; 2023 The Grand Cruise RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
