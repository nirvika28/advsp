"use client"

import { Facebook, Twitter, Linkedin, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/images/sp-aggarwal-logo-final.jpeg"
                alt="Advocate SP AGGARWAL Logo"
                width={180}
                height={90}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button and Social Icons */}
          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-3">
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-700 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>

              {/* Mobile Expertise Section */}
              <div className="px-4 py-2">
                <div className="text-gray-700 font-medium mb-2">EXPERTISE</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/practice-areas/corporate-law"
                    className="block py-1 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Corporate Law
                  </Link>
                  <Link
                    href="/practice-areas/civil-litigation"
                    className="block py-1 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Civil Litigation
                  </Link>
                  <Link
                    href="/practice-areas/criminal-law"
                    className="block py-1 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Criminal Law
                  </Link>
                  <Link
                    href="/practice-areas/family-law"
                    className="block py-1 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Family Law
                  </Link>
                  <Link
                    href="/practice-areas/property-law"
                    className="block py-1 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Property Law
                  </Link>
                  <Link
                    href="/practice-areas/labour-law"
                    className="block py-1 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Labour & Employment Law
                  </Link>
                  <Link
                    href="/practice-areas"
                    className="block py-1 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    View All
                  </Link>
                </div>
              </div>

              <Link
                href="/other-services"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                onClick={closeMobileMenu}
              >
                OTHER SERVICES
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>

              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 mt-4">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
