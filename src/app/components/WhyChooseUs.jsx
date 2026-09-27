"use client";

import React from "react";
import { motion } from "framer-motion";
import "../choose.css"

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🎬",
      number: "01",
      title: "Curated Masterpieces",
      description:
        "Hand-picked trending shows and movies from top-rated catalogs so you never run out of incredible stories.",
    },
    {
      icon: "⚡",
      number: "02",
      title: "Lightning-Fast Search",
      description:
        "Instantly look up any movie or show in real time with automated debounce and responsive performance.",
    },
    {
      icon: "📌",
      number: "03",
      title: "Smart Watchlist",
      description:
        "Easily save your favorite titles to your personal library with local storage synchronization.",
    },
    {
      icon: "🤖",
      number: "04",
      title: "AI CineBot Assistant",
      description:
        "Chat with our built-in virtual assistant anytime for instant recommendations and show details.",
    },
  ];

  return (
    <section className="why-section">
      {/* Ambient background */}
      <div className="why-glow why-glow-one"></div>
      <div className="why-glow why-glow-two"></div>

      {/* Header */}
      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="badge-pill">✨ THE ULTIMATE EXPERIENCE</span>

        <h2>
          Why Choose <span>CineStream?</span>
        </h2>

        <p>
          Built for true movie enthusiasts. Discover what makes CineStream
          your ultimate destination for an immersive cinematic journey.
        </p>
      </motion.div>

      {/* 3D Cards */}
      <div className="why-3d-grid">
        {features.map((feature, index) => (
          <motion.div
            key={feature.number}
            className="why-card-wrapper"
            initial={{
              opacity: 0,
              y: 80,
              rotateX: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -18,
              rotateX: 5,
              rotateY: index % 2 === 0 ? -5 : 5,
              scale: 1.03,
            }}
          >
            <div className="why-card">
              {/* Top glowing line */}
              <div className="card-top-line"></div>

              {/* Card number */}
              <span className="feature-number">
                {feature.number}
              </span>

              {/* Floating icon */}
              <motion.div
                className="feature-icon-3d"
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              >
                <span>{feature.icon}</span>
              </motion.div>

              <div className="feature-content">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-footer">
                  <span>EXPLORE FEATURE</span>
                  <span className="feature-arrow">→</span>
                </div>
              </div>

              {/* Decorative 3D circles */}
              <div className="card-orb orb-one"></div>
              <div className="card-orb orb-two"></div>

              {/* Bottom reflection */}
              <div className="card-reflection"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;