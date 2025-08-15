import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function CriminalLawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Criminal Law</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Providing robust defense and legal representation for individuals facing criminal charges.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Criminal Defense Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Facing criminal charges can be a daunting experience. Our criminal law expert provides robust defense
                and legal representation for individuals accused of various offenses. We ensure your rights are
                protected throughout the legal process, from investigation to trial, striving for the best possible
                outcome. Our team understands the severe implications of criminal charges and works tirelessly to build
                a strong defense strategy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We handle a wide spectrum of criminal cases, from minor offenses to complex felonies, across various
                courts including Magistrate Courts, Sessions Courts, High Courts, and the Supreme Court of India. Our
                approach is client-centric, focusing on protecting your liberty and reputation.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Areas of Expertise:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Bail Applications:</strong> Assisting with anticipatory bail, regular bail, and transit bail.
                </li>
                <li>
                  <strong>Defense against IPC Offenses:</strong> Representing clients in cases involving offenses under
                  the Indian Penal Code, such as assault, theft, fraud, and murder.
                </li>
                <li>
                  <strong>White-Collar Crimes:</strong> Handling cases related to financial fraud, embezzlement, money
                  laundering, and corruption.
                </li>
                <li>
                  <strong>Cyber Crimes:</strong> Providing legal defense for offenses committed using computers and the
                  internet, including hacking, data theft, and online fraud.
                </li>
                <li>
                  <strong>Drug Offenses:</strong> Representing individuals accused under the Narcotic Drugs and
                  Psychotropic Substances (NDPS) Act.
                </li>
                <li>
                  <strong>Appeals & Revisions:</strong> Filing and defending appeals and revision petitions in higher
                  courts.
                </li>
                <li>
                  <strong>Quashing of FIRs:</strong> Seeking to quash First Information Reports (FIRs) under Section 482
                  CrPC.
                </li>
                <li>
                  <strong>Victim Representation:</strong> Assisting victims of crime in pursuing justice and
                  compensation.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team is committed to providing a strong and strategic defense, ensuring fair treatment and justice
                for our clients, and navigating the complexities of the criminal justice system with expertise.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/criminal-law-gavel.png" // Updated image source
                alt="Criminal Law"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need a Strong Criminal Defense?</h2>
            <p className="text-xl mb-8">Contact us immediately for expert legal assistance.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Legal Representation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
