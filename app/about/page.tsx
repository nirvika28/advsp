import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Our History and Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our History and Expertise</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For over 26 years, Advocate SP AGGARWAL has been a trusted name in resolving legal challenges, with an
              impressive track record of successfully handling many cases. Founded in 1999 by SP AGGARWAL, we are
              recognized for representing high-net-worth corporates, businesses, and individuals in India and abroad.
              With a special focus on complex litigation cases and advisory, we are specialized in Property Law, Family
              Law, Employment and Labor Law, Corporate and Commercial Law, Intellectual Property Law, and Criminal Law.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              <Link href="/contact">MAKE AN APPOINTMENT</Link>
            </Button>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment is to find the best legal solutions customized to your unique circumstances, ensuring that
              your interests are always our priority. We believe in building lasting relationships based on trust and
              mutual respect, ensuring every client receives personalized attention and the highest standard of legal
              counsel.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/law-books.png" // Updated image source
                alt="Law Books" // Updated alt text
                width={600} // Explicit width
                height={400} // Explicit height
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Advocate SP AGGARWAL is more than just legal advisors; we believe in building meaningful relationships
                with our clients. We are not just a law firm serving a client but a trusted partner invested in your
                success. We pay meticulous attention to listen and understand every intricate detail of your case,
                analyzing what truly matters to you. With this insight, we offer legal solutions delivered with utmost
                care and precision. This ensures that our strategies don't just solve today's challenges but also
                prepare you for tomorrow's opportunities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With the principle of integrity, transparency, and accountability, Let us stand by your side to navigate
                your legal challenges and secure your future.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Advocate SP AGGARWAL believes that the true driving force behind exceptional legal performance is passion
              for justice—not monetary gain.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Recognized as the Best Law Firm in Delhi, Advocate SP AGGARWAL is proudly recognized as one of the firm in
              Delhi.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As one of the most trusted legal advisors in Delhi, Advocate SP AGGARWAL remains dedicated to
              strengthening its reputation as a leading firm in India by consistently delivering practical and effective
              legal solutions that truly meet our clients' needs.
            </p>
          </div>
        </section>

        {/* Get Expert Legal Consultation Section */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get Expert Legal Consultation from a Top Law Firm in Delhi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Headquartered in Delhi, Advocate SP AGGARWAL is proudly recognized as one of the firm in Delhi.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As one of the most trusted legal advisors in Delhi, Advocate SP AGGARWAL remains dedicated to
              strengthening its reputation as a leading firm in India by consistently delivering practical and effective
              legal solutions that truly meet our clients' needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer both in-person and online consultations, ensuring flexibility and accessibility for our clients.
              Call us at 8920245815 to schedule your consultation and take the first step toward resolving your legal
              concerns with confidence. Let Advocate SP AGGARWAL be your reliable partner in securing justice and
              safeguarding your interests.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
