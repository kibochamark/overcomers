'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Audiowide, Inter } from "next/font/google"
import { Users, Church, MapPin, MonitorPlay, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const AudiowideFont = Audiowide({ weight: "400", subsets: ["latin"], display: "swap" });
const InterFont = Inter({ weight: ["200", "400"], subsets: ["latin"] });

const cards = [
  {
    title: 'Connect With Us',
    description: 'Find your people and grow in faith with a community that cares.',
    icon: <Users className="w-5 h-5" />,
    link: '/coming-soon',
    size: 'md:col-span-2', 
    image: '/connecting_1_graphic.jpg',
    baseColor: 'bg-[#1a237e]' // Deep Professional Blue
  },
  {
    title: 'Our Services',
    description: 'Experience powerful worship and transformative messages.',
    icon: <Church className="w-5 h-5" />,
    link: '/coming-soon',
    size: 'md:col-span-1',
    image: '/services.jpg',
    baseColor: 'bg-[#4a148c]' // Deep Professional Purple
  },
  {
    title: 'Location',
    description: 'Visit us in person. We have a seat saved just for you.',
    icon: <MapPin className="w-5 h-5" />,
    link: '/coming-soon',
    size: 'md:col-span-1',
    image: '/location.jpg',
    baseColor: 'bg-[#004d40]' // Deep Professional Teal
  },
  {
    title: 'eFam Online',
    description: 'No matter where you are, you are part of the family.',
    icon: <MonitorPlay className="w-5 h-5" />,
    link: '/coming-soon',
    size: 'md:col-span-2',
    image: '/efam.jpg',
    baseColor: 'bg-[#3e2723]' // Deep Professional Earth/Brown
  }
];

export default function WelcomeHomeSection() {
  return (
    /* 1. FIX SPACE: Changed from margin to absolute positioning for the start of the section 
       to ensure it sits exactly where the Hero ends with ZERO gap. */
    <section className={`bg-black pb-26 ${InterFont.className}`} style={{ marginTop: '-120px' }}>
      
      <div className="max-w-10xl mx-auto px-6">
        
        {/* Header Section: Very Visible and Clean */}
        <div className="mb-12 flex flex-col items-start border-l-4 border-white pl-8">
          <h2 className={`text-4xl md:text-6xl text-white mb-3 tracking-tighter ${AudiowideFont.className}`}>
            WELCOME <span className="text-white">HOME</span>
          </h2>
          <p className="max-w-2xl text-white text-base md:text-lg font-light leading-relaxed opacity-90">
            Explore our community, join our services, or find us online. 
            There is a place for you here at Overcomers Chapel International.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <Link href={card.link} key={index} className={card.size}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`group relative h-[320px] rounded-3xl overflow-hidden border border-white/10 ${card.baseColor} flex flex-col justify-end p-10 transition-all duration-500`}
              >
                {/* IMAGE REVEAL: Strictly hidden (opacity-0) and only shows DIMLY on hover */}
                <div 
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                
                {/* Gradient Overlay for professional depth */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Content Layer: Always Very Visible */}
                <div className="relative z-20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-white/20 text-white backdrop-blur-md">
                      {card.icon}
                    </div>
                    <h3 className={`text-2xl text-white font-normal ${AudiowideFont.className} tracking-wide`}>
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-white text-sm font-normal leading-relaxed mb-8 max-w-[90%] opacity-100">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-white">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}