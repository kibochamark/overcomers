"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Audiowide, Inter } from "next/font/google";

const AudiowideFont = Audiowide({ weight: "400", subsets: ["latin"] });
const InterFont = Inter({ weight: ["200", "400", "600"], subsets: ["latin"] });

const leaders = [
  {
    name: "Bishop Dr. Steve Matara",
    role: "Presiding Bishop",
    image: "/Bishop steve.jpg",
  },
  {
    name: "Pastor Tabby",
    role: "Senior Pastor",
    image: "/pastor tabby.jpg",
  },
  {
    name: "Elder Charles",
    role: "Church Elder",
    image: "https://assets.aceternity.com/pro/hero-sections.png",
  },
  {
    name: "Elder George",
    role: "Church Elder",
    image: "/elder gorge.jpg",
  },
  {
    name: "Elder Francis",
    role: "Church Elder",
    image: "/elder francis.jpg",
  },
  {
    name: "Men Chairman",
    role: "Men's Ministry",
    image: "/chairman again.jpg",
  },
  {
    name: "Women Chairlady",
    role: "Women's Ministry",
    image: "/chairlady2.jpg",
  },
];

export default function LeadershipSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col md:flex-row items-center">
      {/* 1. DYNAMIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {activeImage && (
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={activeImage}
                alt="Leader Background"
                className="w-full h-full object-cover grayscale-[50%]"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Default dark state if no hover */}
        {!activeImage && <div className="absolute inset-0 bg-[#0a0a0a]" />}
      </div>

      {/* 2. LEFT SIDE: SECTION TITLE */}
      <div className="relative z-10 w-full md:w-1/2 p-8 md:p-20">
        <h2
          className={`${AudiowideFont.className} text-4xl md:text-7xl text-white leading-none tracking-tighter`}
        >
          OVERCOMERS <br />
          <span className="text-amber-500 opacity-80">LEADERSHIP</span>
        </h2>
        <p
          className={`${InterFont.className} text-gray-400 mt-6 max-w-sm font-light italic border-l border-amber-500 pl-4`}
        >
          Hover over our leaders to learn more about the hearts behind the
          vision.
        </p>
      </div>

      {/* 3. RIGHT SIDE: THE LIST */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-20 py-10 flex flex-col items-start md:items-end gap-2">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveImage(leader.image)}
            onMouseLeave={() => setActiveImage(null)}
            onClick={() =>
              setActiveImage(activeImage === leader.image ? null : leader.image)
            } // Mobile toggle
            className="group relative cursor-pointer py-2 w-full md:w-auto text-left md:text-right"
          >
            {/* Role Label */}
            <span className="block text-[10px] uppercase tracking-[0.3em] text-amber-500/60 mb-1 font-bold">
              {leader.role}
            </span>

            {/* Name with Animated Underline */}
            <h3
              className={`${AudiowideFont.className} text-2xl md:text-5xl text-white transition-colors duration-300 group-hover:text-amber-500`}
            >
              {leader.name}
            </h3>

            {/* The BG Underline (Fills from Left) */}
            <div className="absolute bottom-0 left-0 md:left-auto md:right-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />

            {/* Mobile specific image reveal (shown only on small screens when active) */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ${
                activeImage === leader.image ? "h-48 mt-4" : "h-0"
              }`}
            >
              <img
                src={leader.image}
                className="w-full h-full object-cover rounded-lg"
                alt={leader.name}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. DECORATIVE SIDEBAR */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20">
        <div className="h-32 w-[1px] bg-white" />
        <span className="rotate-90 text-white text-[10px] tracking-[1em] uppercase">
          Hierarchy
        </span>
        <div className="h-32 w-[1px] bg-white" />
      </div>
    </section>
  );
}
