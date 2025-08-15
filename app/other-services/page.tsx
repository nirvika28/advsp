import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function OtherServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section for Other Services */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Other Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Beyond our core expertise, we offer a range of additional legal services to meet your diverse needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {/* Removed Image component */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Real Estate Law</h2>
                <p className="text-gray-600">
                  Assisting with property transactions, disputes, land acquisition, and real estate development.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {/* Removed Image component */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Consumer Protection</h2>
                <p className="text-gray-600">
                  Representing consumers in cases of unfair trade practices, product liability, and service
                  deficiencies.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {/* Removed Image component */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Arbitration & Mediation</h2>
                <p className="text-gray-600">
                  Providing alternative dispute resolution services to resolve conflicts efficiently and amicably.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {/* Removed Image component */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tax Law</h2>
                <p className="text-gray-600">
                  Advising on direct and indirect tax matters, tax planning, and representation in tax disputes.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {/* Removed Image component */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Environmental Law</h2>
                <p className="text-gray-600">
                  Counseling on environmental regulations, compliance, and litigation related to environmental issues.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                {/* Removed Image component */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Immigration Law</h2>
                <p className="text-gray-600">
                  Assisting individuals and businesses with visa applications, immigration processes, and related legal
                  matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Need Assistance with Other Legal Matters?</h2>
            <p className="text-xl mb-8">Our team is ready to provide expert guidance and representation.</p>
            <a
              href="/contact"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
