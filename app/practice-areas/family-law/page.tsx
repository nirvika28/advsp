import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function FamilyLawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Family Law</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Compassionate and effective legal solutions for sensitive family matters.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Family Law Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our compassionate family law attorney handles sensitive matters with care and professionalism. We assist
                clients with divorce proceedings, child custody and visitation, spousal support, domestic violence
                issues, and prenuptial agreements, aiming for amicable resolutions while safeguarding your interests. We
                understand the emotional complexities involved in family disputes and strive to provide supportive and
                effective legal guidance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our approach is to prioritize the well-being of all parties involved, especially children, while
                aggressively advocating for our clients' rights. We offer personalized legal strategies tailored to each
                family's unique circumstances, ensuring a dignified and fair resolution.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Areas of Expertise:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Divorce & Separation:</strong> Guiding clients through mutual consent divorce, contested
                  divorce, and judicial separation.
                </li>
                <li>
                  <strong>Child Custody & Visitation:</strong> Advocating for the best interests of children in custody
                  battles and visitation rights.
                </li>
                <li>
                  <strong>Alimony & Spousal Support:</strong> Assisting in determining fair maintenance and financial
                  support for spouses.
                </li>
                <li>
                  <strong>Domestic Violence Cases:</strong> Providing legal protection and representation for victims of
                  domestic violence.
                </li>
                <li>
                  <strong>Property Division:</strong> Advising on equitable distribution of marital assets and
                  liabilities.
                </li>
                <li>
                  <strong>Adoption:</strong> Facilitating legal adoption processes for families.
                </li>
                <li>
                  <strong>Prenuptial & Postnuptial Agreements:</strong> Drafting and reviewing agreements to protect
                  assets and define financial arrangements.
                </li>
                <li>
                  <strong>Guardianship:</strong> Assisting with legal guardianship for minors or incapacitated adults.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the emotional complexities of family disputes and strive to provide supportive and
                effective legal guidance, ensuring your peace of mind during challenging times.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/family-law-figures.png" // Updated image source
                alt="Family Law"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Navigating Family Legal Challenges?</h2>
            <p className="text-xl mb-8">Our dedicated family law team is here to help.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Seek Family Law Advice
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
