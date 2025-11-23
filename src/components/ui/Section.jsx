import React from "react";
import "./Section.css";

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  ...props
}) => {
  return (
    <section id={id} className={`section ${className}`} {...props}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;
