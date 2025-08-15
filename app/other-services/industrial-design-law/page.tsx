import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IndustrialDesignLawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Industrial Design Law</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Protecting the aesthetic and ornamental aspects of your creations.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <Image
                src="/images/industrial-design.png"
                alt="Industrial Design Law"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900">Safeguarding Your Unique Designs</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Design law in India is designed to protect registered designs and encourage creative design work. This
                protection is given to the visual appearance of a product or an article, which includes its shape,
                configuration, pattern, ornament, or composition of lines or colors applied to any article. The Designs
                Act, 2000, governs the registration and protection of industrial designs in India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Advocate SP AGGARWAL, we assist clients in securing design registrations, ensuring that their unique
                creations are legally protected from unauthorized copying or imitation. Our services include conducting
                design searches, preparing and filing design applications, prosecuting applications before the design
                office, and handling design infringement and enforcement matters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the importance of design in today's competitive market and are committed to helping
                designers and businesses protect their valuable intellectual assets. Our expertise ensures that your
                innovative designs receive the strongest possible legal protection.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Protect Your Designs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Secure Your Industrial Designs</h2>
            <p className="text-xl mb-8">
              Contact Advocate SP AGGARWAL for expert assistance with industrial design registration and protection.
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
