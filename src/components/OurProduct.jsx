import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Video, Calendar, Shield } from "lucide-react";
import "./OurProduct.css";

const OurProduct = () => {
  return (
    <section id="our-product" className="our-product-section">
      <div className="our-product-container">
        <div className="our-product-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cs-section-title"
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            Our Product
          </motion.h2>
          {/* <p className="our-product-subtitle">
            Experience the future of meeting automation with Rolaa Bot.
          </p> */}
        </div>

        <div className="product-showcase">
          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="product-hero-card"
          >
            <div className="product-hero-content">
              <div className="product-badge">New Release</div>
              <h3 className="product-title">Rolaa Bot</h3>
              <p className="product-tagline">
                Your AI That Attends, Records, and Summarizes Every Meeting.
              </p>
              <p className="product-description">
                Never Miss a Meeting Again — Rolabot Joins, Records, and
                Delivers Insights. Turn Every Meeting Into Actionable Tasks —
                Automatically. Meetings Done for You — Capture, Transcribe,
                Analyze.
              </p>
              <a
                href="https://rolaa.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="product-cta-btn"
              >
                Try Rolaa Bot <ArrowRight size={20} />
              </a>
            </div>
            <div className="product-hero-visual">
              {/* Abstract visual representation of the bot */}
              <div className="bot-visual-circle">
                <div className="bot-core"></div>
                <div className="bot-ring ring-1"></div>
                <div className="bot-ring ring-2"></div>
                <div className="bot-ring ring-3"></div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="product-features-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                <Video size={24} />
              </div>
              <h4>Why Rolaa Bot?</h4>
              <p>
                <strong>AI agents for meetings and streams.</strong> An AI
                platform that records, transcribes, and automates workflows with
                custom agents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                <Calendar size={24} />
              </div>
              <h4>Your Meet URL</h4>
              <p>
                Rolaa Bot receives pasted meeting or stream URL, auto-detects
                the platform, validates access. It schedules the session, sets
                reminders, warms up infrastructure, and performs pre-join
                checks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="feature-card full-width"
            >
              <div className="feature-content-split">
                <div className="feature-text">
                  <div className="feature-icon-wrapper">
                    <Shield size={24} />
                  </div>
                  <h4>Our Approach</h4>
                  <p className="highlight-text">
                    Let's make software for creators.
                  </p>
                  <p>
                    We believe recording software should be invisible. It should
                    help you create amazing content without getting in your way.
                    It should be intuitive, fast, and reliable.
                  </p>
                  <ul className="feature-list">
                    <li>
                      <CheckCircle size={16} /> No complex interfaces
                    </li>
                    <li>
                      <CheckCircle size={16} /> No file format worries
                    </li>
                    <li>
                      <CheckCircle size={16} /> Pure, simple recording power
                    </li>
                  </ul>
                </div>
                <div className="feature-quote">
                  <blockquote>
                    "Maximize your results while minimizing constraints with our
                    solutions."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
