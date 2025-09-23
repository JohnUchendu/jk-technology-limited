"use client";

import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { href: "#welcome", label: "Welcome" },
    { href: "#about", label: "About" },
    { href: "#services", label: "What We Do" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://twitter.com/jktechlimited", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com/company/jktechlimited", icon: Linkedin, label: "LinkedIn" },
    { href: "https://facebook.com/jktechlimited", icon: Facebook, label: "Facebook" },
  ];

  return (
    <footer
      className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative text-white/90"
      aria-label="Footer"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-6xl mx-auto animate-fade-in">
        {/* Company Info */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-200 mb-4">
            JK TECHNOLOGY LIMITED
          </h3>
          <p className="text-base sm:text-lg">
            &copy; 2025 JK TECHNOLOGY LIMITED. All Rights Reserved.
          </p>
          <p className="text-base sm:text-lg mt-2">
            Powered by <span className="text-blue-400 font-semibold">
             
              <Link
                      href="https://www.ibiz.name.ng"
                      className="text-base sm:text-lg hover:text-blue-600 transition-colors duration-300"
                    > iBiz Business Suite
                     
                    </Link>
               </span>
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>

        {/* Navigation & Contact/Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base sm:text-lg hover:text-purple-600 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <p className="text-base sm:text-lg">
              Email: <a href="mailto:info@jktechlimited.com" className="hover:text-purple-600 transition-colors duration-300">info@jktechlimited.com</a>
            </p>
            <p className="text-base sm:text-lg">
              Phone: <a href="tel:+2347036580994" className="hover:text-purple-600 transition-colors duration-300">+234 703 658 0994</a>
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-600 hover:scale-110 transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}