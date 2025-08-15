"use client"

import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { Footer } from "../components/footer"
import { RequestMeetingForm } from "../components/request-meeting-form"
import { ServiceCard } from "../components/service-card"
// import Image from "next/image" // No longer needed for this section

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      {/* Top Law Firm in Delhi with Experienced Lawyers Section */}
      <section className="py-16 bg-white">
        {" "}
        {/* Reverted to plain white background */}
        <div className="container mx-auto px-4 max-w-4xl text-center">
          {/* Removed Image component */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Advocate SP AGGARWAL is an experienced legal consulting firm having expertise in Legal advisory in a variety
            of legal fields. Advocate SP AGGARWAL is one of the firm because we keep an eagle eye view on your legal
            issues. Our lawyer in Delhi of Advocate SP AGGARWAL is very well experienced and solve the legal issue of
            our clients. At SPJ advocates, our aim is to protect the interest of our clients at any cost.
          </p>
        </div>
      </section>

      {/* Request Meeting Form and Top Service Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Request Meeting Form */}
          <RequestMeetingForm />

          {/* Top Service Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ServiceCard
              title="CIVIL, CRIMINAL & COMMERCIAL LITIGATION"
              description="Legal team of SPJ Advocates are highly experienced and our lawyer in Gurgaon represents the clients in complex matters before the courts."
              linkHref="/practice-areas/civil-litigation"
            />
            <ServiceCard
              title="FAMILY LAW, DIVORCE MATTERS & MAINTENANCE"
              description="At SPJ Advocates, We covers a wide range of sensitive and emotional issues related to family law.As a legal expert we knows that the family related matters are long and painful process that's why"
              linkHref="/practice-areas/family-law"
            />
            <ServiceCard
              title="PROPERTY LAW"
              description="In India, property law is very complicated because various state government, central government and local bodies has their own law related to land and properties"
              linkHref="/practice-areas/property-law" // Assuming a new page for property law
            />
            <ServiceCard
              title="LABOUR LAW & EMPLOYMENT LAW"
              description="Whether it may manufacturing unit or a corporate company, employment compliances and Labour law have become one of most important issues for any company who has operation in India."
              linkHref="/practice-areas/labour-law" // Assuming a new page for labour law
            />
          </div>
        </div>
      </section>

      {/* Additional Service Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {" "}
            {/* Adjusted grid for 2 cards */}
            <ServiceCard
              title="SEXUAL HARASSMENT AT WORKPLACES"
              description="At SPJ advocates, our lawyer in Gurgaon is always ready to help, corporates to create PoSH Law compliant workplaces. Sexual Harassment at workplaces is a major concern in this country."
              linkHref="/other-services/sexual-harassment" // Assuming a new page
            />
            <ServiceCard
              title="CORPORATE & COMMERCIAL LAW"
              description="The commercial and corporate lawyer at SPJ Advocates & Co. has in-depth knowledge of contracts & agreements, agreement drafting, Company setup services."
              linkHref="/practice-areas/corporate-law"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
