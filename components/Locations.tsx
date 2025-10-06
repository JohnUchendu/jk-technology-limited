"use client";

import Link from "next/link";

export default function Locations() {
  const locations = [
    {
      name: "Nigeria",
      description: "Delivering digital solutions and iBiz Business Suite tools across Lagos, Abuja, Port Harcourt, and beyond to help businesses operate smarter.",
    },
    {
      name: "South Africa",
      description: "Empowering companies in Capetown and JoBurg with secure, scalable business platforms and productivity tools.",
    },
    {
      name: "U.K.",
      description: "Supporting enterprises in London and Manchester with cloud-ready solutions for growth, efficiency, and seamless operations.",
    },
  ];

  return (
    <section
      id="locations"
      className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Our Service Regions"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Our Service Regions
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
       We provide innovative digital solutions, including iBiz Business Suite, across <strong className="text-purple-600">Nigeria, South Africa, U.K. and globally</strong>. We help businesses boost productivity, streamline operations, and scale with confidence.
        </p>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 max-w-[250px] mx-auto animate-fade-in-delay-${index + 1}`}
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{location.name}</h3>
              <p className="text-sm sm:text-base text-gray-600">{location.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-12">
          <Link
            href="https://ibiz.name.ng"
            className="inline-block bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Try iBiz Business Suite free tools"
          >
            Try Free Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
