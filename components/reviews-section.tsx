"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Carlos Santos",
    car: "Toyota Fortuner",
    rating: 5,
    review: "Incredible attention to detail! My Fortuner looks brand new after their ceramic coating service. Highly recommended!",
    avatar: "CS",
  },
  {
    name: "Maria Garcia",
    car: "Honda Civic",
    rating: 5,
    review: "Best detailing service in Marikina! The team was professional and my car has never looked this good. Will definitely come back.",
    avatar: "MG",
  },
  {
    name: "Juan Dela Cruz",
    car: "Ford Ranger",
    rating: 5,
    review: "The engine wash service was amazing. They cleaned every corner and my engine bay looks factory fresh. Great value for money!",
    avatar: "JD",
  },
  {
    name: "Anna Reyes",
    car: "Mazda CX-5",
    rating: 5,
    review: "The interior detailing was thorough and meticulous. They removed stains I thought were permanent. Truly premium service!",
    avatar: "AR",
  },
  {
    name: "Miguel Torres",
    car: "Mitsubishi Montero",
    rating: 5,
    review: "Wayne's Detailing transformed my SUV. The BAC-2-Zero treatment made my car smell brand new. Outstanding work!",
    avatar: "MT",
  },
  {
    name: "Lisa Tan",
    car: "BMW 3 Series",
    rating: 5,
    review: "Finally found a detailing shop that treats luxury cars with the care they deserve. The wax and buffing results are stunning!",
    avatar: "LT",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4A843] text-sm font-bold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            What Our <span className="text-[#ED0407]">Clients</span> Say
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="relative bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#D4A843]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D4A843]/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                &quot;{review.review}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ED0407] to-[#D4A843] flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{review.name}</div>
                  <div className="text-white/50 text-sm">{review.car}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
