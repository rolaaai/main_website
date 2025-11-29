import React from "react";
import { Linkedin, Twitter, Mail, Instagram, Github } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Upper Card with CTA */}
        <div className="footer-upper-card">
          <div className="get-started-content">
            <div className="get-started-text">
              <h3>Ready to transform your workflow?</h3>
              <p>
                Join thousands using Rolaa.ai to boost productivity and
                streamline their workflow.
              </p>
            </div>
            <div className="get-started-action">
              <button
                className="cta-button get-started-btn"
                onClick={() =>
                  (window.location.href = "mailto:contact@rolaa.ai")
                }
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="grid-background"></div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-column footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Rolaa.ai</span>
            </div>
            <p className="footer-tagline">
              Intelligent automation made simple for modern businesses.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/rolaa-ai/"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              {/* <a
                href="https://github.com/rolaaai"
                className="social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a> */}
            </div>
          </div>

          {/* Product Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li>
                <a href="#creative-services" className="footer-link">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Journey
                </a>
              </li>
              <li>
                <a href="#roadmap" className="footer-link">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#story" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:contact@rolaa.ai" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          {/* <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div> */}

          {/* Legal Column */}
          {/* <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Licenses
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 Rolaa.ai. All rights reserved.
          </p>
        </div>

        {/* Managed by Rolaa Section */}
        {/* <div className="managed-by-section">
          <div className="managed-divider"></div>
          <div className="managed-content">
            <p className="managed-label">Managed by</p>
            <h3 className="managed-brand">Rolaa.AI</h3>
            <p className="managed-tagline">
              Empowering creators with innovative solutions
            </p>
            <div className="managed-contact">
              <a
                href="mailto:rolaa.ai12345@gmail.com"
                className="managed-email"
              >
                <Mail size={16} />
                rolaa.ai12345@gmail.com
              </a>
              <div className="managed-social">
                <a
                  href="https://twitter.com/rolaa"
                  className="managed-social-link"
                  aria-label="Rolaa Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/rolaa-ai/?viewAsMember=true"
                  className="managed-social-link"
                  aria-label="Rolaa LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/rolaa_ai/"
                  className="managed-social-link"
                  aria-label="Rolaa Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://github.com/rolaaai"
                  className="managed-social-link"
                  aria-label="Rolaa GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
