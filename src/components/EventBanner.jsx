// src/components/EventBanner.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_DATES = [
  { name: "New Year", month: 0, date: 1, emoji: "🎉", message: "Wishing you a prosperous and green year ahead!" },
  { name: "World Wildlife Day", month: 2, date: 3, emoji: "🐘", message: "Let's protect our planet's amazing wildlife!" },
  { name: "World Water Day", month: 2, date: 22, emoji: "💧", message: "Every drop counts. Save water, save life!" },
  { name: "Holi", month: 2, date: 25, emoji: "🌈", message: "Splash joy, color, and sustainability!" },
  { name: "Earth Day", month: 3, date: 22, emoji: "🌍", message: "Small acts, big impact. Love your Earth!" },
  { name: "Biodiversity Day", month: 4, date: 22, emoji: "🧬", message: "Celebrate the rich life forms of our Earth!" },
  { name: "World Environment Day", month: 5, date: 5, emoji: "🌱", message: "One Earth. One future. Act now!" },
  { name: "World Oceans Day", month: 5, date: 8, emoji: "🌊", message: "Protect our blue planet!" },
  { name: "Diwali", month: 10, date: 1, emoji: "🪔", message: "Light up lives, not pollution!" },
];

const EventBanner = () => {
  const [event, setEvent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const today = new Date();
    const foundEvent = EVENT_DATES.find(
      (ev) =>
        (ev.date === today.getDate() && ev.month === today.getMonth()) ||
        (ev.date === today.getDate() - 1 && ev.month === today.getMonth())
    );
    if (foundEvent) {
      setEvent(foundEvent);
      setShowBanner(window.scrollY === 0);
      document.body.style.paddingTop = "60px";
    }
  }, []);

  useEffect(() => {
    if (!event) return;
    const handleScroll = () => {
      setShowBanner(window.scrollY === 0);
      document.body.style.paddingTop = window.scrollY === 0 ? "60px" : "0px";
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.paddingTop = "0px";
    };
  }, [event]);

  return (
    <AnimatePresence>
      {event && showBanner && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={{
            background: "rgb(118, 177, 69)",
            color: "#064420",
            padding: "1rem 1.5rem",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 10000,
            fontWeight: 600,
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ fontSize: "1.8rem", lineHeight: 1 }}
            aria-label={`${event.name} emoji`}
            role="img"
          >
            {event.emoji}
          </motion.span>
          <span
            style={{
              textAlign: "center",
              wordBreak: "break-word",
              maxWidth: "100%",
              fontSize: "1.1rem",
            }}
          >
            Celebrating <strong>{event.name}</strong> — {event.message}
          </span>

          <style>
            {`
              @media (max-width: 600px) {
                div[style*="position: fixed"] {
                  font-size: 3.2vw !important;
                  padding: 2vw !important;
                }
              }

              @media (max-width: 450px) {
                div[style*="position: fixed"] {
                  flex-direction: column !important;
                  font-size: 3.5vw !important;
                  padding: 2vw 4vw !important;
                  gap: 1vw !important;
                }

                div[style*="position: fixed"] > span {
                  font-size: 3.2vw !important;
                  white-space: normal !important;
                  line-height: 1.3;
                  max-width: 100%;
                  text-align: center;
                }

                div[style*="position: fixed"] > span:first-child {
                  font-size: 5vw !important;
                }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventBanner;
