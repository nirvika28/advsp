import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, PhoneIcon as Whatsapp } from "lucide-react"
import Image from "next/image" // Import Image component

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Link href="/">
                <Image
                  src="/images/sp-aggarwal-logo-final.jpeg" // Updated to new logo
                  alt="Advocate SP AGGARWAL Logo"
                  width={180} // Adjusted width for new logo
                  height={90} // Adjusted height for new logo
                  className="h-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Leading legal consultancy providing comprehensive legal solutions across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="text-gray-400 hover:text-amber-600 cursor-pointer" size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="text-gray-400 hover:text-amber-600 cursor-pointer" size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="text-gray-400 hover:text-amber-600 cursor-pointer" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-gray-300 hover:text-amber-600">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/other-services" className="text-gray-300 hover:text-amber-600">
                  Other Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise (formerly Practice Areas) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas/corporate-law" className="text-gray-300 hover:text-amber-600">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/intellectual-property" className="text-gray-300 hover:text-amber-600">
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/civil-litigation" className="text-gray-300 hover:text-amber-600">
                  Civil Litigation
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/criminal-law" className="text-gray-300 hover:text-amber-600">
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/family-law" className="text-gray-300 hover:text-amber-600">
                  Family Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  Advocate SP AGGARWAL <br />
                  2395A Narela Mandi extension <br />
                  gali doctor Ashok tuteja <br />
                  near Padam dham ujala boutique <br />
                  Delhi 110040
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-600" />
                <span className="text-gray-300 text-sm">+91-8920245815</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-600" />
                <span className="text-gray-300 text-sm">spadvocate1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Whatsapp size={16} className="text-amber-600" />
                <a href="https://wa.me/918920245815" className="text-gray-300 text-sm hover:text-amber-600">
                  WhatsApp: +91-8920245815
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Advocate SP AGGARWAL. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
