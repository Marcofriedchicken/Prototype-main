"use client"

import { motion } from "framer-motion"
import { Award, Clock, Shield, Users, ThumbsUp, Wrench } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest products and equipment to ensure top-tier results.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Efficient processes without compromising on quality. Get back on the road quickly.",
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description: "100% satisfaction guaranteed or we'll make it right. Your trust is our priority.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our certified technicians have years of experience in auto detailing.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Focus",
    description: "Personalized service tailored to your vehicle's specific needs and your preferences.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "State-of-the-art tools and eco-friendly products for the best finish possible.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
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
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            The <span className="text-[#ED0407]">Wayne&apos;s</span> Difference
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We&apos;re committed to delivering excellence in every detail. Here&apos;s why car owners trust us.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] group hover:border-[#D4A843]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A843]/10 flex items-center justify-center group-hover:bg-[#D4A843]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#D4A843]" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm">
                {feature.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
