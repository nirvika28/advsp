import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SexualHarassmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sexual Harassment at Workplaces</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Ensuring a safe and respectful work environment for all.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Approach to PoSH Law Compliance</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At SPJ Advocates, our lawyer in Delhi is always ready to help corporates create PoSH Law compliant
                workplaces. Sexual Harassment at workplaces is a major concern in this country. The Sexual Harassment of
                Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (PoSH Act) was enacted to provide
                protection against sexual harassment of women at workplace and for the prevention and redressal of
                complaints of sexual harassment and for matters connected therewith or incidental thereto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The PoSH Act mandates every employer having 10 or more employees to constitute an Internal Complaints
                Committee (ICC) at each office or administrative unit of the workplace. The ICC is responsible for
                receiving and redressing complaints of sexual harassment. Our services include assisting organizations
                in forming and training their ICCs, drafting comprehensive PoSH policies, conducting awareness workshops
                for employees, and providing legal representation in sexual harassment cases.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in proactive measures to prevent sexual harassment and foster a culture of respect and
                equality. Our team works closely with clients to ensure their workplaces are not only compliant with the
                law but also genuinely safe and inclusive for all employees.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get Legal Advice
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/sexual-harassment.png"
                alt="Sexual Harassment at Workplaces"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Ensure a Safe Workplace</h2>
            <p className="text-xl mb-8">
              Contact Advocate SP AGGARWAL for expert guidance on PoSH compliance and workplace safety.
            </p>
            <Link
              href="/contact"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
