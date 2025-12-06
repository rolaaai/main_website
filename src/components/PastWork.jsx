import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../public/pastWorkImages/alokarival.png";
import image2 from "../../public/pastWorkImages/supermarket.png";
import image3 from "../../public/pastWorkImages/freshTimes.png";
import "./PastWork.css";

const projects = [
  {
  id: 1,
  title: "Alok Aviral – Poet Website",
  shortDescription:
    "A beautifully designed portfolio website for a renowned Hindi/Urdu poet, showcasing poetry collections and event journeys.",
  longDescription:
    "We created an elegant and culturally expressive digital presence for Alok Aviral, a celebrated Hindi/Urdu poet. The platform highlights his extensive poetry collection, curated across genres and themes, allowing visitors to read and engage with his artistic work. It also features a complete timeline of past events, appearances, publications, and upcoming performances.\n\nThe biggest challenge was to maintain the authentic poetic essence while ensuring modern UI/UX. We crafted a minimal yet emotional design language that reflects traditional literature aesthetics. The website’s backend enables effortless content updates, event management, and poetry publishing, making digital expansion seamless for the poet.\n\nThe result is a smooth, fast, and immersive experience for poetry lovers, allowing them to explore the poet’s journey like never before.",
  deliveryTime: "2 Months",
  timeToMake: "2 Months",
  image: image1, 
  rating: 5,
  customerReview:
    "Rola.ai has done an exceptional job. The website perfectly captures the essence of my poetry and has become a beautiful digital identity for my work. The team was extremely supportive throughout the development, and what impressed me the most was their after-service support. They maintain the website regularly, update content quickly, and genuinely care about long-term quality. Highly recommended!",
  liveLink: "https://alokaviral.in/",
  videoPreview: image1
}
,
  {
  id: 2,
  title: "Southern Supermarket – Online Grocery Store",
  shortDescription:
    "A complete ecommerce platform enabling a local supermarket in Delhi to deliver groceries online and expand its customer base.",
  longDescription:
    "Southern Supermarket, a well-established local store in Delhi, aimed to expand beyond walk-in customers by offering online grocery delivery. We developed a full-featured ecommerce platform tailored specifically for grocery shopping, focusing on ease of use, quick ordering, secure payments, and efficient order management.\n\nThe website includes features such as product categorization, smart search & filtering, real-time stock updates, delivery slot scheduling, and a smooth checkout system. We integrated an admin dashboard allowing store owners to manage products, pricing, offers, customer orders, and delivery tracking.\n\nOur challenge was designing a fast and mobile-first interface since most customers place orders from phones. The final solution significantly improved customer convenience and increased overall store reach and revenue.",
  deliveryTime: "4 Months",
  timeToMake: "4 Months",
  image: image2,
  rating: 4.8,
  customerReview:
    "Working with Rola.ai was a great decision. They transformed our offline shop into a fully functional online grocery platform that our customers love. The UI is simple, intuitive, and fast, and the admin panel has made order management extremely easy for our team. Their support during and after development has been excellent. One small area of improvement could be adding more analytics tools for sales tracking, but overall we are very happy with the service!",
  liveLink: "https://southernsupermarket.com",
  videoPreview: image2
}
,
  {
  id: 3,
  title: "Funky Fresh Times – Lifestyle & Magazine Website",
  shortDescription:
    "A modern online lifestyle magazine delivering trending articles across health, fashion, beauty, food, and wellness.",
  longDescription:
    "Funky Fresh Times is a digital publication designed to deliver fresh and engaging lifestyle content to a global audience. The website features high-quality articles spanning fashion, beauty, food, health, relationships, fitness, and personal development.\n\nWe created a fast and highly responsive content-based platform optimizing both reading experience and editorial workflow. The site includes category-based navigation, trending and latest article sections, SEO-optimized publishing structure, and a rich CMS to enable writers to publish and manage articles with ease.\n\nThe biggest challenge was ensuring a visually appealing layout that presents long-form reading content without overwhelming the user. We designed a clean and clean layout inspired by modern magazines, making the content easy to explore. The platform also supports future scalability such as ads integration, video articles, multi-author access, subscription systems, and audience analytics.\n\nCurrently, thousands of active readers consume content daily, and the smooth structure helps the brand grow consistently in the lifestyle publishing space.",
  deliveryTime: "2.5 Months",
  timeToMake: "10 Weeks",
  image: image3,
  rating: 5,
  customerReview:
    "The team at Rola.ai delivered exactly what we were looking for — a sleek, fast, and beautifully structured magazine website. Our writers love the easy CMS, and the site performance is excellent even with frequent article uploads. The design perfectly complements our content categories and has significantly improved our audience engagement. Highly recommended!",
  liveLink: "https://funkyfreshtimes.com/lifestyle",
  videoPreview: image3
}

];

const PastWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="past-work" className="past-work-section">
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
