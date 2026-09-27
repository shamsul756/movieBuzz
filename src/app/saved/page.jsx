"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "../saved.css"

const SavedPage = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    try {
      const storedMovies = JSON.parse(
        localStorage.getItem("savedMovies") || "[]"
      );

      setSavedMovies(storedMovies);
    } catch (error) {
      console.error("Failed to load saved movies:", error);
      setSavedMovies([]);
    }
  }, []);

  const removeMovie = (movieId) => {
    const updatedMovies = savedMovies.filter(
      (movie) => movie.id !== movieId
    );

    setSavedMovies(updatedMovies);

    localStorage.setItem(
      "savedMovies",
      JSON.stringify(updatedMovies)
    );
  };

  return (
    <main className="saved-page">

      {/* Background effects */}
      <div className="saved-glow glow-one"></div>
      <div className="saved-glow glow-two"></div>


      {/* ================= HEADER ================= */}

      <motion.header
        className="saved-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="saved-badge">
           MY COLLECTION
        </div>

        <h1>
          Your <span>Saved Movies</span>
        </h1>

        <p>
          Keep your favorite cinematic experiences in one place.
        </p>

        <div className="saved-header-bottom">

          <div className="movie-count">
            <strong>{savedMovies.length}</strong>
            <span>
              {savedMovies.length === 1
                ? "Saved Movie"
                : "Saved Movies"}
            </span>
          </div>

          <Link
            href="/movies"
            className="explore-btn"
          >
            🎬 Explore Movies
          </Link>

        </div>
      </motion.header>


      {/* ================= EMPTY STATE ================= */}

      {savedMovies.length === 0 && (
        <motion.section
          className="empty-state"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5
          }}
        >

          <motion.div
            className="empty-icon"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            🎬
          </motion.div>

          <h2>Your collection is empty</h2>

          <p>
            Discover amazing movies and save the ones
            you don't want to forget.
          </p>

          <Link
            href="/movies"
            className="browse-btn"
          >
            Start Exploring →
          </Link>

        </motion.section>
      )}


      {/* ================= SAVED MOVIES ================= */}

      {savedMovies.length > 0 && (
        <motion.section
          className="saved-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <AnimatePresence>

            {savedMovies.map((movie, index) => (

              <motion.article
                key={movie.id}
                className="saved-card"

                initial={{
                  opacity: 0,
                  y: 40
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30
                }}

                transition={{
                  duration: 0.45,
                  delay: index * 0.06
                }}

                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                  scale: 1.02
                }}
              >

                {/* Poster */}

                <div className="saved-poster-wrapper">

                  {movie.image?.original ||
                  movie.image?.medium ? (

                    <Image
                      src={
                        movie.image.original ||
                        movie.image.medium
                      }
                      alt={movie.name}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                      className="saved-poster"
                    />

                  ) : (

                    <div className="saved-no-image">
                      🎬
                      <span>No Image</span>
                    </div>

                  )}

                  <div className="poster-gradient"></div>


                  {/* Rating */}

                  <div className="saved-rating">
                    ⭐ {movie.rating?.average || "N/A"}
                  </div>


                  {/* Saved badge */}

                  <div className="saved-label">
                     SAVED
                  </div>

                </div>


                {/* Card information */}

                <div className="saved-info">

                  <h3>
                    {movie.name}
                  </h3>


                  <div className="saved-meta">

                    <span>
                      📅{" "}
                      {movie.premiered
                        ? movie.premiered.split("-")[0]
                        : "Unknown"}
                    </span>

                    <span>
                      📺 {movie.status || "Show"}
                    </span>

                  </div>


                  {/* Genres */}

                  {movie.genres?.length > 0 && (

                    <div className="saved-genres">

                      {movie.genres
                        .slice(0, 2)
                        .map((genre) => (

                          <span
                            key={genre}
                            className="genre-chip"
                          >
                            {genre}
                          </span>

                        ))}

                    </div>

                  )}


                  {/* Remove */}

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeMovie(movie.id)
                    }
                  >
                    <span>🗑</span>
                    Remove from Saved
                  </button>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.section>
      )}

    </main>
  );
};

export default SavedPage;