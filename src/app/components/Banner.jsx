
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../Banner.css";

const Banner = () => {
  return (
    <section className="hero">

      {/* Full Background Image */}
      <div className="hero-image">
        <Image
          src="/banner.png"
          alt="Movie background"
          fill
          priority
          className="background-img"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="hero-overlay"></div>

      {/* Purple cinematic glow */}
      <div className="hero-glow"></div>

      {/* Content */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Movies Are
          <br />

          <span>Another World.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover incredible stories, explore amazing movies,
          and find your next favorite cinematic experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/movies">
            <motion.button
              className="explore-btn"
              whileHover={{
                scale: 1.08,
                rotateX: 8,
                rotateY: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Explore Movies
              <span>→</span>
            </motion.button>
          </Link>

          <Link
            href="/movies"
            className="watch-btn"
          >
            ▶ Watch Trailer
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div>
            <strong>10K+</strong>
            <span>Movies</span>
          </div>

          <div>
            <strong>5K+</strong>
            <span>Shows</span>
          </div>

          <div>
            <strong>4.8 ⭐</strong>
            <span>Rating</span>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span></span>
        Scroll to explore
      </motion.div>

    </section>
  );
};

export default Banner;

