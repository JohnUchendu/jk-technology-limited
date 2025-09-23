"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-center py-44 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Optional Background Overlay for Depth */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
          Empowering Businesses With Smart Software & Marketing
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto">
          Producers of iBiz Business Suite — Free Tools, Websites, and Emailing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out"
            aria-label="Get started with JK Technology Limited"
          >
            Get Started
          </Link>
          <Link
            href="#about"
            className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 ease-in-out"
            aria-label="Learn more about JK Technology Limited"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}