
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "../footer.css"

const Footer = () => {
  return (
    <footer className="cinema-footer">

      {/* Cinematic background */}
      <div className="footer-bg">
        <div className="footer-orb footer-orb-1"></div>
        <div className="footer-orb footer-orb-2"></div>

        <div className="footer-film film-left">
          🎞️
        </div>

        <div className="footer-film film-right">
          🎞️
        </div>

        <div className="footer-grid"></div>
      </div>

      {/* Top glow */}
      <div className="footer-top-glow"></div>

      <div className="footer-container">

        {/* =====================================
            BRAND
        ===================================== */}

        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/" className="footer-logo">
            <span className="logo-icon">🎬</span>
            <span>
              Cine<span>Verse</span>
            </span>
          </Link>

          <p className="footer-tagline">
            MORE THAN JUST MOVIES
          </p>

          <p className="footer-description">
            Discover incredible stories, explore amazing
            movies, and save your favorite cinematic
            experiences in one place.
          </p>

          {/* Social icons */}
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Discord">◉</a>
          </div>
        </motion.div>


        {/* =====================================
            QUICK LINKS
        ===================================== */}

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3>Quick Links</h3>

          <div className="footer-links">
            <Link href="/">⌂ <span>Home</span></Link>
            <Link href="/movies">🎬 <span>Movies</span></Link>
            <Link href="/movies">📺 <span>TV Shows</span></Link>
            <Link href="/saved">♡ <span>Saved Movies</span></Link>
            <Link href="/about">ⓘ <span>About</span></Link>
            <Link href="/contact">✉ <span>Contact</span></Link>
          </div>
        </motion.div>


        {/* =====================================
            NEWSLETTER
        ===================================== */}

        <motion.div
          className="footer-column newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3>Stay Updated</h3>

          <p>
            Get the latest movie updates, trending shows,
            and special recommendations.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <span>✉</span>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <button type="submit">
              Subscribe
              <span>→</span>
            </button>
          </form>
        </motion.div>


        {/* =====================================
            CINEMATIC QUOTE
        ===================================== */}

        <motion.div
          className="footer-quote"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="quote-camera">
            🎥
          </div>

          <h2>
            Good Movies
            <br />
            <span>Better Days.</span>
          </h2>

          <div className="quote-line"></div>

          <p>
            Lights. Camera.
            <br />
            Your story begins.
          </p>
        </motion.div>

      </div>


      {/* =====================================
          BOTTOM BAR
      ===================================== */}

      <div className="footer-bottom">

        <div>
          © {new Date().getFullYear()} CineVerse.
          All rights reserved.
        </div>

        <div className="footer-bottom-center">
          <span>●</span>
          Watch
          <b>•</b>
          Explore
          <b>•</b>
          Save
        </div>

        <div>
          Made with <span className="heart">♥</span> for
          movie lovers
        </div>

      </div>

    </footer>
  );
};

export default Footer;



