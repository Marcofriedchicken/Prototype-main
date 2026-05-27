"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

interface ContactSectionProps {
  onBookNow: () => void
}

export function ContactSection({ onBookNow }: ContactSectionProps) {
  const { openModal } = useContactModal()

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Visit Us <span className="text-[#ED0407]">Today</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to give your car the treatment it deserves? Contact us or visit our shop.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ED0407]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#ED0407]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                <p className="text-white/60">
                  No.9 Mount Vernon St,<br />
                  Brgy Sta. Elena, Marikina City
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ED0407]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#ED0407]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                <button onClick={openModal} className="text-white/60 hover:text-[#D4A843] transition-colors">
                  0917-376-3348
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ED0407]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#ED0407]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                <a href="mailto:waynesdetailing2026@gmail.com" className="text-white/60 hover:text-[#D4A843] transition-colors">
                  waynesdetailing2026@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ED0407]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#ED0407]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Business Hours</h3>
                <p className="text-white/60">
                  Daily: 7:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61586313146954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-white/60 hover:bg-[#D4A843] hover:text-[#0A0A0A] transition-colors duration-150"
                transition={{ type: "tween", duration: 0.12 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-white/60 hover:bg-[#D4A843] hover:text-[#0A0A0A] transition-colors duration-150"
                transition={{ type: "tween", duration: 0.12 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-white/60 hover:bg-[#D4A843] hover:text-[#0A0A0A] transition-colors duration-150"
                transition={{ type: "tween", duration: 0.12 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Map / CTA Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#ED0407] to-[#ED0407]/80 p-8 md:p-12 h-full flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/80 mb-8">
                Book your appointment online and experience the premium detailing service your car deserves.
              </p>
              <motion.button
                onClick={onBookNow}
                className="bg-[#D4A843] hover:bg-[#D4A843]/90 text-[#0A0A0A] px-8 py-4 rounded-full font-bold text-lg transition-all w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SCHEDULE ONLINE
              </motion.button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A843]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
