"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "./not-found.css";

export default function NotFound() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="not-found-page">
      {/* Animated Background */}
      <div className="not-found-bg">
        <div className="not-found-grid"></div>

        <div className="not-found-orb orb-1"></div>
        <div className="not-found-orb orb-2"></div>
        <div className="not-found-orb orb-3"></div>

        <div className="not-found-spotlight"></div>

        <div className="not-found-particles">
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className="not-found-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <motion.div
        className="not-found-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating 404 Number */}
        <motion.div
          className="not-found-number"
          variants={itemVariants}
          animate="animate"
          custom={0}
        >
          <motion.div
            className="floating-404"
            variants={floatingVariants}
          >
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="not-found-content"
          variants={itemVariants}
        >
          {/* Icon */}
          <motion.div
            className="not-found-icon"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎬
          </motion.div>

          {/* Heading */}
          <h1 className="not-found-title">
            Oops! The Reel Is Broken
          </h1>

          {/* Description */}
          <p className="not-found-description">
            The page you're looking for seems to have been cut from this film.
            It might have been moved, deleted, or never existed in our cinematic universe.
          </p>

          {/* Error Details */}
          <motion.div
            className="not-found-details"
            variants={itemVariants}
          >
            <div className="detail-item">
              <span className="detail-icon">📹</span>
              <div>
                <p className="detail-label">Scene Status</p>
                <p className="detail-value">Not Found</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🎞️</span>
              <div>
                <p className="detail-label">Error Code</p>
                <p className="detail-value">404</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🎭</span>
              <div>
                <p className="detail-label">Action Status</p>
                <p className="detail-value">Page Missing</p>
              </div>
            </div>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            className="not-found-suggestions"
            variants={itemVariants}
          >
            <h2>What You Can Do:</h2>
            <ul>
              <li>🏠 Return to the home scene</li>
              <li>🔍 Use search to find what you need</li>
              <li>🎬 Explore our movie collection</li>
              <li>💬 Contact our support team</li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="not-found-actions"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => router.push("/")}
              className="action-button primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>🎬</span>
              <span>Return to Home</span>
            </motion.button>

            <motion.button
              onClick={() => router.push("/movies")}
              className="action-button secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>🎥</span>
              <span>Browse Movies</span>
            </motion.button>

            <motion.button
              onClick={() => router.back()}
              className="action-button tertiary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>⬅️</span>
              <span>Go Back</span>
            </motion.button>
          </motion.div>

          {/* Footer Link */}
          <motion.div
            className="not-found-footer"
            variants={itemVariants}
          >
            <p>
              Lost in the cinematic universe?{" "}
              <Link href="/login" className="help-link">
                Sign in to your account →
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div className="not-found-film film-left">
          🎞️
        </motion.div>
        <motion.div className="not-found-film film-right">
          🎞️
        </motion.div>
      </motion.div>
    </main>
  );
}
