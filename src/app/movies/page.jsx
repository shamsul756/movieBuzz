
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "../movie.css";

const MoviesPage = () => {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);

      try {
        let endpoint = "https://api.tvmaze.com/shows";

        if (searchQuery.trim() !== "") {
          endpoint = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
            searchQuery
          )}`;
        }

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Failed to fetch movies data.");
        }

        const data = await response.json();

        const formattedData =
          searchQuery.trim() !== ""
            ? data.map((item) => item.show)
            : data;

        setShows(formattedData.slice(0, 10));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchShows, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const saveMovie = (movie) => {
    try {
      const existingSaved = JSON.parse(
        localStorage.getItem("savedMovies") || "[]"
      );

      const isAlreadySaved = existingSaved.some(
        (saved) => saved.id === movie.id
      );

      if (!isAlreadySaved) {
        const updatedSaved = [...existingSaved, movie];

        localStorage.setItem(
          "savedMovies",
          JSON.stringify(updatedSaved)
        );

        alert(`Successfully saved "${movie.name}" to your library!`);
      } else {
        alert(`"${movie.name}" is already in your saved movies.`);
      }
    } catch (err) {
      console.error("Failed to save movie:", err);
      alert("An error occurred while saving the movie.");
    }
  };

  return (
    <main className="movies-container">

      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}

      <div className="movies-bg">
        <div className="ambient-orb orb-one"></div>
        <div className="ambient-orb orb-two"></div>
        <div className="ambient-orb orb-three"></div>

        <div className="grid-overlay"></div>

        <div className="floating-particles">
          {Array.from({ length: 35 }).map((_, i) => (
            <span
              key={i}
              className="movie-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="movies-hero-banner">

        <motion.div
          className="hero-light"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="movies-hero-text"
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="badge-pill">
            <span className="badge-dot"></span>
            CURATED CINEMATIC COLLECTION
          </div>

          <h1>
            Trending
            <br />
            <span>Masterpieces.</span>
          </h1>

          <p>
            Explore unforgettable stories, legendary characters,
            and cinematic experiences from around the world.
          </p>
        </motion.div>

        {/* SEARCH */}

        <motion.div
          className="search-wrapper"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >
          <div className="search-icon">
            ⌕
          </div>

          <input
            type="text"
            placeholder="Search your next cinematic experience..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="modern-search-input"
          />

          {searchQuery && (
            <motion.button
              className="reset-search"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSearchQuery("")}
            >
              ×
            </motion.button>
          )}

          <div className="search-glow"></div>
        </motion.div>
      </section>

      {/* =========================================
          LOADING
      ========================================= */}

      {loading && (
        <motion.div
          className="loader-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="ultra-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <p>Entering cinematic universe...</p>
        </motion.div>
      )}

      {/* =========================================
          ERROR
      ========================================= */}

      {error && (
        <motion.div
          className="loader-box error"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="error-icon">!</div>
          <p>System Error: {error}</p>
        </motion.div>
      )}

      {/* =========================================
          EMPTY
      ========================================= */}

      {!loading && !error && shows.length === 0 && (
        <motion.div
          className="loader-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="empty-icon">⌕</div>

          <h3>No cinematic results</h3>

          <p>
            Nothing found matching "{searchQuery}".
          </p>
        </motion.div>
      )}

      {/* =========================================
          MOVIE GRID
      ========================================= */}

      {!loading && !error && shows.length > 0 && (
        <motion.section
          className="movie-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <div className="section-heading">
            <div>
              <span>DISCOVER</span>
              <h2>
                {searchQuery
                  ? "Search Results"
                  : "Featured Collection"}
              </h2>
            </div>

            <div className="result-count">
              {shows.length} TITLES
            </div>
          </div>

          <div className="streaming-grid">

            {shows.map((show, index) => (
              <motion.article
                key={show.id}
                className="streaming-card"
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -14,
                  scale: 1.025,
                }}
                onClick={() => setSelectedMovie(show)}
              >

                <div className="card-image-box">

                  {show.image?.original || show.image?.medium ? (
                    <Image
                      src={
                        show.image.original ||
                        show.image.medium
                      }
                      alt={show.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 220px"
                      className="card-poster"
                    />
                  ) : (
                    <div className="fallback-poster">
                      🎬
                      <span>No Preview</span>
                    </div>
                  )}

                  <div className="poster-shine"></div>

                  <div className="card-overlay-gradient"></div>

                  <div className="rating-badge">
                    <span>★</span>
                    {show.rating?.average || "N/A"}
                  </div>

                  <div className="card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <motion.div
                    className="hover-play-indicator"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="play-circle">
                      ▶
                    </div>
                    <span>QUICK VIEW</span>
                  </motion.div>
                </div>

                <div className="card-details">

                  <h3>{show.name}</h3>

                  <div className="genre-row">
                    {show.genres?.slice(0, 2).map((genre) => (
                      <span
                        key={genre}
                        className="chip"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  <div className="card-bottom">
                    <span>
                      {show.premiered?.split("-")[0] ||
                        "N/A"}
                    </span>

                    <span>
                      {show.status || "Unknown"}
                    </span>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}

      {/* =========================================
          CINEMATIC MODAL
      ========================================= */}

      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            className="cinema-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMovie(null)}
          >

            <motion.div
              className="cinema-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.82,
                y: 80,
                rotateX: 8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 50,
              }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
              }}
            >

              {/* Close */}

              <button
                className="close-modal-btn"
                onClick={() => setSelectedMovie(null)}
              >
                ×
              </button>

              <div className="modal-glow"></div>

              <div className="modal-inner-grid">

                {/* POSTER */}

                <div className="modal-poster-side">

                  {selectedMovie.image?.original ? (
                    <Image
                      src={selectedMovie.image.original}
                      alt={selectedMovie.name}
                      fill
                      sizes="320px"
                      className="modal-main-poster"
                    />
                  ) : (
                    <div className="fallback-poster">
                      🎬
                    </div>
                  )}

                  <div className="modal-poster-shade"></div>

                </div>

                {/* INFORMATION */}

                <div className="modal-info-side">

                  <span className="modal-category">
                    FEATURED CINEMATIC
                  </span>

                  <h2>{selectedMovie.name}</h2>

                  <div className="meta-stats-row">

                    <span className="stat-pill">
                      📅{" "}
                      {selectedMovie.premiered?.split(
                        "-"
                      )[0] || "N/A"}
                    </span>

                    <span className="stat-pill">
                      ★{" "}
                      {selectedMovie.rating?.average ||
                        "N/A"}
                    </span>

                    <span className="stat-pill">
                      ● {selectedMovie.status || "N/A"}
                    </span>

                  </div>

                  <div className="genre-row modal-genres">
                    {selectedMovie.genres?.map((genre) => (
                      <span
                        key={genre}
                        className="chip"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  <div
                    className="synopsis-text"
                    dangerouslySetInnerHTML={{
                      __html:
                        selectedMovie.summary ||
                        "No description available.",
                    }}
                  />

                  <div className="modal-actions">

                    <button
                      className="stream-now-btn"
                      onClick={() =>
                        saveMovie(selectedMovie)
                      }
                    >
                      <span>＋</span>
                      Save to Library
                    </button>

                    <Link
                      href="/saved"
                      className="saved-btn"
                    >
                      🎬 Saved Movies
                      <span>→</span>
                    </Link>

                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MoviesPage;




