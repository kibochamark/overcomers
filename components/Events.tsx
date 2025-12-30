"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Audiowide, Inter } from "next/font/google";
import { MapPin, Clock } from "lucide-react";

const AudiowideFont = Audiowide({ weight: "400", subsets: ["latin"] });
const InterFont = Inter({ weight: ["200", "400", "600"], subsets: ["latin"] });

const events = [
  {
    title: "Monthly Decree",
    subtitle: "January 2025",
    description:
      "Our prophetic word for the month. A season of supernatural overflow and divine positioning.",
    image: "/mantles.jpg",
    location: "Main Sanctuary",
  },
  {
    title: "Night of Power",
    subtitle: "Friday Night Service",
    description:
      "An intensive atmosphere of worship, deliverance, and the raw power of God.",
    image: "/soothing.jpg",
    location: "Main Sanctuary",
  },
  {
    title: "Youth Ignite",
    subtitle: "Next Gen",
    description:
      "Gathering the fire-brand generation for a time of radical encounter.",
    image: "/efam.jpg",
    location: "Youth Hall",
  },
];

export default function ChurchLifeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    /* -mt-[10px] pulls it up to overlap the previous section.
       The border-t-[10px] fills that overlap with solid black.
    */
    <section
      ref={containerRef}
      className="relative bg-black -mt-[530px] border-t-[10px] border-black z-[60] w-full"
      style={{ height: "350vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* IMAGES */}
        <div className="absolute inset-0 w-full h-full">
          {events.map((event, i) => (
            <BackgroundImage
              key={`bg-${i}`}
              index={i}
              total={events.length}
              progress={scrollYProgress}
              src={event.image}
            />
          ))}
        </div>

        {/* PINNED TITLE - Responsive Text Size */}
        <div className="relative z-30 pt-8 md:pt-12 px-6 md:px-12">
          <h2
            className={`text-3xl md:text-8xl text-white ${AudiowideFont.className} tracking-tighter uppercase leading-none`}
          >
            CHURCH <span className="italic">LIFE</span>
          </h2>
        </div>

        {/* CONTENT OVERLAY - Mobile Padding Adjusted */}
        <div className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-10 md:pb-20">
          {events.map((event, i) => (
            <EventText
              key={`text-${i}`}
              index={i}
              total={events.length}
              progress={scrollYProgress}
              event={event}
            />
          ))}
        </div>

        {/* MOBILE-FRIENDLY PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-40">
          <motion.div
            className="h-full bg-amber-500 origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}

function BackgroundImage({
  index,
  total,
  progress,
  src,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  src: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, end], [1.1, 1.2]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        style={{ scale }}
        src={src}
        className="w-full h-full object-cover"
        alt=""
      />
      {/* Darkened overlay for mobile readability */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </motion.div>
  );
}

function EventText({
  index,
  total,
  progress,
  event,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  event: any;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start + 0.05, start + 0.15, end - 0.15, end - 0.05],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start + 0.05, start + 0.15], [30, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-10 md:bottom-20 left-0 right-0 w-full"
    >
      <div className="max-w-4xl px-2">
        <span className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-3 md:mb-5 block">
          {event.subtitle}
        </span>
        <h3
          className={`text-4xl md:text-9xl text-white mb-4 md:mb-8 leading-[0.9] tracking-tighter ${AudiowideFont.className}`}
        >
          {event.title}
        </h3>
        <p
          className={`text-gray-300 text-xs md:text-xl font-light max-w-2xl leading-relaxed italic border-l border-amber-500 pl-4 md:pl-6 ${InterFont.className}`}
        >
          {event.description}
        </p>
        <div className="mt-6 flex gap-4 md:gap-8 items-center text-[9px] md:text-xs text-white/40 uppercase tracking-widest font-semibold">
          <span className="flex items-center gap-2">
            <MapPin size={12} className="text-amber-500" /> {event.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={12} className="text-amber-500" /> 09:00 AM
          </span>
        </div>
      </div>
    </motion.div>
  );
}
