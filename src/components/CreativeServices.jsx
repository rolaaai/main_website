import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./CreativeServices.css";

import service1 from "../assets/services/service-1.jpg";
import service2 from "../assets/services/service-2.jpg";
import service3 from "../assets/services/service-3.jpg";
import service4 from "../assets/services/service-4.jpg";

const services = [
  {
    id: 1,
    title: "SaaS Products",
    description: [
      "Our flagship suite of ai tools designed to ",
      { text: "automate repetitive", highlight: true },
      " tasks, analyze complex data sets, and provide actionable insights in real-time. built for speed, security, and scalability.",
    ],
    image: service4,
  },
  {
    id: 2,
    title: "Custom Solutions",
    description: [
      "We don't just sell software; we build partnerships. our engineering team works directly with your business to identify bottlenecks and architect ",
      { text: "bespoke ai", highlight: true },
      " solutions that fit your exact needs.",
    ],
    image: service1,
  },
  {
    id: 3,
    title: "Consulting",
    description: [
      "Navigating the ai landscape can be overwhelming. we provide ",
      { text: "strategic consulting", highlight: true },
      " to help you understand where ai can add the most value to your organization.",
    ],
    image: service3,
  },
  {
    id: 4,
    title: "Integration",
    description: [
      "Our solutions are designed to play nice with your existing stack. we ensure ",
      { text: "seamless integration", highlight: true },
      " with your current crm, erp, and other business tools.",
    ],
    image: service2,
  },
];

const CreativeServices = () => {
  const [activeId, setActiveId] = useState(1);
  const sectionRef = useRef(null);

  // Scroll progress for the entire section to drive parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when item is in the middle 20% of screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-id"));
          setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const items = document.querySelectorAll(".cs-description-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleHeadingClick = (id) => {
    const element = document.querySelector(
      `.cs-description-item[data-id="${id}"]`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      className="creative-services-section"
      ref={sectionRef}
      id="creative-services"
    >
      <div className="cs-container">
        {/* Left Panel - Sticky Headings */}
        <div className="cs-left-panel">
          <h2 className="cs-section-title">Services</h2>
          <div className="cs-headings-list">
            {services.map((service) => (
              <div
                key={service.id}
                className={`cs-heading-item ${
                  activeId === service.id ? "active" : ""
                }`}
                onClick={() => handleHeadingClick(service.id)}
              >
                {service.title}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Scrollable Descriptions */}
        <div className="cs-right-panel">
          {services.map((service) => (
            <div
              key={service.id}
              className="cs-description-item"
              data-id={service.id}
            >
              {/* Mobile Heading */}
              <h3 className="cs-mobile-heading">{service.title}</h3>

              {/* Image above description */}
              <div className="cs-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="cs-image"
                />
              </div>

              <p className="cs-desc-content">
                {service.description.map((part, index) => (
                  <span
                    key={index}
                    className={part.highlight ? "cs-desc-highlight" : ""}
                  >
                    {part.highlight ? part.text : part}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeServices;
