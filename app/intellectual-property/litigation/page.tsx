import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function IPLitigationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">IP Litigation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Vigorous representation in intellectual property disputes to protect your rights.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our IP Litigation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's fast-paced global economy, the threat of Intellectual Property (IP) theft is on the rise,
                becoming more complex and challenging. Our experienced litigator represents clients in complex
                intellectual property disputes, including patent, trademark, and copyright infringement cases. We are
                dedicated to defending your IP rights vigorously in court and through alternative dispute resolution
                mechanisms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team possesses deep expertise in IP law and litigation procedures, enabling us to develop robust
                strategies tailored to each unique case. We aim to achieve favorable outcomes, whether through
                injunctions, damages, or negotiated settlements.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key IP Litigation Services:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Patent Infringement Litigation:</strong> Representing clients in disputes concerning
                  unauthorized use of patented inventions.
                </li>
                <li>
                  <strong>Trademark Infringement & Passing Off:</strong> Handling cases related to unauthorized use of
                  trademarks and brand dilution.
                </li>
                <li>
                  <strong>Copyright Infringement:</strong> Pursuing legal action against unauthorized reproduction,
                  distribution, or adaptation of copyrighted works.
                </li>
                <li>
                  <strong>Design Infringement:</strong> Litigating cases involving the unauthorized use of registered
                  industrial designs.
                </li>
                <li>
                  <strong>Trade Secret Misappropriation:</strong> Protecting confidential business information and trade
                  secrets from unauthorized disclosure or use.
                </li>
                <li>
                  <strong>Anti-Counterfeiting & Piracy:</strong> Implementing strategies and legal actions to combat
                  counterfeit goods and pirated content.
                </li>
                <li>
                  <strong>Domain Name Disputes:</strong> Resolving disputes over domain names through UDRP proceedings
                  or court action.
                </li>
                <li>
                  <strong>IP Enforcement:</strong> Assisting with customs enforcement, police complaints, and other
                  enforcement measures.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are your strong advocates in IP disputes, committed to protecting your innovations and creative works
                from infringement and misuse.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/ip-litigation-gavel.png" // Updated image source
                alt="IP Litigation"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Facing an IP Dispute?</h2>
            <p className="text-xl mb-8">Let our expert IP litigator defend your intellectual property rights.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get IP Legal Help
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
