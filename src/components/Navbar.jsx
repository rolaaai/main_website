import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="logo">
          <a href="#">rolaa.ai</a>
        </div>

        <div className="desktop-menu">
          <a href="#creative-services" className="nav-link">
            Services
          </a>
          <a href="#past-work" className="nav-link">
            Past Work
          </a>
          <a href="#our-product" className="nav-link">
            Our Product
          </a>
          <a href="#roadmap" className="nav-link">
            Journey
          </a>
          <a href="#reviews" className="nav-link">
            Reviews
          </a>
          <Button
            variant="primary"
            onClick={() =>
              document
                .getElementById("footer")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </Button>
        </div>

        <div
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a
              href="#creative-services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a href="#past-work" onClick={() => setIsMobileMenuOpen(false)}>
              Past Work
            </a>
            <a href="#our-product" onClick={() => setIsMobileMenuOpen(false)}>
              Our Product
            </a>
            <a href="#roadmap" onClick={() => setIsMobileMenuOpen(false)}>
              Journey
            </a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>
              Reviews
            </a>
            <Button
              variant="primary"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
