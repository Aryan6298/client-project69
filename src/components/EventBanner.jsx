// src/components/EventBanner.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_DATES = [
  {
    name: "New Year",
    month: 0,
    date: 1,
    emoji: "🎉",
    message: "Wishing you a prosperous and green year ahead!"
  },
  {
    name: "World Wildlife Day",
    month: 2,
    date: 3,
    emoji: "🐘",
    message: "Let's protect our planet's amazing wildlife!"
  },
  {
    name: "World Water Day",
    month: 2,
    date: 22,
    emoji: "💧",
    message: "Every drop counts. Save water, save life!"
  },
  {
    name: "Holi",
    month: 2,
    date: 25,
    emoji: "🌈",
    message: "Splash joy, color, and sustainability!"
  },
  {
    name: "Earth Day",
    month: 3,
    date: 22,
    emoji: "🌍",
    message: "Small acts, big impact. Love your Earth!"
  },
  {
    name: "Biodiversity Day",
    month: 4,
    date: 22,
    emoji: "🧬",
    message: "Celebrate the rich life forms of our Earth!"
  },
  {
    name: "World Environment Day",
    month: 5,
    date: 5,
    emoji: "🌱",
    message: "One Earth. One future. Act now!"
  },
  {
    name: "World Oceans Day",
    month: 5,
    date: 8,
    emoji: "🌊",
    message: "Protect our blue planet!"
  },
  {
    name: "Diwali",
    month: 10,
    date: 1,
    emoji: "🪔",
    message: "Light up lives, not pollution!"
  }
];

const EventBanner = () => {
  const [event, setEvent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();

    const foundEvent = EVENT_DATES.find((ev) => {
      return (
        (ev.date === todayDate && ev.month === todayMonth) ||
        (ev.date === todayDate - 1 && ev.month === todayMonth)
      );
    });

    if (foundEvent) {
      setEvent(foundEvent);
      setShowBanner(window.scrollY === 0);
      document.body.style.paddingTop = "65px";
    }
  }, []);

  useEffect(() => {
    if (!event) return;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowBanner(true);
        document.body.style.paddingTop = "65px";
      } else {
        setShowBanner(false);
        document.body.style.paddingTop = "0px";
      }
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
            background: "linear-gradient(to right, #00c6ff, #0072ff)",
            color: "#fff",
            padding: "1rem",
            textAlign: "center",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 10000,
            fontSize: "1.1rem",
            fontWeight: "500",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
          }}
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ marginRight: "10px", fontSize: "1.5rem" }}
          >
            {event.emoji}
          </motion.span>
          Celebrating <strong>{event.name}</strong> — {event.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventBanner;
