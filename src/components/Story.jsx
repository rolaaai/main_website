import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import confetti from "canvas-confetti";
import "./Story.css";

const Story = () => {
  const containerRef = useRef(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to slide index (0, 1, 2, 3)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // if (showCelebration) return; // Allow scrolling to last slide to trigger it

      // Adjusted thresholds for "good breaking points"
      // 0 - 0.25: Slide 0
      // 0.25 - 0.5: Slide 1
      // 0.5 - 0.75: Slide 2
      // 0.75 - 1.0: Slide 3
      if (latest < 0.25) {
        setCurrentSlide(0);
      } else if (latest < 0.5) {
        setCurrentSlide(1);
      } else if (latest < 0.75) {
        setCurrentSlide(2);
      } else {
        setCurrentSlide(3);
        if (!showCelebration) {
          handleCelebration();
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, showCelebration]);

  const handleCelebration = () => {
    if (showCelebration) return; // Prevent multiple triggers
    setShowCelebration(true);

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const random = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.05,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <section ref={containerRef} id="story" className="story-section">
      <div className="story-sticky-container">
        <div className="story-content-wrapper">
          <AnimatePresence mode="wait">
            {currentSlide === 0 && (
              <motion.div
                key="slide1"
                className="story-slide"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="story-title">
                  It started with a{" "}
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    question.
                  </span>
                </h2>
              </motion.div>
            )}

            {currentSlide === 1 && (
              <motion.div
                key="slide2"
                className="story-slide-1"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p className="">
                  We looked at the world of business and saw brilliance held
                  back by{" "}
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    repetition.
                  </span>{" "}
                  Talented people were drowning in data, stuck in loops of
                  manual tasks.
                </p>
              </motion.div>
            )}

            {currentSlide === 2 && (
              <motion.div
                key="slide3"
                className="story-slide-2"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p className="">
                  <span className="special-text text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    We asked
                  </span>{" "}
                  <span className="highlight">
                    What if software didn't just wait for commands, but
                    anticipated needs?
                  </span>
                </p>
              </motion.div>
            )}

            {currentSlide === 3 && (
              <motion.div
                key="slide4"
                className="story-slide"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="story-climax">
                  <h3 className="climax-question text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    And that's when{" "}
                    <span className="special-text text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      Rolaa AI
                    </span>{" "}
                    was born!
                  </h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Story;
