import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function CorporateLawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Corporate Law</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Providing comprehensive legal support for businesses, from formation to complex transactions.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Corporate Legal Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our corporate law practice provides comprehensive legal support to businesses of all sizes, from
                startups to established corporations. We assist with company formation, corporate governance, mergers
                and acquisitions, contract drafting, and regulatory compliance. Our goal is to help your business
                navigate the complex legal landscape and achieve its strategic objectives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's dynamic business environment, robust legal counsel is essential for sustainable growth and
                risk mitigation. Our team of experienced corporate lawyer offers strategic advice on a wide range of
                matters, ensuring your business operations are legally sound and aligned with your commercial goals. We
                pride ourselves on delivering practical, business-focused solutions that address your unique challenges.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Areas of Expertise:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Company Formation & Registration:</strong> Guiding you through the process of establishing new
                  entities, including private limited companies, public limited companies, LLPs, and partnerships.
                </li>
                <li>
                  <strong>Corporate Governance & Compliance:</strong> Advising on board responsibilities, shareholder
                  rights, regulatory filings, and ensuring adherence to corporate laws and regulations.
                </li>
                <li>
                  <strong>Mergers & Acquisitions (M&A):</strong> Providing end-to-end support for M&A transactions,
                  including due diligence, negotiation, drafting of agreements, and regulatory approvals.
                </li>
                <li>
                  <strong>Joint Ventures & Collaborations:</strong> Structuring and negotiating strategic alliances to
                  facilitate business expansion and shared ventures.
                </li>
                <li>
                  <strong>Contract Drafting & Negotiation:</strong> Expertise in drafting, reviewing, and negotiating
                  various commercial contracts, including vendor agreements, service agreements, and supply contracts.
                </li>
                <li>
                  <strong>Private Equity & Venture Capital:</strong> Assisting with fundraising, investment agreements,
                  and exit strategies for private equity and venture capital firms.
                </li>
                <li>
                  <strong>Regulatory Advisory:</strong> Offering guidance on industry-specific regulations, foreign
                  exchange laws (FEMA), and other statutory compliances.
                </li>
                <li>
                  <strong>Dispute Resolution:</strong> Representing clients in corporate disputes, shareholder disputes,
                  and commercial litigation.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to being your trusted legal partner, providing proactive advice and robust
                representation to help your business thrive in a competitive market.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/corporate-law-book.png" // Updated image source
                alt="Corporate Law"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Discuss Your Corporate Legal Needs?</h2>
            <p className="text-xl mb-8">
              Our expert team is here to provide tailored advice and robust representation.
            </p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
