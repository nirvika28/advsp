"use client"

import { Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image" // Import Image component

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {" "}
          {/* Adjusted padding to py-2 */}
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/sp-aggarwal-logo-final.jpeg" // Updated to new logo
                alt="Advocate SP AGGARWAL Logo" // Updated alt text
                width={180} // Adjusted width for new logo
                height={90} // Adjusted height for new logo
                className="h-auto"
              />
            </Link>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
              ABOUT US
            </Link>

            {/* Expertise Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm text-gray-700 hover:text-amber-600 transition-colors focus:outline-none">
                EXPERTISE
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md py-1">
                <DropdownMenuItem>
                  <Link
                    href="/practice-areas/corporate-law"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Corporate Law
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/practice-areas/civil-litigation"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Civil Litigation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/practice-areas/criminal-law"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Criminal Law
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/practice-areas/family-law"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Family Law
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/practice-areas/property-law"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Property Law
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/practice-areas/labour-law"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Labour & Employment Law
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/practice-areas"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    View All
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/other-services" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
              OTHER SERVICES
            </Link>
            <Link href="/contact" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
              CONTACT
            </Link>
          </nav>
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="text-amber-600 hover:text-amber-700">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-amber-600 hover:text-amber-700">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-amber-600 hover:text-amber-700">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
