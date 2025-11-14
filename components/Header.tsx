'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/reviews", label: "Reviews" },
  ]

  const serviceItems = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/software-solutions", label: "Software Solutions" },
    // { href: "/services/ecommerce-platforms", label: "E-commerce" },
    { href: "/services/it-consulting", label: "IT Consulting" },
  ]

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Badge - Linked to Home */}
          <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image src="/logos/jktl-logo.png" width={100} height={100} alt='jktl logo'/>
                              
                
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">JK Technology Limited</h1>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                    ✓ CAC Registered
                  </span>
                  <span className="text-xs text-gray-500 hidden lg:inline">RC-8754824</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActiveLink(item.href)
                          ? 'text-blue-600 bg-blue-50 font-medium'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            
            >
              <Calendar className="w-4 h-4 mr-2" />
              Get Started
            </Button>
              </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href="/contact">
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white hidden xs:flex" 
              >
              <Calendar className="w-4 h-4 mr-1" />
              Start
            </Button>
              </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white absolute left-0 right-0 top-16 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {/* Main Navigation */}
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Submenu */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-500 mb-2">SERVICES</div>
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="px-3 py-4 space-y-3 border-t border-gray-200 mt-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                   
                  }}
                >
                  <Link href="/contact"></Link>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Consultation
                </Button>
                
              </div>
              
              {/* Company Info in Mobile Menu */}
              <div className="px-3 py-3 bg-gray-50 rounded-md mt-2">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full border border-green-200">
                      ✓ CAC Registered
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">RC-8754824</p>
                  <p className="text-xs text-gray-500 mt-1">Trusted Nigerian Company</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}