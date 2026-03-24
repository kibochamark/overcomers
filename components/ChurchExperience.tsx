'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Audiowide, Inter } from "next/font/google"
import { 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  X, 
  Heart, 
  Users, 
  Globe, 
  Music, 
  Zap,
  ChevronLeft, 
  ChevronRight, 
  MoveRight
} from 'lucide-react'
import Link from 'next/link'

const AudiowideFont = Audiowide({ weight: "400", subsets: ["latin"], display: "swap" });
const InterFont = Inter({ weight: ["200", "400", "600"], subsets: ["latin"] });

const decrees = [
  {
    id: 'yearly-decree-2026',
    title: '2026 DECREE',
    subtitle: 'Yearly Prophetic',
    image: '/WhatsApp Image 2026-01-08 at 14.07.43.jpeg',
    icon: Sparkles,
    description: "Divine Acceleration with supernatural favor and uncontainable blessings.",
    cta: 'READ DECREE'
  },
  {
    id: 'monthly-decree-march',
    title: 'MARCH DECREE',
    subtitle: 'Monthly Prophetic',
    image: '/WhatsApp Image 2026-01-08 at 14.07.44.jpeg',
    icon: Calendar,
    description: "Fresh Fire and Consecration. A mighty outpouring of the Spirit upon all flesh.",
    cta: 'READ MORE'
  }
];

const welcomeCards = [
    { id: 1, title: 'Sunday Service', tag: '9AM & 11AM', description: "Experience worship and transformative teaching for all ages.", href: '/visit', image: '/Untitled_design_9.jpg', icon: Music },
    { id: 2, title: 'Life Groups', tag: 'Fellowship', description: "Authentic community where you are known, loved, and challenged to grow.", href: '/connect', image: '/connecting_1_graphic.jpg', icon: Users },
    { id: 3, title: 'Youth Ministry', tag: 'Fridays 6PM', description: 'Empowering the next generation to lead with fire and integrity.', href: '/youth', image: '/efam.jpg', icon: Zap },
    { id: 4, title: 'Worship Arts', tag: 'Creative Team', description: 'Music and sound that stirs the spirit and ministers to the heart of God.', href: '/media', image: '/Worship.jpg', icon: Music },
    { id: 5, title: 'Prayer Force', tag: 'Daily Intercession', description: 'The engine room standing in the gap for our families and city.', href: '/prayer', image: '/worship-praise-concept-christian-people-hand-rising-sunset-background-generative-ai_42331-7873.jpg', icon: Heart },
    { id: 6, title: 'Global Impact', tag: 'Outreach', description: "Taking the gospel to the ends of the earth through missions and transformation.", href: '/outreach', image: '/efam.jpg', icon: Globe },
];

export default function FinalOvercomersHome() {
  const [decreeIndex, setDecreeIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const secondaryTrackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const posRef2 = useRef(0);
  
  const CARD_WIDTH_MOBILE = 190;
  const CARD_WIDTH_DESKTOP = 320;
  const MARGIN = 16;
  const TOTAL_SET_WIDTH_MOBILE = welcomeCards.length * (CARD_WIDTH_MOBILE + MARGIN);
  const TOTAL_SET_WIDTH_DESKTOP = welcomeCards.length * (CARD_WIDTH_DESKTOP + MARGIN);

  const tick = useCallback(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const speed = 0.25;
    const totalWidth = isMobile ? TOTAL_SET_WIDTH_MOBILE : TOTAL_SET_WIDTH_DESKTOP;

    posRef.current -= speed;
    posRef2.current -= speed;

    if (Math.abs(posRef.current) >= totalWidth) {
        posRef.current = 0;
    }
    if (Math.abs(posRef2.current) >= totalWidth) {
        posRef2.current = 0;
    }

    if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
    if (secondaryTrackRef.current) {
        secondaryTrackRef.current.style.transform = `translateX(${posRef2.current + totalWidth}px)`;
    }

    requestAnimationFrame(tick);
  }, [TOTAL_SET_WIDTH_MOBILE, TOTAL_SET_WIDTH_DESKTOP]);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [tick]);

  useEffect(() => {
    document.body.style.overflow = (selectedCard || modalImage) ? 'hidden' : 'unset';
  }, [selectedCard, modalImage]);

  const handleNextDecree = () => setDecreeIndex((prev) => (prev + 1) % decrees.length);
  const handlePrevDecree = () => setDecreeIndex((prev) => (prev - 1 + decrees.length) % decrees.length);

  return (
    <section className={`bg-black ${InterFont.className} min-h-screen text-white overflow-x-hidden selection:bg-fuchsia-500 no-scrollbar relative`}>
      
      <AnimatePresence>
        {modalImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-3xl"
            onClick={() => setModalImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-[10001]">
                <X size={32} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.8, rotate: -2 }} animate={{ scale: 1, rotate: 0 }}
              src={modalImage} className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full px-3 md:px-8 pt-20 pb-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6 px-2">
          <div className="border-l-[4px] border-fuchsia-600 pl-6">
            <h2 className={`${AudiowideFont.className} text-2xl md:text-4xl tracking-[0.2em] uppercase`}>Decrees</h2>
            <p className="text-zinc-500 text-xs md:text-sm mt-2 font-extralight tracking-widest">Prophetic Words</p>
          </div>
          <div className="flex gap-4">
            <button onClick={handlePrevDecree} className="p-3 rounded-full border border-white/10 text-white hover:bg-fuchsia-600 hover:scale-105 transition-all duration-300">
                <ChevronLeft size={20} />
            </button>
            <button onClick={handleNextDecree} className="p-3 rounded-full border border-white/10 text-white hover:bg-fuchsia-600 hover:scale-105 transition-all duration-300">
                <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px] md:h-[500px] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-sm">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={decreeIndex}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex flex-col md:flex-row"
                >
                    <div className="w-full md:w-1/2 h-[220px] md:h-full relative overflow-hidden group">
                        <img 
                            src={decrees[decreeIndex].image} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 cursor-pointer" 
                            alt="Decree" 
                            onClick={() => setModalImage(decrees[decreeIndex].image)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
                    </div>
                    
                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-start">
                        <motion.span 
                            initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="text-fuchsia-500 tracking-[0.3em] text-xs font-bold uppercase mb-3 flex items-center gap-2"
                        >
                           {React.createElement(decrees[decreeIndex].icon, { size: 14 })} {decrees[decreeIndex].subtitle}
                        </motion.span>
                        <h3 className={`${AudiowideFont.className} text-xl md:text-3xl mb-3 leading-tight`}>{decrees[decreeIndex].title}</h3>
                        <p className="text-zinc-400 font-light leading-relaxed mb-4 max-w-md text-xs md:text-sm">{decrees[decreeIndex].description}</p>
                        
                        <Link href="/decrees" className="group flex items-center gap-3 text-white font-bold tracking-[0.2em] text-xs md:text-sm">
                            <span className="border-b-[2px] border-fuchsia-600 pb-1 transition-all group-hover:border-white">{decrees[decreeIndex].cta}</span>
                            <MoveRight className="group-hover:translate-x-2 transition-transform text-fuchsia-500" size={18} />
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>

      <div className="relative w-full py-16 md:py-20 overflow-hidden">
        <div className="text-center mb-12 z-50 relative px-4">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                className={`${AudiowideFont.className} text-5xl md:text-8xl text-white tracking-tight leading-[0.9] mb-4`}
            >
                WELCOME <span className="text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-500 to-purple-900">HOME</span>
            </motion.h2>
            <p className="text-white/30 tracking-[0.6em] text-[8px] md:text-xs uppercase">Family · Power · Purpose</p>
        </div>

        <div 
            className="relative h-[220px] md:h-[360px] w-full flex items-center"
        >
            <div ref={trackRef} className="absolute inset-0 flex gap-4 px-3 md:px-6 items-center whitespace-nowrap">
                {welcomeCards.concat(welcomeCards).map((card, idx) => (
                    <MarqueeCard key={`trackA-${idx}`} card={card} onSelect={setSelectedCard} />
                ))}
            </div>
            <div ref={secondaryTrackRef} className="absolute inset-0 flex gap-4 px-3 md:px-6 items-center whitespace-nowrap">
                {welcomeCards.concat(welcomeCards).map((card, idx) => (
                    <MarqueeCard key={`trackB-${idx}`} card={card} onSelect={setSelectedCard} />
                ))}
            </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCard && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-8 bg-black/90 backdrop-blur-xl"
                onClick={() => setSelectedCard(null)}
            >
                <motion.div 
                    initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 250 }}
                    className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-fuchsia-500/30"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setSelectedCard(null)} 
                        className="absolute top-4 right-4 text-white z-[10000] p-2 rounded-full bg-black/70 hover:bg-fuchsia-600 transition-all hover:scale-110"
                    >
                        <X size={24}/>
                    </button>
                    
                    <div className="w-full md:w-1/2 h-[240px] md:h-auto relative overflow-hidden group">
                        <img src={selectedCard.image} className="absolute inset-0 w-full h-full object-cover" alt={selectedCard.title} />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent hidden md:block" />
                    </div>
                    
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-start">
                        <span className="text-fuchsia-400 tracking-[0.4em] text-xs uppercase mb-3 font-bold flex items-center gap-2">
                            {React.createElement(selectedCard.icon, { size: 16 })} {selectedCard.tag}
                        </span>
                        <h3 className={`${AudiowideFont.className} text-2xl md:text-4xl text-white mb-4 leading-tight`}>{selectedCard.title}</h3>
                        <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed mb-8">{selectedCard.description}</p>
                        
                        <Link href={selectedCard.href} onClick={() => setSelectedCard(null)} className="group flex items-center gap-3 w-fit">
                            <span className="text-white font-bold text-xs md:text-sm border-b-[2px] border-fuchsia-600 pb-1 tracking-[0.15em] uppercase">Learn More</span>
                            <div className="bg-fuchsia-600 p-2 rounded-full group-hover:translate-x-2 transition-transform">
                                <ArrowRight size={16} className="text-white" />
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; background-color: black; }
        img { image-rendering: -webkit-optimize-contrast; }
      `}</style>

    </section>
  )
}

function MarqueeCard({ card, onSelect }: { card: any, onSelect: (c: any) => void }) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onSelect(card);
    };

    return (
        <motion.div 
            onClick={handleClick}
            className="w-[180px] md:w-[300px] h-[180px] md:h-[330px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-fuchsia-500/80 hover:shadow-[0_0_50px_rgba(217,70,239,0.3)]"
        >
            <img 
                src={card.image} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110" 
                alt={card.title}
            />
            
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                <span className="text-fuchsia-400 text-[8px] md:text-xs tracking-[0.3em] uppercase mb-2 block font-bold">{card.tag}</span>
                <h4 className={`${AudiowideFont.className} text-sm md:text-xl text-white leading-tight mb-2`}>{card.title}</h4>
                <p className="text-white/60 text-[7px] md:text-xs leading-relaxed mb-3 line-clamp-2">{card.description}</p>
                <div className="flex items-center gap-2 text-white/50 group-hover:text-fuchsia-400 transition-colors text-[7px] md:text-xs tracking-[0.2em] font-bold uppercase">
                    View Details <ArrowRight size={12} />
                </div>
            </div>
        </motion.div>
    )
}