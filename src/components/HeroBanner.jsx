import React from "react";
import heroBanner from "../assets/HeroBanner.png";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <img src={heroBanner} alt="Luxury Villa" className="hero-image" />

      <div className="white-label">
        <h1 className="label-title">Luxury Coastal Villa</h1>
        <p className="label-address">123 Simple Ave, Cape Town</p>
      </div>
    </section>
  );
}

export default HeroBanner;
