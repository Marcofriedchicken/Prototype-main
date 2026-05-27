"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

export const merchandise = [
  {
    id: "tshirt-black",
    name: "Wayne's Detailing T-Shirt",
    description: "Premium black performance tee with Wayne's Detailing front logo print.",
    price: "₱650",
    priceValue: 650,
    image: "/images/shop-tshirt-waynes.png",
    category: "Apparel",
  },
  {
    id: "cap",
    name: "Snapback Cap",
    description: "Classic black cap with embroidered Wayne's Detailing logo and motto.",
    price: "₱450",
    priceValue: 450,
    image: "/images/shop-cap-waynes.png",
    category: "Apparel",
  },
  {
    id: "microfiber-set",
    name: "Coffee Mug",
    description: "Matte black ceramic mug featuring Wayne's Detailing signature branding.",
    price: "₱850",
    priceValue: 850,
    image: "/images/shop-mug-waynes.png",
    category: "Lifestyle",
  },
  {
    id: "cleaning-kit",
    name: "Umbrella",
    description: "Full-size black umbrella with Wayne's Detailing logo for all-weather use.",
    price: "₱1,500",
    priceValue: 1500,
    image: "/images/shop-umbrella-waynes.png",
    category: "Lifestyle",
  },
]

export function ShopSection() {
  return (
    <section id="shop" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[#D4A843] text-sm tracking-[0.3em] font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            OFFICIAL MERCHANDISE
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            WAYNE&apos;S <span className="text-[#ED0407]">SHOP</span>
          </motion.h2>
          <motion.p
            className="text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Rep the brand with our official merchandise and premium detailing products
          </motion.p>
        </motion.div>

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchandise.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-[#111111] rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              style={{
                boxShadow: "0 0 0 1px rgba(42, 42, 42, 1)",
              }}
            >
              {/* Gold glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20"
                style={{
                  boxShadow: "0 0 18px rgba(212, 168, 67, 0.35), 0 0 28px rgba(212, 168, 67, 0.2), inset 0 0 0 1px rgba(212, 168, 67, 0.75)",
                }}
              />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10 bg-[#D4A843] text-black text-xs font-bold px-2 py-1 rounded">
                {item.category}
              </div>

              {/* Image Container */}
              <div className="relative h-67 overflow-hidden bg-gradient-to-br from-[#171717] to-[#0f0f0f]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  loading="eager"
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4A843] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-[#D4A843] font-bold text-xl">{item.price}</span>
                  <motion.button
                    className="flex items-center gap-2 bg-[#ED0407] hover:bg-[#ED0407]/90 text-white px-4 py-2 rounded-md font-bold text-xs transition-all"
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    ADD
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm">
            More products coming soon! Follow us on social media for updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
