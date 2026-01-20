"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Audiowide } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const AudiowideFont = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const heroMessages = [
  "Welcome to Overcomers Chapel International",
  "The Mountain of Hope and Healing",
  "A Place of Worship, Word & Fellowship",
];

const words = [
  "HOPE",
  "HEALING",
  "WELCOME",
  "FAITH",
  "RESTORATION",
  "OVERCOMERS",
];

// simple, safe countdown (no libraries)
const getNextSunday = () => {
  const now = new Date();
  const next = new Date();
  next.setDate(now.getDate() + ((7 - now.getDay()) % 7));
  next.setHours(10, 0, 0, 0);
  if (now > next) next.setDate(next.getDate() + 7);
  return next.getTime();
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getNextSunday() - Date.now());

  // rotating hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroMessages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getNextSunday() - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60))

  return (
    <section className={`w-full overflow-hidden ${AudiowideFont.className}`}>
      {/* ================= VIDEO HERO ================= */}
      <div className="relative h-screen w-full">
        <video
          src="/Hero Section.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-white text-2xl md:text-4xl max-w-3xl leading-snug"
            >
              {heroMessages[index]}
            </motion.h1>
          </AnimatePresence>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/coming-soon"
              className="px-8 py-4 bg-white text-black rounded-md text-sm tracking-wide hover:bg-gray-200 transition"
            >
              Watch Latest Message
            </Link>

            <Link
              href="/coming-soon"
              className="px-8 py-4 border border-white text-white rounded-md text-sm tracking-wide hover:bg-white/10 transition"
            >
              Visit Our Church
            </Link>
          </div>

          {/* Countdown */}
          <div className="mt-12 text-white/70 text-xs tracking-widest">
            Next Service In · {days}d {hours}h {minutes}m
          </div>
        </div>
      </div>

      {/* ================= STICKY IMAGE + SCROLL WORDS ================= */}
      <div className="relative w-full">
        <div className="sticky top-0 w-full h-[40vh] md:h-[45vh]">
          <img
            src="/bent-knees-and-lifted-hands-g9e8cvz4-fc9c2baf821a91dbc6548e3d8b952fba.jpg"
            alt="Overcomers Chapel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap text-white text-4xl md:text-6xl tracking-widest font-semibold"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...words, ...words].map((word, i) => (
                <span key={i} className="mx-12">
                  {word}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Spacer for sticky effect */}
        <div className="" />
      </div>
    </section>
  );
}
