import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      number: "01",
      text: "An unforgettable experience! The yacht was pure luxury, and the crew took care of every detail. The service was top-notch, the destinations breathtaking.",
      author: "Sophia & Daniel, Maldives",
    },
    {
      number: "02",
      text: "We celebrated our anniversary on board — magical sunsets, crystal-clear water, and flawless hospitality. Best vacation of our lives.",
      author: "Liam & Emily, Dubai",
    },
    {
      number: "03",
      text: "Capture made our demos look incredibly polished. Instant sync keeps everyone aligned without juggling files.",
      author: "Alex Chen, Product Manager",
    },
    {
      number: "04",
      text: "Onboarding videos now take minutes instead of days. Our clients notice the difference immediately.",
      author: "Priya Shah, Customer Success Lead",
    },
    {
      number: "05",
      text: "Version chaos is gone. Real-time comments plus quick exports save hours every sprint.",
      author: "Mateo Ramirez, Creative Director",
    },
    {
      number: "06",
      text: "From investor updates to product walkthroughs, Capture gives us studio-quality video without the studio.",
      author: "Harper Collins, COO",
    },
    {
      number: "07",
      text: "The glassy UI feels premium and the workflow is effortless. Our team actually enjoys recording.",
      author: "Olivia Bennett, Marketing Lead",
    },
    {
      number: "08",
      text: "We replaced three tools with Capture. Editing, captions, and delivery live in one dashboard.",
      author: "Ethan Brooks, Head of Ops",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="stars">★ ★ ★ ★ ★</div>
          <h2 className="reviews-title">What they say.</h2>
        </div>

        <div className="reviews-field">
          {reviews.map((review, index) => (
            <div key={index} className={`review-card card-${index + 1}`}>
              <p className="review-number">({review.number})</p>
              <p className="review-text">{review.text}</p>
              <p className="review-author">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="reviews-stats">
          <div className="stat">
            <h3 className="stat-number">
              1200<span className="plus">+</span>
            </h3>
            <p className="stat-label">Reviews</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">
              10,000<span className="plus">+</span>
            </h3>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
