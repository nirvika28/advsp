import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function TrademarksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Trademark Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Safeguarding your brand identity and ensuring exclusive use of your trademarks.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Trademark Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With 26 years of expertise, Advocate SP AGGARWAL offers comprehensive trademark services, including
                trademark registration, brand development, protection, enforcement, and commercialization. We understand
                that your brand is a valuable asset, and securing its identity is crucial for market recognition and
                business growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team provides strategic advice on selecting strong trademarks, conducting thorough searches to avoid
                conflicts, and managing your trademark portfolio effectively. We are committed to protecting your brand
                from infringement and ensuring its exclusive use.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Trademark Services:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Trademark Search & Opinion:</strong> Conducting comprehensive searches to assess the
                  availability and registrability of your proposed trademark.
                </li>
                <li>
                  <strong>Trademark Registration:</strong> Preparing and filing trademark applications in India and
                  internationally (Madrid Protocol).
                </li>
                <li>
                  <strong>Trademark Prosecution:</strong> Handling office objections, oppositions, and other procedural
                  matters during the registration process.
                </li>
                <li>
                  <strong>Trademark Enforcement & Litigation:</strong> Representing clients in trademark infringement
                  cases, passing off actions, and anti-counterfeiting measures.
                </li>
                <li>
                  <strong>Trademark Portfolio Management:</strong> Advising on strategies for maintaining, renewing, and
                  expanding your trademark portfolio.
                </li>
                <li>
                  <strong>Trademark Licensing & Assignment:</strong> Drafting and negotiating agreements for licensing
                  and transferring trademark rights.
                </li>
                <li>
                  <strong>Brand Protection Strategies:</strong> Developing comprehensive strategies to protect your
                  brand from misuse and dilution.
                </li>
                <li>
                  <strong>Domain Name Disputes:</strong> Resolving disputes related to domain names and cybersquatting.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to helping you establish a strong brand presence and protect your valuable trademarks,
                ensuring your business stands out in the market.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/trademark-wordcloud.png" // Updated image source
                alt="Trademark Services"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Protect Your Brand Identity?</h2>
            <p className="text-xl mb-8">Contact our trademark experts for robust brand protection.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Secure Your Trademark
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
