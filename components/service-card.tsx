"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  price: string
  duration: string
  image: string
  features: string[]
  onBook: () => void
  index: number
  popular?: boolean
}

export function ServiceCard({ 
  title, 
  description, 
  price, 
  duration,
  image,
  features,
  onBook, 
  index,
  popular
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative flex h-full flex-col bg-[#111111] rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.12, ease: "easeOut" } }}
      style={{
        boxShadow: "0 0 0 1px rgba(42, 42, 42, 1)",
      }}
    >
      {/* Gold glow border on hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-out pointer-events-none z-20"
        style={{
          boxShadow: "0 0 18px rgba(212, 168, 67, 0.35), 0 0 28px rgba(212, 168, 67, 0.2), inset 0 0 0 1px rgba(212, 168, 67, 0.75)",
        }}
      />

      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-10 bg-[#ED0407] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg">
          Most Popular
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-150 ease-out group-hover:scale-[1.03]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 flex flex-1 flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#D4A843] transition-colors duration-100 ease-out">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-2.5 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
              <span className="text-[#ED0407] mt-1 flex-shrink-0 group-hover:text-[#D4A843] transition-colors duration-100 ease-out">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M5 0L6.12 3.88L10 5L6.12 6.12L5 10L3.88 6.12L0 5L3.88 3.88L5 0Z" />
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-5 mt-auto">
          <span className="text-white/50 text-xs tracking-wider uppercase">Starting at</span>
          <span className="text-[#D4A843] font-bold text-2xl">{price}</span>
        </div>
        <p className="text-[#D4A843] text-sm font-semibold mb-5">Duration: {duration}</p>

        {/* Book Button */}
        <motion.button
          onClick={onBook}
          className="w-full bg-[#ED0407] hover:bg-[#ED0407]/90 text-white py-3.5 rounded-md font-bold text-sm tracking-wider transition-colors duration-100"
          whileTap={{ scale: 0.98 }}
        >
          BOOK NOW
        </motion.button>
      </div>
    </motion.div>
  )
}
