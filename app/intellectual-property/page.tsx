import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
// import Image from "next/image" // No longer needed for this section
import Link from "next/link"

export default function IntellectualPropertyPage() {
  const IPServices = [
    {
      title: "Patents",
      description:
        "Assisting with patent searches, drafting, filing, prosecution, and litigation for inventions across various industries.",
      href: "/intellectual-property/patents",
      // image: "/images/ip-service-icon.png", // Removed as per request
    },
    {
      title: "Trademarks",
      description: "Comprehensive services for trademark registration, protection, enforcement, and brand management.",
      href: "/intellectual-property/trademarks",
      // image: "/images/ip-service-icon.png", // Removed as per request
    },
    {
      title: "Copyrights",
      description:
        "Advising on copyright registration, protection of literary, artistic, and musical works, and infringement actions.",
      href: "/intellectual-property/copyrights",
      // image: "/images/ip-service-icon.png", // Removed as per request
    },
    {
      title: "IP Litigation",
      description:
        "Representing clients in disputes related to patent, trademark, and copyright infringement, and other IP rights.",
      href: "/intellectual-property/litigation",
      // image: "/images/ip-service-icon.png", // Removed as per request
    },
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Intellectual Property Services</h1>
        <p className="text-lg text-gray-700 mb-8">
          Our firm provides comprehensive legal services in all aspects of Intellectual Property Law, helping clients
          protect and enforce their valuable creations and innovations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IPServices.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              {/* Removed the image icon div */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.href} className="text-amber-600 hover:text-amber-700 font-semibold">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
