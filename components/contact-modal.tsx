"use client"

import { type MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MessageCircle, Inbox } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

const contactOptions = [
  {
    id: "call",
    title: "Call us",
    subtitle: "0917-376-3348",
    icon: Phone,
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    href: "tel:09173763348",
    target: "_self",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "Chat with us",
    icon: MessageCircle,
    bgColor: "bg-green-500/20",
    iconColor: "text-green-400",
    href: "https://api.whatsapp.com/send?phone=639173763348",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "viber",
    title: "Viber",
    subtitle: "Message us",
    icon: Inbox,
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    href: "viber://chat?number=+639173763348",
    fallbackHref: "https://www.viber.com/en/",
    target: "_self",
  },
]

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal()

  const handleOptionClick = (event: MouseEvent<HTMLAnchorElement>, option: (typeof contactOptions)[number]) => {
    if (option.id === "viber") {
      event.preventDefault()
      window.location.href = option.href

      const fallback = () => {
        if (!document.hidden && option.fallbackHref) {
          window.location.href = option.fallbackHref
        }
      }

      const timeoutId = window.setTimeout(fallback, 1200)
      const onVisibilityChange = () => {
        if (document.hidden) {
          window.clearTimeout(timeoutId)
          document.removeEventListener("visibilitychange", onVisibilityChange)
        }
      }

      document.addEventListener("visibilitychange", onVisibilityChange)
    }

    closeModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-2xl w-full max-w-sm p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-white">Contact Us</h2>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {contactOptions.map((option) => {
                  const Icon = option.icon
                  return (
                    <motion.a
                      key={option.id}
                      href={option.href}
                      target={option.target}
                      rel={option.rel}
                      onClick={(event) => handleOptionClick(event, option)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 hover:bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#D4A843]/50 transition-all group"
                      whileHover={{ x: 4 }}
                    >
                      {/* Icon Circle */}
                      <div className={`w-12 h-12 rounded-xl ${option.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${option.iconColor}`} />
                      </div>

                      {/* Text */}
                      <div className="text-left flex-1">
                        <p className="text-white font-bold">{option.title}</p>
                        <p className="text-white/60 text-sm">{option.subtitle}</p>
                      </div>

                      {/* Arrow */}
                      <div className="text-white/30 group-hover:text-[#D4A843] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-[#2A2A2A]">
                <p className="text-white/50 text-sm text-center">
                  Choose your preferred contact method
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
