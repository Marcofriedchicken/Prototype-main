"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ShopSection } from "@/components/shop-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { ContactModal } from "@/components/contact-modal"
import { ContactModalProvider } from "@/hooks/use-contact-modal"

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>()

  const openBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId)
    setIsBookingOpen(true)
  }

  const closeBooking = () => {
    setIsBookingOpen(false)
    setSelectedServiceId(undefined)
  }

  return (
    <ContactModalProvider>
      <main className="min-h-screen bg-[#0A0A0A]">
        <Navbar onBookNow={() => openBooking()} />
        <Hero onBookNow={() => openBooking()} />
        <StatsBar />
        <ServicesSection onBookService={(id) => openBooking(id)} />
        <WhyChooseUs />
        <ShopSection />
        <ReviewsSection />
        <ContactSection onBookNow={() => openBooking()} />
        <Footer />
        
        <BookingModal
          isOpen={isBookingOpen}
          onClose={closeBooking}
          initialServiceId={selectedServiceId}
        />
        <ContactModal />
      </main>
    </ContactModalProvider>
  )
}
