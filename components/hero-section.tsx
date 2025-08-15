"use client"

import RequestAppointmentModal from "@/components/request-appointment-modal"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32 text-white"
      style={{ backgroundImage: `url('/images/hero-background-new.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Advocate SP AGGARWAL: Navigating Law, Securing Your Future
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Advocate SP AGGARWAL is a leading law firm in Delhi, offering expert legal services in various practice areas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <RequestAppointmentModal />
          <Link
            href="/other-services"
            className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
