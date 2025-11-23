import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Roadmap.css";

const RoadmapItem = ({ title, description, date, status }) => {
  return (
    <div className={`roadmap-item ${status}`}>
      <div className="roadmap-date">{date}</div>
      <div className="roadmap-content">
        <h3 className="roadmap-title">{title}</h3>
        <p className="roadmap-desc">{description}</p>
      </div>
      <div className="roadmap-line"></div>
      <div className="roadmap-dot"></div>
    </div>
  );
};

const Roadmap = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const items = [
    {
      date: "Q1 2025",
      title: "Inception",
      description: "Identifying the gap between data and decision-making.",
      status: "completed",
    },
    {
      date: "Q2 2025",
      title: "Prototype",
      description: "Building the core engine of our intelligent automation.",
      status: "completed",
    },
    {
      date: "Q3 2025",
      title: "Beta Launch",
      description: "Select partners gain access to our SaaS platform.",
      status: "active",
    },
    {
      date: "Q4 2025",
      title: "Global Scale",
      description: "Opening doors to businesses worldwide.",
      status: "upcoming",
    },
    {
      date: "2026",
      title: "The Ecosystem",
      description: "Full integration of custom solutions and SaaS products.",
      status: "upcoming",
    },
  ];

  return (
    <section ref={targetRef} className="roadmap-section">
      <div className="sticky-container container">
        <h2 className="section-title">The Journey</h2>
        <div className="roadmap-overflow">
          <motion.div style={{ x }} className="roadmap-track">
            {items.map((item, index) => (
              <RoadmapItem key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
