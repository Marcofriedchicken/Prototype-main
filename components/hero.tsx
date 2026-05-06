"use client"

import { motion } from "framer-motion"
import { Calendar, Phone } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

interface HeroProps {
  onBookNow: () => void
}

export function Hero({ onBookNow }: HeroProps) {
  const { openModal } = useContactModal()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://media.base44.com/images/public/69e9eb1c459ecbf538b7c8eb/b1ca6fe3f_generated_e9fcbcc3.png')`,
          }}
        />
        {/* Dark overlay with vignette effect */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Subtitle */}
        <motion.p
          className="text-[#D4A843] text-sm md:text-base tracking-[0.3em] font-medium mb-6 mt-8 [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MARIKINA&apos;S PREMIER AUTO DETAILER
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-white block">PREMIUM</span>
          <span className="text-[#ED0407]">AUTO </span>
          <span className="text-white">DETAILING</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-[#D4A843] text-sm md:text-base tracking-[0.2em] font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          CLEAN CAR. CLEAR MIND. CASA STANDARD.
        </motion.p>

        {/* Services List */}
        <motion.p
          className="text-white/70 text-sm md:text-base mb-10 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ceramic Coating · Premium Carwash Wash · Paint Protection · Full Detailing · Engine Wash
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={onBookNow}
            className="inline-flex items-center justify-center gap-3 bg-[#ED0407] hover:bg-[#ED0407]/90 text-white px-8 py-4 rounded-md font-bold text-sm tracking-wide transition-colors duration-100 shadow-lg shadow-[#ED0407]/25"
            whileHover={{ scale: 1.02, transition: { duration: 0.12, ease: "easeOut" } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
          >
            <Calendar className="w-5 h-5" />
            BOOK NOW
          </motion.button>
          <motion.button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-3 border-2 border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843]/10 px-8 py-4 rounded-md font-bold text-sm tracking-wide transition-colors duration-100"
            whileHover={{ scale: 1.02, transition: { duration: 0.12, ease: "easeOut" } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
          >
            <Phone className="w-5 h-5" />
            0917-376-3348
          </motion.button>
        </motion.div>

        {/* Operating Hours */}
        <motion.p
          className="text-white/70 text-sm md:text-base mt-6 tracking-[0.2em] font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          7AM–8PM <span className="text-[#D4A843] mx-1">•</span> 7 DAYS
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  )
}
