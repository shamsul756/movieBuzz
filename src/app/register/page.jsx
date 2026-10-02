"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "../register.css"

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldName = id === "register-email" ? "email" : id === "register-password" ? "password" : id === "confirm-password" ? "confirmPassword" : id === "name" ? "name" : "agreeTerms";
    setFormData({
      ...formData,
      [fieldName]: type === "checkbox" ? checked : value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your full name");
      setIsLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      setError("Please agree to terms and conditions");
      setIsLoading(false);
      return;
    }

    // Check if email already exists
    const existingUsers = JSON.parse(localStorage.getItem("cineverse_users") || "[]");
    const emailExists = existingUsers.some(user => user.email === formData.email);

    if (emailExists) {
      setError("This email is already registered");
      setIsLoading(false);
      return;
    }

    // Save user to localStorage
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      createdAt: new Date().toISOString(),
    };

    existingUsers.push(newUser);
    localStorage.setItem("cineverse_users", JSON.stringify(existingUsers));

    setSuccess("Account created successfully! Redirecting to login...");
    
    // Redirect to login after 1.5 seconds
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

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

            {success && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#10b981",
                  color: "white",
                  marginBottom: "16px",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                ✓ {success}
              </motion.div>
            )}

            {error && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#ef4444",
                  color: "white",
                  marginBottom: "16px",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                ✕ {error}
              </motion.div>
            )}

            <form
              className="register-form"
              onSubmit={handleSubmit}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
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
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                  checked={formData.agreeTerms}
                  onChange={handleChange}
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
                disabled={isLoading}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>{isLoading ? "Creating Account..." : "Create My Account"}</span>
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