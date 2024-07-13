import React from "react";
import './Footer.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import FontAwesome icons
import logo from '../../assets/skplogo.png';

export default function Footer() {
  return (
    <>
      <div className="footerbg">
        <div className="upperdiv">
          <div className="skplogoo">
            <img src={logo} alt="SKP Developers Logo" />
          </div>
          <div className="navigation">
            <div className="headingF">Navigation</div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Jobs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="myservices">
            <div className="headingF">My Services</div>
            <ul>
              <li>Web Designing</li>
              <li>App Development</li>
              <li>UI/UX design</li>
              <li>AI</li>
              <li>Hacking</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="contactinfo">
            <div className="headingF">Contact Info</div>
            <ul>
              <li>
                <a href="mailto:muqeemnaeem777@gmail.com">
                  <FaEnvelope /> :
                  <div>info@skpdevelopers.com</div>
                </a>
              </li>
              <li>
                <a href="tel:+923349878084">
                  <FaPhone /> :
                  <div>+92 334 9878 084</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="locat">
            <div className="headingF">Locations</div>
            <ul>
              <li>Ghazni Road, Sheikhupura</li>
              <li>College Road, Lahore</li>
              <li>Faisal Town, Lahore</li>
            </ul>
          </div>
        </div>
        <div className="lowerdiv">
          <div className="copy">
            <div className="rights">
              <p>© 2024 SKP Developers all rights reserved.</p>
            </div>
            <div className="links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/security">Security</a>
              <a href="/terms-of-services">Terms of services</a>
            </div>
            <div className="social">
              <a href="https://linkedin.com">
                <FaLinkedin size={20} />
              </a>
              <a href="https://facebook.com">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
