'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Audiowide, Inter } from "next/font/google"
import { ArrowRight, Sparkles, Calendar, LucideIcon, X, Heart, Users, Globe, Music, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const AudiowideFont = Audiowide({ weight: "400", subsets: ["latin"], display: "swap" });
const InterFont = Inter({ weight: ["200", "400", "600"], subsets: ["latin"] });

// --- Icons ---
const Flame = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
);

// --- Data ---
const welcomeImages = [
    { src: "/Untitled_design_9.jpg", title: "ATMOSPHERE", desc: "Experience the Presence", icon: Music },
    { src: "/connecting_1_graphic.jpg", title: "FELLOWSHIP", desc: "A Family Built on Love", icon: Users },
    { src: "/bent-knees-and-lifted-hands-g9e8cvz4-fc9c2baf821a91dbc6548e3d8b952fba.jpg", title: "THE WORD", desc: "Truth that Transforms", icon: Heart },
    { src: "/efam.jpg", title: "GLOBAL REACH", desc: "Impact Across Nations", icon: Globe },
    { src: "/Bible.jpg", title: "YOUR SEAT", desc: "We Have a Place for You", icon: MapPin },
    { src: "/Worship.jpg", title: "NEXT GEN", desc: "Equipping the Future", icon: Sparkles },
    { src: "/worship-praise-concept-christian-people-hand-rising-sunset-background-generative-ai_42331-7873.jpg", title: "PRAYER", desc: "Power in Agreement", icon: Flame },
    { src: "/efam.jpg", title: "OUTREACH", desc: "Reaching the Lost", icon: Globe },
];

const decrees = [
  {
    title: '2026 YEARLY DECREE',
    subtitle: 'The Prophetic Word',
    image: '/WhatsApp Image 2026-01-08 at 14.07.43.jpeg',
    icon: Sparkles
  },
  {
    title: 'JANUARY DECREE',
    subtitle: 'Current Monthly Word',
    image: '/WhatsApp Image 2026-01-08 at 14.07.44.jpeg',
    icon: Calendar
  }
];

export default function FinalOvercomersHome() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [hoveredBlade, setHoveredBlade] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.body.style.overflow = modalImage ? 'hidden' : 'unset';
  }, [modalImage]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section className={`bg-black ${InterFont.className} overflow-x-hidden relative selection:bg-fuchsia-500 no-scrollbar`}>
      
      {/* --- MODAL --- */}
      <AnimatePresence>
        {modalImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/98 flex items-center justify-center p-4 backdrop-blur-2xl"
            onClick={() => setModalImage(null)}
          >
            <button className="absolute top-6 right-6 text-white bg-white/10 p-4 rounded-full border border-white/20 z-[100001] hover:bg-fuchsia-600 transition-colors"><X size={32} /></button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              src={modalImage} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(217,70,239,0.3)] pointer-events-auto" 
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- PART 1: SEASONAL DECREES (Split-Blade Layout) --- */}
      <div className="relative w-full px-4 md:px-10 pt-24 pb-12 max-w-[1500px] mx-auto">
        <div className="mb-10 border-l-4 border-fuchsia-600 pl-6">
            <h2 className={`${AudiowideFont.className} text-white text-2xl tracking-[0.4em]`}>SEASONAL DECREES</h2>
            <p className="text-zinc-500 text-sm mt-1">The Prophetic word governing our year and month.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
          {decrees.map((decree, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredBlade(idx)}
              onMouseLeave={() => setHoveredBlade(null)}
              onClick={() => setModalImage(decree.image)}
              layout
              className={`relative h-[450px] md:h-[650px] overflow-hidden cursor-pointer flex-none w-full md:w-auto md:flex-1 transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${
                hoveredBlade === idx ? 'md:flex-[2.5]' : 'md:flex-[1]'
              }`}
            >
              <motion.img
                layout
                src={decree.image}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: hoveredBlade === idx ? 'brightness(0.7)' : 'brightness(0.35) grayscale(30%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/20 to-transparent z-10" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
                <div className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white w-fit">
                    <decree.icon size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white/60 text-[10px] md:text-xs tracking-[0.4em] uppercase">{decree.subtitle}</p>
                  <h3 className={`text-white leading-none ${AudiowideFont.className} text-3xl md:text-5xl lg:text-6xl`}>{decree.title}</h3>
                  <div className="md:hidden mt-4">
                    <button className="text-white text-[10px] font-bold tracking-widest bg-fuchsia-600 px-4 py-2 rounded-full">VIEW FULL DECREE</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- PART 2: 3D WELCOME HOME STAGE --- */}
      <div 
        ref={containerRef} onMouseMove={handleMouseMove}
        className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4"
        style={{ perspective: 2000 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center mb-16 z-50">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className={`${AudiowideFont.className} text-5xl md:text-9xl text-white tracking-tighter`}
           >
            WELCOME <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">HOME</span>
           </motion.h2>
           <p className="text-white/40 tracking-[0.3em] text-[10px] md:text-xs uppercase mt-4">You belong to a family of Overcomers</p>
        </div>

        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full max-w-6xl h-[450px] md:h-[600px] flex items-center justify-center"
        >
          {welcomeImages.map((img, i) => {
            const offset = i - activeIndex;
            const isCenter = i === activeIndex;
            
            return (
              <Link href="/connect" key={i}>
                <motion.div
                    initial={false}
                    animate={{
                        x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 380),
                        scale: isCenter ? 1 : 0.75,
                        z: isCenter ? 300 : -400,
                        rotateY: offset * -20,
                        opacity: Math.abs(offset) > 2 ? 0 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={`absolute w-[260px] h-[380px] md:w-[450px] md:h-[580px] rounded-[2.5rem] overflow-hidden cursor-pointer border-2 transition-all duration-500 group
                        ${isCenter ? 'border-fuchsia-500 shadow-[0_0_50px_rgba(217,70,239,0.4)]' : 'border-white/10 grayscale brightness-50 hover:brightness-75'}
                    `}
                >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-fuchsia-600/20 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-t from-purple-950/90 via-transparent to-transparent p-8 flex flex-col justify-end transition-all duration-500 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-fuchsia-600 p-2 rounded-lg shadow-lg">
                                 <img.icon className="text-white" size={20} />
                            </div>
                            <h4 className={`${AudiowideFont.className} text-white text-xl md:text-3xl`}>{img.title}</h4>
                        </div>
                        <p className="text-white/70 text-xs md:text-sm font-light uppercase tracking-widest">{img.desc}</p>
                        <div className="mt-4 flex items-center gap-2 text-fuchsia-400 text-[10px] font-bold tracking-tighter">
                            CLICK TO CONNECT <ArrowRight size={12} />
                        </div>
                    </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* CONTROLS */}
        <div className="flex items-center gap-8 mt-16 z-50">
          <button onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))} className="p-4 rounded-full border border-white/10 text-white hover:bg-fuchsia-600 transition-all active:scale-90">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {welcomeImages.map((_, i) => (
              <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-10 bg-fuchsia-500' : 'w-3 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
          <button onClick={() => setActiveIndex(Math.min(welcomeImages.length - 1, activeIndex + 1))} className="p-4 rounded-full border border-white/10 text-white hover:bg-fuchsia-600 transition-all active:scale-90">
            <ChevronRight size={24} />
          </button>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-20 z-50">
           <Link href="/connect">
                <button className="group px-12 py-5 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_10px_40px_rgba(217,70,239,0.3)] flex items-center gap-4">
                    PLAN YOUR VISIT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
           </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        /* Hide scrollbars for all browsers */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  )
}