"use client"

import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import Image from "next/image"
import { useContactModal } from "@/hooks/use-contact-modal"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Shop", href: "#shop" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
]

const services = [
  "Ceramic Coating",
  "Engine Wash",
  "Full Detailing",
  "Paint Protection",
  "Premium Carwash",
]

export function Footer() {
  const { openModal } = useContactModal()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      })
    }
  }

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Wayne's Detailing"
              width={180}
              height={60}
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm mb-4">
              Premium auto detailing services in Marikina City. We bring out the best in your vehicle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-[#D4A843] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="text-white/60 hover:text-[#D4A843] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-white/60">
              <p>No.9 Mount Vernon St,</p>
              <p>Brgy Sta. Elena, Marikina City</p>
              <p className="pt-2">
                <button onClick={openModal} className="hover:text-[#D4A843] transition-colors">
                  0917-376-3348
                </button>
              </p>
              <p>
                <a href="mailto:waynesdetailing2026@gmail.com" className="hover:text-[#D4A843] transition-colors">
                  waynesdetailing2026@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2A2A] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Wayne&apos;s Detailing. All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-[#D4A843] transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Back to Top
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
