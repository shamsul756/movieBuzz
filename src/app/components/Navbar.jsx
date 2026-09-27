"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Saved", path: "/saved" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link href="/" className="logo" onClick={closeMenu}>
        <motion.div
          className="logo-icon"
          whileHover={{
            rotateY: 180,
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          🎬
        </motion.div>

        <div className="logo-text">
          <span>Cine</span>
          <strong>Verse</strong>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-links">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href={item.path} className="nav-link">
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop Authentication */}
      <div className="auth-buttons">
        <Link href="/login" className="login-btn">
          Login
        </Link>

        <motion.div
          whileHover={{
            scale: 1.05,
            rotateX: 5,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/register" className="register-btn">
            Register
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Hamburger Button */}
      <button
        className={`menu-button ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Dropdown Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mobile-auth">
              <Link href="/login" className="mobile-login" onClick={closeMenu}>
                Login
              </Link>
              <Link href="/register" className="mobile-register" onClick={closeMenu}>
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;