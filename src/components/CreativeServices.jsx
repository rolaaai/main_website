import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import "./CreativeServices.css";

const services = [
  {
    id: 1,
    title: "SaaS Products",
    shortDesc: "Scalable AI Tools",
    fullDesc:
      "Our flagship suite of AI tools designed to automate repetitive tasks, analyze complex data sets, and provide actionable insights in real-time. Built for speed, security, and scalability.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Custom Solutions",
    shortDesc: "Tailored Engineering",
    fullDesc:
      "We don't just sell software; we build partnerships. Our engineering team works directly with your business to identify bottlenecks and architect bespoke AI solutions that fit your exact needs.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Consulting",
    shortDesc: "Strategic Guidance",
    fullDesc:
      "Navigating the AI landscape can be overwhelming. We provide strategic consulting to help you understand where AI can add the most value to your organization.",
    icon: "💡",
  },
  {
    id: 4,
    title: "Integration",
    shortDesc: "Seamless Connection",
    fullDesc:
      "Our solutions are designed to play nice with your existing stack. We ensure seamless integration with your current CRM, ERP, and other business tools.",
    icon: "🔗",
  },
];

const CreativeServices = () => {
  const [bookState, setBookState] = useState("closed"); // closed, open, detail
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Open book when section is prominently in view (center of viewport)
      // Only trigger when scrolling down and section is well into view
      if (rect.top < windowHeight * 0 && rect.bottom > windowHeight * 0.2) {
        if (bookState === "closed") {
          setBookState("open");
        }
      } else if (
        rect.top < windowHeight * 0.5 &&
        rect.bottom > windowHeight * 0.5
      ) {
        if (bookState === "open") {
          setBookState("closed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Don't check initial state - only open on scroll

    return () => window.removeEventListener("scroll", handleScroll);
  }, [bookState]);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setBookState("detail");
  };

  const handleBack = () => {
    setBookState("open");
    setSelectedService(null);
  };

  return (
    <section
      className="creative-services-section"
      ref={sectionRef}
      id="creative-services"
    >
      <div className="book-container">
        {/* Book Cover */}
        <motion.div
          className="book-cover"
          initial={{ opacity: 1 }}
          animate={{
            opacity: bookState === "closed" ? 1 : 0,
            rotateY: bookState === "closed" ? 0 : -180,
            pointerEvents: bookState === "closed" ? "auto" : "none",
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="book-spine"></div>
          <div className="cover-content">
            <h2 className="cover-title">What We Do</h2>
            <p className="cover-subtitle">
              Spin the wheel of innovation. Click to explore.
            </p>
            <p className="cover-author">Written by rolaa.ai</p>
          </div>
        </motion.div>

        {/* Open Book - Two Pages */}
        <motion.div
          className="book-open"
          initial={{ opacity: 0 }}
          animate={{
            opacity: bookState === "open" ? 1 : 0,
            scale: bookState === "open" ? 1 : 0.9,
            pointerEvents: bookState === "open" ? "auto" : "none",
          }}
          transition={{ duration: 1, delay: bookState === "open" ? 0.5 : 0 }}
        >
          {/* Left Page */}
          <div className="book-page book-page-left">
            <div className="page-content">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={service.id}
                  className="book-card"
                  onClick={() => handleCardClick(service)}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="book-card-icon">{service.icon}</div>
                  <h3 className="book-card-title">{service.title}</h3>
                  <p className="book-card-desc">{service.shortDesc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Page */}
          <div className="book-page book-page-right">
            <div className="page-content">
              {services.slice(2, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  className="book-card"
                  onClick={() => handleCardClick(service)}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="book-card-icon">{service.icon}</div>
                  <h3 className="book-card-title">{service.title}</h3>
                  <p className="book-card-desc">{service.shortDesc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detail View - Page Turn Animation */}
        <AnimatePresence>
          {bookState === "detail" && selectedService && (
            <motion.div
              className="book-detail"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="book-page book-page-detail">
                <div className="detail-content">
                  <button className="back-btn" onClick={handleBack}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                  </button>

                  <div className="detail-header">
                    <span className="detail-icon">{selectedService.icon}</span>
                    <h3 className="detail-title">{selectedService.title}</h3>
                  </div>

                  <p className="detail-desc">{selectedService.fullDesc}</p>

                  <div className="detail-footer">
                    <div className="page-number">
                      Page {selectedService.id + 1}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CreativeServices;
