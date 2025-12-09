import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      number: "01",
      text: "Rola.ai has done an exceptional job. The website perfectly captures the essence of my poetry and has become a beautiful digital identity for my work.",
      author: "Alok Aviral, Poet & Artist",
    },
    {
      number: "02",
      text: "Working with Rola.ai was a great decision. They transformed our offline shop into a fully functional online grocery platform that our customers love.",
      author: "Suresh Kumar, Southern Supermarket",
    },
    {
      number: "03",
      text: "The team at Rola.ai delivered exactly what we were looking for — a sleek, fast, and beautifully structured magazine website.",
      author: "Riya Sharma, Funky Fresh Times",
    },
    {
      number: "04",
      text: "Exceptional attention to detail. They didn't just build a website; they built a digital experience that resonates with our audience.",
      author: "Vikram Malhotra, TechFlow Solutions",
    },
    {
      number: "05",
      text: "Our engagement metrics skyrocketed after the redesign. Rola.ai understands how to blend aesthetics with functionality perfectly.",
      author: "Ananya Gupta, StyleHub",
    },
    {
      number: "06",
      text: "Professional, timely, and incredibly talented. They took our vague ideas and turned them into a stunning reality.",
      author: "Rajesh Verma, GreenLeaf Organics",
    },
    {
      number: "07",
      text: "The best dev team I've worked with. Clean code, great communication, and a final product that exceeded all expectations.",
      author: "Sanya Kapoor, PixelPerfect Studios",
    },
    {
      number: "08",
      text: "We replaced three tools with Capture. Editing, captions, and delivery live in one dashboard.",
      author: "Ethan Brooks, Head of Ops",
    },{
      text: "Scalability was our main concern, and Rola.ai nailed it. The architecture is solid, and the UI is butter smooth.",
      author: "Arjun Mehta, InnovateX",
    },
  ];

  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleAutoScroll = () => {
      if (window.innerWidth > 768) return; // Only run on mobile

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 10
      ) {
        // Reset to start if at the end
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll by one card width
        const cardWidth =
          scrollContainer.querySelector(".review-card")?.clientWidth || 300;
        scrollContainer.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(handleAutoScroll, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="stars">★ ★ ★ ★ ★</div>
          <h2 className="reviews-title">What they say.</h2>
        </div>

        <div className="reviews-field" ref={scrollContainerRef}>
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
              15<span className="plus">+</span>
            </h3>
            <p className="stat-label">Reviews</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">
              10<span className="plus">+</span>
            </h3>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
