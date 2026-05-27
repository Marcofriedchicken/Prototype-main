"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "./service-card"

export const services = [
  {
    id: "express-wash",
    title: "Express Wash",
    description:
      "A quick, high-quality exterior wash that strips away dirt and buildup, delivering a crisp, spotless finish. (35 mins)",
    price: "₱200",
    priceValue: 200,
    prices: {
      "Compact/Hatch": 200,
      "Sedan Type": 220,
      "APV/AUV": 240,
      "SUV/Pick-up": 260,
      "Lifted/Van/L300": 280,
    },
    duration: "35 mins",
    durationMinutes: 35,
    canUpgradeTo: [
      "express-full-detail",
      "deluxe-detail",
      "premium-detail",
      "executive-detail",
      "ceramic-coating-3yr",
      "ceramic-coating-5yr",
    ],
    image: "/images/premium-carwash.jpg",
    features: [
      "Premium body wash (Foam-Rinse-Foam)",
      "Streak-free cleaning of windows & mirrors",
      "Window & mirror polish",
      "Door jambs wiped down",
      "Microfiber towel and air dry",
      "Vacuum",
      "Tire dressing & rim clean",
    ],
  },
  {
    id: "express-full-detail",
    title: "Express Full Detail",
    description:
      "A complete interior and exterior cleaning in one visit-designed to quickly restore your vehicle's overall cleanliness inside and out. (1 hr)",
    price: "₱700",
    priceValue: 700,
    prices: {
      "Compact/Hatch": 700,
      "Sedan Type": 720,
      "APV/AUV": 740,
      "SUV/Pick-up": 760,
      "Lifted/Van/L300": 780,
    },
    duration: "1 hr",
    durationMinutes: 60,
    canUpgradeTo: [
      "deluxe-detail",
      "premium-detail",
      "executive-detail",
      "ceramic-coating-3yr",
      "ceramic-coating-5yr",
    ],
    image: "/images/interior-detailing.jpg",
    features: [
      "All Express Wash",
      "Deluxe Interior Detail",
      "Interior Dressing",
      "Leather Conditioning",
      "Trim Restoration",
      "Cabin Fragrance",
    ],
  },
  {
    id: "deluxe-detail",
    title: "Deluxe Detail",
    description:
      "Upgrade to full detail with interior and exterior cleaning in one visit. (1 hr)",
    price: "₱675",
    priceValue: 675,
    prices: {
      "Compact/Hatch": 675,
      "Sedan Type": 795,
      "APV/AUV": 950,
      "SUV/Pick-up": 1095,
      "Lifted/Van/L300": 1250,
    },
    duration: "1 hr",
    durationMinutes: 60,
    canUpgradeTo: ["premium-detail", "executive-detail", "ceramic-coating-3yr", "ceramic-coating-5yr"],
    image: "/images/shop-deluxe-detail.jpeg",
    features: [
      "All Express Wash",
      "Interior Dressing",
      "Back to Zero Sanitation",
      "Leather Conditioning",
      "Trim Restoration",
      "Cabin Fragrance",
      "Iron Remover",
    ],
  },
  {
    id: "premium-detail",
    title: "Premium Detail",
    description:
      "Advanced detailing package with stronger decontamination and enhanced finish. (1 hr 20 mins)",
    price: "₱925",
    priceValue: 925,
    prices: {
      "Compact/Hatch": 925,
      "Sedan Type": 1095,
      "APV/AUV": 1300,
      "SUV/Pick-up": 1495,
      "Lifted/Van/L300": 1700,
    },
    duration: "1 hr 20 mins",
    durationMinutes: 80,
    canUpgradeTo: ["executive-detail", "ceramic-coating-3yr", "ceramic-coating-5yr"],
    image: "/images/shop-premium-detail.jpeg",
    features: [
      "All Express Wash",
      "Interior Dressing",
      "Back to Zero Sanitation",
      "Leather Conditioning",
      "Trim Restoration",
      "Cabin Fragrance",
      "Iron Remover",
      "Water Spot Remover",
    ],
  },
  {
    id: "executive-detail",
    title: "Executive Detail",
    description:
      "High-level detailing package with deeper interior and exterior restoration. (1 hr 45 mins)",
    price: "₱1,175",
    priceValue: 1175,
    prices: {
      "Compact/Hatch": 1175,
      "Sedan Type": 1370,
      "APV/AUV": 1600,
      "SUV/Pick-up": 1820,
      "Lifted/Van/L300": 2050,
    },
    duration: "1 hr 45 mins",
    durationMinutes: 105,
    canUpgradeTo: ["ceramic-coating-3yr", "ceramic-coating-5yr"],
    image: "/images/engine-wash.jpg",
    features: [
      "All Express Wash",
      "Interior Dressing",
      "Back to Zero Sanitation",
      "Leather Conditioning",
      "Trim Restoration",
      "Cabin Fragrance",
      "Iron Remover",
      "Water Spot Remover",
      "Engine Bay Wash",
    ],
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description:
      "A multi-stage polishing process that eliminates defects, restoring deep gloss, clarity, and a flawless finish. (2 hrs)",
    price: "₱4,500",
    priceValue: 4500,
    prices: {
      "Compact/Hatch": 4500,
      "Sedan Type": 5000,
      "APV/AUV": 6000,
      "SUV/Pick-up": 7000,
      "Lifted/Van/L300": 7500,
    },
    duration: "2 hrs",
    durationMinutes: 120,
    canUpgradeTo: ["ceramic-coating-3yr", "ceramic-coating-5yr"],
    image: "/images/wax-buffing.jpg",
    features: [
      "All Express Carwash",
      "Full Paint Decontamination",
      "Clay bar treatment",
      "Trim Restoration",
      "Machine compounding, Machine polishing",
      "Paint sealant protection finish",
    ],
  },
  {
    id: "ceramic-coating-3yr",
    title: "Diamond Ceramic",
    description:
      "Advanced coating combines graphene and ceramic technology to deliver superior results. Hydrophobic properties and enhanced 3-year paint protection. (8 hrs)",
    price: "₱15,000",
    priceValue: 15000,
    prices: {
      "Compact/Hatch": 15000,
      "Sedan Type": 17500,
      "APV/AUV": 20000,
      "SUV/Pick-up": 22500,
      "Lifted/Van/L300": 25000,
    },
    duration: "8 hrs",
    durationMinutes: 480,
    canUpgradeTo: ["ceramic-coating-5yr"],
    image: "/images/ceramic-coating.jpeg",
    features: [
      "All Express Carwash",
      "Full Paint Decontamination",
      "Clay bar treatment",
      "Trim Restoration",
      "Machine polishing, Machine compounding",
      "Graphene Ceramic Coating + SiO2 mix",
    ],
  },
  {
    id: "ceramic-coating-5yr",
    title: "Titanium Ceramic Shield",
    description:
      "High-tech ceramic composite coating combines silicon dioxide (SiO2), SiN, and Polysilazane to give you durable hydrophobic 5-year ceramic protection. (8 hrs)",
    price: "₱21,000",
    priceValue: 21000,
    prices: {
      "Compact/Hatch": 21000,
      "Sedan Type": 23500,
      "APV/AUV": 26000,
      "SUV/Pick-up": 27500,
      "Lifted/Van/L300": 30000,
    },
    duration: "8 hrs",
    durationMinutes: 480,
    canUpgradeTo: [],
    image: "/images/shop-titanium-ceramic-shield.jpeg",
    features: [
      "All Express Carwash",
      "Full Paint Decontamination",
      "Clay bar treatment",
      "Trim Restoration",
      "Machine polishing, Machine compounding",
      "SiO2 Mix (Stronger Ceramic Base Layer)",
    ],
  },
]

const CERAMIC_SERVICE_IDS = new Set<string>(["ceramic-coating-3yr", "ceramic-coating-5yr"])

interface ServicesSectionProps {
  onBookService: (serviceId: string) => void
}

export function ServicesSection({ onBookService }: ServicesSectionProps) {
  const mainServices = services.filter((s) => !CERAMIC_SERVICE_IDS.has(s.id))
  const ceramicServices = services.filter((s) => CERAMIC_SERVICE_IDS.has(s.id))

  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4A843] text-sm font-bold tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">
            Our <span className="text-[#ED0407]">Premium</span> Services
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            From basic washes to complete transformations, we offer a full range of
            professional auto detailing services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              image={service.image}
              features={service.features}
              onBook={() => onBookService(service.id)}
              index={index}
            />
          ))}
        </div>

        {/* Ceramic coating pair — centered */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:justify-items-stretch">
          {ceramicServices.map((service, idx) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              image={service.image}
              features={service.features}
              onBook={() => onBookService(service.id)}
              index={mainServices.length + idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
