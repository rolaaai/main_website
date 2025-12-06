import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PastWork.css";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    shortDescription:
      "A comprehensive financial analytics platform for enterprise clients.",
    longDescription:
      "We built a high-performance financial dashboard that aggregates data from multiple sources in real-time. The challenge was to process millions of data points without compromising on UI responsiveness. We utilized WebSockets for real-time updates and a custom charting library for visualization.",
    deliveryTime: "3 Months",
    timeToMake: "12 Weeks",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    customerReview:
      "The team at Rola.ai delivered beyond our expectations. The dashboard is not only fast but also incredibly intuitive. It has transformed how we analyze our financial data.",
    liveLink: "#",
    videoPreview:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Using image as placeholder for video
  },
  {
    id: 2,
    title: "E-Commerce Rebrand",
    shortDescription:
      "Complete digital transformation for a leading fashion retailer.",
    longDescription:
      "This project involved a complete overhaul of the client's e-commerce presence. We focused on creating a seamless user journey from discovery to checkout. The new design system we implemented increased conversion rates by 40% in the first month.",
    deliveryTime: "4 Months",
    timeToMake: "16 Weeks",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    rating: 5,
    customerReview:
      "Our new website is stunning. The attention to detail and the smooth animations have received so much praise from our customers. Rola.ai truly understands modern web design.",
    liveLink: "#",
    videoPreview:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI Health Assistant",
    shortDescription:
      "Mobile-first web application for personalized health monitoring.",
    longDescription:
      "We developed an AI-powered health assistant that helps users track their vitals and provides personalized health recommendations. The app integrates with wearable devices and uses machine learning to predict potential health issues.",
    deliveryTime: "2.5 Months",
    timeToMake: "10 Weeks",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    customerReview:
      "Building a health app requires a high level of precision and security. The team handled it perfectly. The AI integration is seamless and genuinely helpful.",
    liveLink: "#",
    videoPreview:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
];

const PastWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="past-work-section">
      <div className="past-work-container">
        <div className="past-work-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cs-section-title"
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            Our Past Work
          </motion.h2>
        </div>

        <div className="past-work-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="work-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="work-number">0{index + 1}</div>
              <div className="work-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-image"
                />
              </div>
              <div className="work-content">
                <div>
                  <h3 className="work-title">{project.title}</h3>
                  <p className="work-short-desc">{project.shortDescription}</p>
                </div>

                <div className="work-meta">
                  <div className="meta-item">
                    <span className="meta-label">Delivery</span>
                    <span className="meta-value">{project.deliveryTime}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Rating</span>
                    <div className="rating-stars">
                      {"★".repeat(Math.floor(project.rating))}
                      {project.rating % 1 !== 0 && "½"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="modal-hero">
                <img
                  src={selectedProject.videoPreview}
                  alt={selectedProject.title}
                  className="modal-hero-image"
                />
              </div>

              <div className="modal-details">
                <div className="modal-header">
                  <div>
                    <h3 className="modal-title">{selectedProject.title}</h3>
                    <div
                      className="rating-stars"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {"★".repeat(Math.floor(selectedProject.rating))}
                      {selectedProject.rating % 1 !== 0 && "½"}
                    </div>
                  </div>

                  <div className="modal-stats">
                    <div className="stat-box">
                      <span className="stat-value">
                        {selectedProject.timeToMake}
                      </span>
                      <span className="stat-label">Development Time</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-value">
                        {selectedProject.deliveryTime}
                      </span>
                      <span className="stat-label">Delivery</span>
                    </div>
                  </div>
                </div>

                <div className="review-section">
                  <p className="review-text">
                    "{selectedProject.customerReview}"
                  </p>
                  <span className="review-author">— Client Review</span>
                </div>

                <p className="modal-description">
                  {selectedProject.longDescription}
                </p>

                <div className="modal-actions">
                  <a
                    href={selectedProject.liveLink}
                    className="live-link-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Live Site
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PastWork;
