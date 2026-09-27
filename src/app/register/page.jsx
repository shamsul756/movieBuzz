"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "../register.css"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="register-page">

      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}

      <div className="register-background">

        <div className="register-grid"></div>

        <div className="register-orb register-orb-one"></div>
        <div className="register-orb register-orb-two"></div>
        <div className="register-orb register-orb-three"></div>

        <div className="register-spotlight register-spotlight-one"></div>
        <div className="register-spotlight register-spotlight-two"></div>

        <div className="register-particles">
          {Array.from({ length: 35 }).map((_, index) => (
            <span
              key={index}
              className="register-particle"
              style={{
                left: `${(index * 29) % 100}%`,
                top: `${(index * 47) % 100}%`,
                animationDelay: `${(index % 8) * 0.6}s`,
                animationDuration: `${5 + (index % 6)}s`,
              }}
            />
          ))}
        </div>

        <div className="register-film film-one">
          🎞️
        </div>

        <div className="register-film film-two">
          🎞️
        </div>

      </div>


      {/* =========================================
          REGISTER CARD
      ========================================= */}

      <motion.section
        className="register-wrapper"
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.94,
          filter: "blur(15px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <div className="register-card">

          <div className="register-card-glow"></div>


          {/* =====================================
              LEFT CINEMATIC PANEL
          ===================================== */}

          <div className="register-visual">

            <div className="register-visual-overlay"></div>

            <div className="register-visual-content">

              <motion.div
                className="register-movie-icon"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🎬
              </motion.div>

              <span className="register-label">
                ✦ JOIN THE CINEMATIC UNIVERSE
              </span>

              <h1>
                Create Your
                <br />
                <span>Movie World.</span>
              </h1>

              <p>
                Build your personal movie collection,
                save unforgettable stories, and discover
                your next favorite cinematic experience.
              </p>

              <div className="register-line"></div>

              <div className="register-features">

                <div>
                  <span>✓</span>
                  <p>
                    Save your favorite movies
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    Discover trending shows
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    Build your personal library
                  </p>
                </div>

              </div>

            </div>

            <div className="register-visual-bottom">
              <span>DISCOVER</span>
              <span>CREATE</span>
              <span>ENJOY</span>
            </div>

          </div>


          {/* =====================================
              RIGHT REGISTER PANEL
          ===================================== */}

          <div className="register-content">

            {/* Brand */}

            <Link href="/" className="register-brand">

              <div className="register-brand-icon">
                🎬
              </div>

              <span>
                Cine<span>Verse</span>
              </span>

            </Link>


            {/* Heading */}

            <div className="register-heading">

              <span className="register-kicker">
                CREATE YOUR ACCOUNT
              </span>

              <h2>
                Start your
                <br />
                <span>cinematic journey.</span>
              </h2>

              <p>
                Join CineVerse and make every movie
                experience more personal.
              </p>

            </div>


            {/* =====================================
                REGISTER FORM
            ===================================== */}

            <form
              className="register-form"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Name */}

              <div className="register-input-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <div className="register-input-wrapper">

                  <span className="register-input-icon">
                    ✦
                  </span>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />

                </div>

              </div>


              {/* Email */}

              <div className="register-input-group">

                <label htmlFor="register-email">
                  Email Address
                </label>

                <div className="register-input-wrapper">

                  <span className="register-input-icon">
                    ✉
                  </span>

                  <input
                    id="register-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>


              {/* Password */}

              <div className="register-input-group">

                <label htmlFor="register-password">
                  Password
                </label>

                <div className="register-input-wrapper">

                  <span className="register-input-icon">
                    ◉
                  </span>

                  <input
                    id="register-password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "◉" : "◌"}
                  </button>

                </div>

              </div>


              {/* Confirm Password */}

              <div className="register-input-group">

                <label htmlFor="confirm-password">
                  Confirm Password
                </label>

                <div className="register-input-wrapper">

                  <span className="register-input-icon">
                    ◉
                  </span>

                  <input
                    id="confirm-password"
                    type={
                      showConfirm
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowConfirm(!showConfirm)
                    }
                  >
                    {showConfirm ? "◉" : "◌"}
                  </button>

                </div>

              </div>


              {/* Terms */}

              <label className="terms-checkbox">

                <input
                  type="checkbox"
                  required
                />

                <span className="terms-box"></span>

                <p>
                  I agree to the{" "}
                  <Link href="/terms">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>
                </p>

              </label>


              {/* Register button */}

              <motion.button
                type="submit"
                className="register-button"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>Create My Account</span>
                <strong>→</strong>
              </motion.button>

            </form>


            {/* Divider */}

            <div className="register-divider">

              <span></span>

              <p>OR SIGN UP WITH</p>

              <span></span>

            </div>


            {/* Social */}

            <div className="register-social">

              <button type="button">
                <strong>G</strong>
                Google
              </button>

              <button type="button">
                <strong>𝕏</strong>
                Twitter
              </button>

            </div>


            {/* Login connection */}

            <div className="already-account">

              <span>
                Already have an account?
              </span>

              <Link href="/login">
                Sign in
                <b> →</b>
              </Link>

            </div>


            {/* Security */}

            <div className="register-secure">
              <span>♢</span>
              Your cinematic journey is protected
            </div>

          </div>

        </div>

      </motion.section>


      {/* Footer */}

      <div className="register-footer">

        <span>
          © {new Date().getFullYear()} CineVerse
        </span>

        <b>•</b>

        <span>
          Made for movie lovers
        </span>

      </div>

    </main>
  );
};

export default Register;