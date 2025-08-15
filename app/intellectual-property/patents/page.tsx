import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function PatentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Patent Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Protecting your innovations and securing your intellectual property rights.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Patent Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With 26+ years of patent industry experience, Advocate SP AGGARWAL ensures your innovations are
                safeguarded from development to production. We provide comprehensive patent services, including
                patentability searches, drafting and filing patent applications, patent prosecution, and patent
                litigation. Our team helps innovators protect their inventions and maximize their commercial value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Navigating the patent landscape can be complex, but our experts simplify the process, offering strategic
                advice tailored to your specific invention and industry. We work diligently to secure the broadest
                possible protection for your intellectual assets.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Patent Services:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Patentability Searches:</strong> Conducting thorough searches to assess the novelty and
                  inventiveness of your idea.
                </li>
                <li>
                  <strong>Patent Drafting & Filing:</strong> Preparing and filing provisional and complete patent
                  applications in India and internationally (PCT applications).
                </li>
                <li>
                  <strong>Patent Prosecution:</strong> Responding to office actions, attending hearings, and managing
                  the entire patent examination process.
                </li>
                <li>
                  <strong>Patent Litigation & Enforcement:</strong> Representing clients in patent infringement cases,
                  oppositions, and revocation proceedings.
                </li>
                <li>
                  <strong>Patent Portfolio Management:</strong> Advising on strategies for building, maintaining, and
                  monetizing your patent portfolio.
                </li>
                <li>
                  <strong>Freedom-to-Operate (FTO) Opinions:</strong> Assessing the risk of infringing existing patents
                  for new products or processes.
                </li>
                <li>
                  <strong>Patent Licensing & Assignment:</strong> Drafting and negotiating agreements for licensing and
                  transferring patent rights.
                </li>
                <li>
                  <strong>Patent Watch & Monitoring:</strong> Keeping track of competitor patents and new filings
                  relevant to your industry.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to helping you secure and leverage your innovations, turning your intellectual assets
                into tangible business advantages.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/patent-services-wordcloud.png" // Updated image source
                alt="Patent Services"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Protect Your Innovation?</h2>
            <p className="text-xl mb-8">Contact our patent experts for a consultation.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Secure Your Patent
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
