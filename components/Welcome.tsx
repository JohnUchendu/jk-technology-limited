"use client";

import Link from "next/link";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="bg-gradient-to-b from-blue-50 to-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Welcome to JK TECHNOLOGY LIMITED"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Welcome to JK TECHNOLOGY LIMITED
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-delay">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            We’re a forward-thinking <span className="font-semibold text-purple-600">software</span>, web, and mobile app company focused on delivering powerful tools to help businesses thrive.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            From free business tools and <span className="font-semibold text-purple-600">websites</span> to advanced <span className="font-semibold text-purple-600">email marketing</span> campaigns, we provide solutions that drive growth and credibility.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Get started with JK TECHNOLOGY LIMITED"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}