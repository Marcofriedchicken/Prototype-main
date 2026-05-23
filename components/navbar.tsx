"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

const navLinks = [
  { name: "SERVICES", href: "#services" },
  { name: "WHY US", href: "#why-us" },
  { name: "SHOP", href: "#shop" },
  { name: "REVIEWS", href: "#reviews" },
  { name: "CONTACT", href: "#contact" },
]

// Logo component using the W mark image
function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* W Mark image */}
      <img
        src="/images/w-logo.png"
        alt="Wayne's Detailing W mark"
        className="h-10 w-auto mb-1 object-contain"
      />
      {/* Text */}
      <div className="text-center">
        <div className="text-[#ED0407] font-black text-sm tracking-[0.2em]">
          WAYNE&apos;S DETAILING
        </div>
        <div className="text-white/80 text-[10px] tracking-[0.3em] mt-0.5">
          GET IT DONE
        </div>
      </div>
    </div>
  )
}

interface NavbarProps {
  onBookNow: () => void
}

export function Navbar({ onBookNow }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openModal } = useContactModal()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
          scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg" : "bg-[#0A0A0A]/80"
        }`}
      >
        {/* Red accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-[#ED0407]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-24">
            <div className="hidden md:block w-10" />

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0"
              whileHover={{ scale: 1.02 }}
            >
              <Logo className="flex flex-col items-center" />
            </motion.a>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/80 hover:text-white transition-colors duration-100 font-medium text-sm tracking-wider"
                    whileHover={{ y: -2, transition: { duration: 0.12 } }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              <button
                onClick={openModal}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0917-376-3348</span>
              </button>
              <motion.button
                onClick={onBookNow}
                className="bg-[#ED0407] hover:bg-[#ED0407]/90 text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BOOK NOW
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-white/80 hover:text-white transition-colors font-medium py-2 tracking-wider"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={openModal}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0917-376-3348</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      onBookNow()
                    }}
                    className="w-full bg-[#ED0407] hover:bg-[#ED0407]/90 text-white px-6 py-3 rounded-md font-bold transition-all"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
