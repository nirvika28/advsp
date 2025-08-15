import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function CopyrightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Copyright Services</h1>
            <p className="text-xl max-w-3xl mx-auto">Safeguarding your creative works and intellectual expressions.</p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Copyright Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ensuring that your original creations remain secure is crucial in today's competitive landscape.
                Copyright protection is important to ensure that others can't misuse your original ideas and creative
                works. We assist creators with copyright registration, protection of their literary, artistic, and
                musical works, and handling copyright infringement matters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team provides expert advice on copyrightability, ownership, fair use, and licensing. We are
                committed to helping you assert your rights and prevent unauthorized use of your valuable creative
                content.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Copyright Services:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Copyright Registration:</strong> Assisting with the registration of literary, dramatic,
                  musical, artistic works, cinematograph films, and sound recordings.
                </li>
                <li>
                  <strong>Copyright Infringement Litigation:</strong> Representing clients in cases of copyright
                  infringement, including injunctions, damages, and account of profits.
                </li>
                <li>
                  <strong>Copyright Licensing & Assignment:</strong> Drafting and negotiating agreements for licensing
                  and transferring copyright ownership.
                </li>
                <li>
                  <strong>Digital Copyright Protection:</strong> Advising on online copyright infringement, takedown
                  notices, and digital rights management.
                </li>
                <li>
                  <strong>Moral Rights Protection:</strong> Protecting the author's special rights, including paternity
                  and integrity of their work.
                </li>
                <li>
                  <strong>Advisory on Fair Use/Fair Dealing:</strong> Providing opinions on the legitimate use of
                  copyrighted material without permission.
                </li>
                <li>
                  <strong>Copyright Portfolio Management:</strong> Strategies for managing and monetizing your
                  collection of copyrighted works.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to helping you protect your creative expressions and ensure that your intellectual
                efforts are duly recognized and rewarded.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/copyright-symbol.png" // Updated image source
                alt="Copyright Services"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Protect Your Creative Works?</h2>
            <p className="text-xl mb-8">Contact our copyright experts for robust protection.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Secure Your Copyright
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
