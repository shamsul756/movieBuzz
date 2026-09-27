
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../Banner.css";

const Banner = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMouse({ x, y });
  };

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        className="hero-image"
        animate={{
          x: mouse.x * -10,
          y: mouse.y * -10,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
      >
        <Image
          src="/banner.png"
          alt="Movie background"
          fill
          priority
          sizes="100vw"
          className="background-img"
        />
      </motion.div>

      {/* Cinematic dark overlay */}
      <div className="hero-overlay"></div>

      {/* Purple cinematic glow */}
      <motion.div
        className="hero-glow"
        animate={{
          x: mouse.x * 25,
          y: mouse.y * 25,
          scale: [1, 1.12, 1],
        }}
        transition={{
          x: {
            type: "spring",
            stiffness: 30,
            damping: 20,
          },
          y: {
            type: "spring",
            stiffness: 30,
            damping: 20,
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* ================= PARTICLES ================= */}

      <div className="cinematic-particles">
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.span
            key={index}
            className="particle"
            initial={{
              opacity: 0,
              y: Math.random() * 700,
              x: Math.random() * 1400,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [Math.random() * 700, -100],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="hero-content">

        {/* Small cinematic label */}
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          ✦ THE ULTIMATE MOVIE EXPERIENCE
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            x: -80,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Movies Are
          <br />

          <span>Another World.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            x: -50,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          Discover incredible stories, explore amazing movies,
          <br />
          and find your next favorite cinematic experience.
        </motion.p>

        {/* ================= BUTTONS ================= */}

        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.75,
          }}
        >
          <Link href="/movies">
            <motion.button
              className="explore-btn"
              whileHover={{
                scale: 1.06,
                rotateX: 5,
                boxShadow:
                  "0 0 35px rgba(168,85,247,0.55)",
              }}
              whileTap={{
                scale: 0.94,
              }}
            >
              <span>Explore Movies</span>
              <span className="arrow">→</span>
            </motion.button>
          </Link>

          <Link
            href="/movies"
            className="watch-btn"
          >
            <span className="play-icon">▶</span>
            Watch Trailer
          </Link>
        </motion.div>

        {/* ================= STATS ================= */}

        <motion.div
          className="hero-stats"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
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

      {/* ================= SCROLL ================= */}

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </motion.div>

      {/* Cinematic bottom fade */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Banner;


