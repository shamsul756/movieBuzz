"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "../login.css"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    console.log("Login submitted");
  };

  return (
    <main className="login-page">

      {/* Background atmosphere */}
      <div className="login-background">
        <div className="login-orb orb-pink"></div>
        <div className="login-orb orb-purple"></div>
        <div className="login-orb orb-blue"></div>

        <div className="cinema-ring ring-one"></div>
        <div className="cinema-ring ring-two"></div>
        <div className="cinema-ring ring-three"></div>
      </div>

      {/* Floating movie elements */}
      <motion.div
        className="floating-element film-left"
        animate={{
          y: [0, -18, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        🎬
      </motion.div>

      <motion.div
        className="floating-element film-right"
        animate={{
          y: [0, 20, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        🍿
      </motion.div>

      {/* Login container */}
      <motion.div
        className="login-wrapper"
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        {/* 3D top glow */}
        <div className="login-card-glow"></div>

        <div className="login-card">

          {/* Logo */}
          <motion.div
            className="login-logo"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "spring",
            }}
          >
            🎬
          </motion.div>

          <div className="login-header">
            <span className="login-badge">
              ✨ WELCOME BACK
            </span>

            <h1>
              Welcome to <span>CineStream</span>
            </h1>

            <p>
              Sign in and continue your cinematic journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-wrapper">
                <span className="input-icon">
                  ✉️
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="password-label-row">
                <label htmlFor="password">
                  Password
                </label>

                <Link href="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">
                  🔒
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="remember-row">
              <label className="remember-label">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Remember me
              </label>
            </div>

            {/* Login button */}
            <motion.button
              type="submit"
             
              className="login-btn"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <span>Sign In</span>
              <span className="login-arrow">→</span>
            </motion.button>
          </form>

          {/* Divider */}
          <div className="login-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          {/* Social login */}
          <div className="social-login">

            <motion.button
              type="button"
              className="social-btn"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>🌐</span>
              Continue with Google
            </motion.button>

            <motion.button
              type="button"
              className="social-btn"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>🐙</span>
              Continue with GitHub
            </motion.button>

          </div>

          {/* Register */}
          <div className="register-text">
            <span>Don't have an account?</span>

            <Link href="/register">
              Create Account →
            </Link>
          </div>

          {/* Bottom decoration */}
          <div className="login-card-line"></div>

        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="login-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        © 2026 CineStream • Your world of cinema
      </motion.p>

    </main>
  );
};

export default LoginPage;