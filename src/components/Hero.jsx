import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import "./Hero.css";

import HeroDashboard from "./HeroDashboard";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      id="hero"
      className="hero relative flex items-center justify-center min-h-screen bg-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1, x: -50 }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[100px]"
        />
        <motion.div
          style={{ y: y2, x: 50 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-start justify-center text-left h-full px-4">
        <motion.div>
          <h1 className="hero-title text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            <span className="text-white block">We Build</span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              The Future
            </span>
          </h1>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hero-subtitle text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12 max-w-5xl leading-tight"
          >
            Intelligent automation that adapts, evolves, and empowers your
            business to reach new heights.
          </motion.p>
        </motion.div>

        <div className="hero-3d-background">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
