import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function CivilLitigationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Civil Litigation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Vigorous representation in civil disputes to protect your rights and interests.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Civil Litigation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our civil litigation team represents clients in a wide array of civil disputes. Whether it's a breach of
                contract, property dispute, debt recovery, or personal injury claim, we are committed to protecting your
                interests and achieving favorable outcomes through negotiation, mediation, or courtroom litigation. We
                understand that civil disputes can be complex and emotionally taxing, and our goal is to provide clear,
                strategic, and effective legal solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Legal team of SPJ Advocates are highly experienced and our lawyer in Delhi represents the clients. Our
                litigators are adept at handling cases across various forums, including District Courts, High Courts,
                and the Supreme Court of India. We focus on thorough preparation, meticulous research, and persuasive
                advocacy to ensure the best possible results for our clients.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Areas of Expertise:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Contract Disputes:</strong> Handling breaches of contract, specific performance, and damages
                  claims.
                </li>
                <li>
                  <strong>Property Disputes:</strong> Resolving issues related to land ownership, possession, partition,
                  and landlord-tenant matters.
                </li>
                <li>
                  <strong>Debt Recovery:</strong> Assisting individuals and businesses in recovering outstanding debts
                  through legal channels.
                </li>
                <li>
                  <strong>Personal Injury Claims:</strong> Representing victims of accidents and negligence to secure
                  fair compensation.
                </li>
                <li>
                  <strong>Consumer Protection Cases:</strong> Advocating for consumer rights against unfair trade
                  practices and defective goods/services.
                </li>
                <li>
                  <strong>Arbitration & Mediation:</strong> Providing alternative dispute resolution services to achieve
                  out-of-court settlements.
                </li>
                <li>
                  <strong>Appeals & Revisions:</strong> Pursuing or defending appeals in higher courts against lower
                  court judgments.
                </li>
                <li>
                  <strong>Succession & Inheritance Disputes:</strong> Resolving conflicts related to wills, probate, and
                  inheritance.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide strategic and effective legal solutions, guiding you through every step of the litigation
                process with clarity and dedication, always aiming for the most favorable outcome.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/civil-litigation-book.png" // Updated image source
                alt="Civil Litigation"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Facing a Civil Dispute?</h2>
            <p className="text-xl mb-8">Let our experienced litigator fight for your rights.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Legal Help
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
