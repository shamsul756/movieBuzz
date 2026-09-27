"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../movie.css";

const MovieChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "🎬 Hey there! I'm movieBot, your personal movie assistant. Ask me for recommendations or type a title to search!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const newMessages = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInputMessage("");
    setLoading(true);

    try {
      // Smart chatbot logic: Search TVMaze API if they look for a movie, or reply contextually
      let botResponse = "";
      const queryLower = userText.toLowerCase();

      if (queryLower.includes("hello") || queryLower.includes("hi")) {
        botResponse = "Hello! Looking for something thrilling to watch today? Try searching for a show or asking for recommendations.";
      } else if (queryLower.includes("recommend") || queryLower.includes("suggest") || queryLower.includes("good")) {
        botResponse = "I recommend checking out trending sci-fi or drama series like *Breaking Bad*, *Stranger Things*, or *Interstellar*!";
      } else {
        // Fetch matching movie from TVMaze API
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(userText)}`);
        const data = await res.json();

        if (data && data.length > 0) {
          const show = data[0].show;
          botResponse = `Found it! **${show.name}** (${show.premiered?.split("-")[0] || "N/A"}) is a ${show.genres?.join(", ")} show with a rating of ⭐ ${show.rating?.average || "N/A"}. Check out the main screen to explore it!`;
        } else {
          botResponse = `Hmm, I couldn't find any movie or show matching "${userText}". Try another title!`;
        }
      }

      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Oops! Something went wrong connecting to the cinematic database." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "25px", right: "25px", zIndex: 1000 }}>
      {/* Floating Toggle Button */}
      <motion.button
        className="stream-now-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          boxShadow: "0 10px 25px rgba(236, 72, 153, 0.4)",
          cursor: "pointer",
          border: "none",
        }}
      >
        {isOpen ? "✕" : "💬"}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            style={{
              position: "absolute",
              bottom: "75px",
              right: "0",
              width: "360px",
              height: "480px",
              background: "#0f172a",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Chat Header */}
            <div
              style={{
                padding: "16px",
                background: "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "20px" }}>🤖</span>
              <div>
                <h4 style={{ margin: "0", color: "#fff", fontSize: "16px" }}>CineBot Assistant</h4>
                <p style={{ margin: "0", color: "#94a3b8", fontSize: "12px" }}>Online & Ready to Help</p>
              </div>
            </div>

            {/* Messages Container */}
            <div
              style={{
                flex: 1,
                padding: "16px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    fontSize: "13px",
                    lineHeight: "1.4",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg, #ec4899, #8b5cf6)"
                        : "rgba(255, 255, 255, 0.06)",
                    color: "#fff",
                    border: msg.sender === "bot" ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                  }}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    background: "rgba(255, 255, 255, 0.06)",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    color: "#94a3b8",
                    fontSize: "12px",
                  }}
                >
                  CineBot is thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={handleSendMessage}
              style={{
                padding: "12px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                background: "#090d16",
                display: "flex",
                gap: "8px",
              }}
            >
              <input
                type="text"
                placeholder="Ask about a movie..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  color: "#fff",
                  outline: "none",
                  fontSize: "13px",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "#ec4899",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0 14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovieChatbot;