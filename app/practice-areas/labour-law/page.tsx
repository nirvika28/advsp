import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function LabourLawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Labour & Employment Law</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive legal solutions for employers and employees in the workplace.
            </p>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Labour & Employment Law Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether it may manufacturing unit or a corporate company, employment compliances and Labour law have
                become one of most important issues for any company who has operation in India. Our firm provides expert
                legal advice and representation on all aspects of labour and employment law, ensuring compliance and
                resolving workplace disputes. We assist both employers and employees in navigating the complex framework
                of Indian labour laws.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team stays updated with the latest amendments and judicial pronouncements to provide accurate and
                effective legal strategies. We focus on preventing disputes through proactive compliance and resolving
                them efficiently when they arise.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Areas of Expertise:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>
                  <strong>Employment Contracts & Policies:</strong> Drafting and reviewing employment agreements, HR
                  policies, and employee handbooks.
                </li>
                <li>
                  <strong>Workplace Harassment & Discrimination:</strong> Advising on prevention of sexual harassment
                  (POSH Act) compliance, investigations, and related litigation.
                </li>
                <li>
                  <strong>Disciplinary Proceedings:</strong> Guiding employers through disciplinary actions, inquiries,
                  and termination processes.
                </li>
                <li>
                  <strong>Termination & Severance:</strong> Advising on legal aspects of employee termination, layoffs,
                  and severance packages.
                </li>
                <li>
                  <strong>Labour Disputes & Litigation:</strong> Representing clients in industrial disputes, unfair
                  labour practices, and other labour court matters.
                </li>
                <li>
                  <strong>Compliance with Labour Laws:</strong> Ensuring adherence to various labour laws, including
                  Factories Act, Minimum Wages Act, Provident Fund Act, and ESI Act.
                </li>
                <li>
                  <strong>Trade Union Matters:</strong> Advising on trade union recognition, collective bargaining, and
                  industrial relations.
                </li>
                <li>
                  <strong>Employee Benefits & Compensation:</strong> Legal advice on provident fund, gratuity, bonus,
                  and other employee benefits.
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help businesses maintain a compliant and harmonious work environment, and assist employees in
                protecting their rights, ensuring fair and just outcomes in all employment-related matters.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/labour-law-gavel.png" // Updated image source
                alt="Labour Law"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seeking Labour Law Expertise?</h2>
            <p className="text-xl mb-8">Contact us for tailored legal solutions for your workplace.</p>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Expert Advice
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
