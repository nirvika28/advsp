import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import Link from "next/link"

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Practice Areas</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Advocate SP AGGARWAL offers expert legal services across a wide range of practice areas.
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Corporate Law"
                description="Comprehensive legal support for businesses, including M&A, compliance, and corporate governance."
                linkHref="/practice-areas/corporate-law"
              />
              <ServiceCard
                title="Civil Litigation"
                description="Expert representation in civil disputes, contract breaches, and property litigation."
                linkHref="/practice-areas/civil-litigation"
              />
              <ServiceCard
                title="Criminal Law"
                description="Vigorous defense and prosecution in criminal cases, ensuring justice and fair trial."
                linkHref="/practice-areas/criminal-law"
              />
              <ServiceCard
                title="Family Law"
                description="Sensitive handling of divorce, child custody, alimony, and domestic violence cases."
                linkHref="/practice-areas/family-law"
              />
              <ServiceCard
                title="Property Law"
                description="Advisory and litigation services for real estate transactions, land disputes, and property rights."
                linkHref="/practice-areas/property-law"
              />
              <ServiceCard
                title="Labour Law"
                description="Guidance on employment contracts, workplace disputes, and compliance with labour regulations."
                linkHref="/practice-areas/labour-law"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Need Legal Assistance?</h2>
            <p className="text-xl mb-8">Contact Advocate SP AGGARWAL today for a confidential consultation.</p>
            <Link
              href="/contact"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
