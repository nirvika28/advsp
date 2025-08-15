import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function PropertyLawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Property Law</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert legal guidance on real estate transactions, property disputes, and land development matters.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Property Law Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In India, property law is very complicated because various state government, central government and
                local bodies has their own law related to land and properties. Our firm provides comprehensive legal
                services related to all aspects of property law, ensuring smooth and secure transactions and effective
                resolution of disputes. We understand the nuances of land records, local regulations, and the various
                acts governing property in India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you are buying, selling, leasing, or developing property, our experienced property lawyer offer
                proactive advice and robust representation to safeguard your interests. We aim to minimize risks and
                ensure compliance with all legal requirements.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Areas of Expertise:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Property Due Diligence:</strong> Thorough investigation of property titles, encumbrances, and
                  regulations before transactions.
                </li>
                <li>
                  <strong>Sale & Purchase Agreements:</strong> Drafting, reviewing, and negotiating agreements for
                  residential, commercial, and industrial properties.
                </li>
                <li>
                  <strong>Lease & Rent Agreements:</strong> Expertise in drafting and enforcing lease and rental
                  contracts for various types of properties.
                </li>
                <li>
                  <strong>Property Disputes & Litigation:</strong> Representing clients in disputes related to
                  ownership, possession, partition, and inheritance, and adverse possession.
                </li>
                <li>
                  <strong>Land Acquisition:</strong> Advising on legal aspects of land acquisition for infrastructure
                  projects and industrial development.
                </li>
                <li>
                  <strong>Real Estate Development:</strong> Providing legal counsel for real estate projects, including
                  approvals, joint development agreements, and RERA compliance.
                </li>
                <li>
                  <strong>Title Verification:</strong> Conducting comprehensive title searches and providing clear legal
                  opinions on property ownership.
                </li>
                <li>
                  <strong>Mortgage & Financing:</strong> Assisting with legal documentation for property financing and
                  mortgages.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We guide clients through the complexities of property law, providing clear advice and robust legal
                support, ensuring your investments are secure and your rights are protected.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/property-law-house.png" // Updated image source
                alt="Property Law"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Assistance with Property Matters?</h2>
            <p className="text-xl mb-8">Our property lawyer is ready to assist you.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Consult Our Experts
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
