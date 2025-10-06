"use client";

import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="bg-gradient-to-b from-blue-50 to-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Welcome to JK TECHNOLOGY LIMITED"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logos/jktl-logo.png" // replace with your actual logo path
            alt="JK Technology Limited Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>

        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Welcome to JKTL
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-10"></div>

        {/* Vision, Mission, Motto */}
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-delay">
          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-3"> Vision</h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
              "To lead humanity into a future so vast and unfathomable it feels like destiny — 
              where technology becomes the unseen bridge between imagination and reality."
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-3"> Mission</h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
              "To design and deliver technologies that expand human possibility — guiding people 
              and enterprises toward horizons they never thought possible, yet can touch with us."
            </p>
          </div>

          {/* Motto */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-3"> Motto</h3>
            <p className="text-xl sm:text-2xl font-medium text-gray-900">
              “Beyond belief. Within reach.”
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="#contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Get started with JK Technology Limited"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
