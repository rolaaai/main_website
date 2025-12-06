import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./Roadmap.css";

const roadmapData = [
  {
    id: "q1-2025",
    date: "Q1 2025",
    title: "Inception",
    description:
      "The journey began with identifying a critical gap between raw data and actionable decision-making. We spent months researching market needs, interviewing potential users, and conceptualizing a platform that could bridge this divide. This phase was all about laying the groundwork—defining our core philosophy, assembling the founding team, and sketching the initial architectural blueprints for what would become Rola.ai.",
    visualTitle: "The Spark",
    visualDesc: "Conceptualizing the bridge between data and decisions.",
    color: "#3b82f6", // Blue
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "q2-2025",
    date: "Q2 2025",
    title: "Prototype",
    description:
      "With the vision set, we moved to execution. We built the core engine of our intelligent automation system, focusing on speed and accuracy. This wasn't just a mock-up; it was a functional prototype capable of processing complex datasets. We iterated rapidly, testing internal builds and refining our algorithms to ensure they could handle real-world scenarios with the precision our users would expect.",
    visualTitle: "Core Engine",
    visualDesc: "Building the heart of intelligent automation.",
    color: "#8b5cf6", // Violet
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "q3-2025",
    date: "Q3 2025",
    title: "Beta Launch",
    description:
      "We opened our doors to a select group of partners for our private beta. This was a crucial stress test for our platform. We gathered invaluable feedback on usability, performance, and feature requirements. The insights from these early adopters helped us polish the user experience and squash bugs, ensuring that Rola.ai was robust and ready for a wider audience.",
    visualTitle: "First Contact",
    visualDesc: "Real-world testing with strategic partners.",
    color: "#ec4899", // Pink
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "q4-2025",
    date: "Q4 2025",
    title: "Global Scale",
    description:
      "Now, we are ready to scale. We are expanding our infrastructure to support businesses worldwide, ensuring low latency and high availability across different regions. This phase involves rigorous security audits, compliance checks, and the rollout of our global marketing campaign. We're not just launching a product; we're launching a movement to democratize AI-driven insights.",
    visualTitle: "Expansion",
    visualDesc: "Scaling infrastructure for a global audience.",
    color: "#10b981", // Emerald
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "2026",
    date: "2026",
    title: "The Ecosystem",
    description:
      "Our long-term vision is to create a fully integrated ecosystem where custom solutions and SaaS products coexist seamlessly. We plan to open our API to developers, fostering a community of innovators who can build on top of Rola.ai. By 2026, we aim to be the central hub for business intelligence, where every tool and data source connects to empower smarter, faster decisions.",
    visualTitle: "Connected Future",
    visualDesc: "A seamless ecosystem of tools and intelligence.",
    color: "#f59e0b", // Amber
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

const Roadmap = () => {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(roadmapData[0].id);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-id");
          setActiveId(id);
          const index = roadmapData.findIndex((item) => item.id === id);
          setActiveIndex(index);
        }
      });
    }, options);

    const sections = document.querySelectorAll(".roadmap-text-item");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" className="roadmap-section" ref={containerRef}>
      <div className="roadmap-container">
        <h2 className="roadmap-header mobile-header">The Journey</h2>
        {/* Left Side: Scrollable Text */}
        <div className="roadmap-left">
          <div className="roadmap-list">
            {roadmapData.map((item) => (
              <div
                key={item.id}
                className={`roadmap-text-item ${
                  activeId === item.id ? "active" : ""
                }`}
                data-id={item.id}
              >
                <span className="roadmap-date-label">{item.date}</span>
                <h3 className="roadmap-item-title">{item.title}</h3>
                <p className="roadmap-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Connected Visuals */}
        <div className="roadmap-right">
          <div className="roadmap-sticky-content">
            <h2 className="roadmap-header">The Journey</h2>
            <div className="roadmap-content-wrapper">
              {/* Connection Line Container */}
              <div className="connection-container">
                {/* Background Line */}
                <div className="connection-line-bg" />

                {/* Active Progress Line */}
                <motion.div
                  className="connection-line-progress"
                  animate={{
                    height: `${
                      (activeIndex / (roadmapData.length - 1)) * 100
                    }%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Nodes */}
                {roadmapData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`connection-node ${
                      index <= activeIndex ? "active" : ""
                    }`}
                    style={{
                      top: `${(index / (roadmapData.length - 1)) * 100}%`,
                    }}
                  >
                    <div
                      className="node-dot"
                      style={{
                        backgroundColor:
                          index <= activeIndex ? item.color : "#333",
                        boxShadow:
                          index === activeIndex
                            ? `0 0 20px ${item.color}`
                            : "none",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Visual Card Display */}
              <div className="visual-display-area">
                {roadmapData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="visual-card-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : 50,
                      pointerEvents: activeIndex === index ? "auto" : "none",
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      className="roadmap-visual-card"
                      style={{ borderColor: item.color + "40" }}
                    >
                      <div
                        className="roadmap-visual-placeholder"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}10, ${item.color}30)`,
                        }}
                      >
                        <div
                          className="roadmap-visual-icon"
                          style={{ color: item.color }}
                        >
                          {item.icon}
                        </div>
                      </div>
                      <div className="roadmap-visual-info">
                        <h4 style={{ color: item.color }}>
                          {item.visualTitle}
                        </h4>
                        <p>{item.visualDesc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
