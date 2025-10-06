"use client";

import Link from "next/link";

export default function Experience() {
  const milestones = [
    {
      title: "Founded in 2018",
      description: "JKTL was created to empower businesses with innovative digital tools and productivity solutions.",
    },
    {
      title: "Expert Team",
      description: "Led by a UniCal Computer Science graduate, combining technical expertise with real-world business insights.",
    },
    {
      title: "Delivering Impact",
      description: "Building secure, scalable solutions like iBiz Business Suite to help companies operate smarter and grow faster.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Our Journey and Achievements"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Our Journey & Achievements
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Since 2018, JK TECHNOLOGY LIMITED has been creating <strong className="text-purple-600">innovative digital solutions</strong> that help businesses increase efficiency, streamline operations, and grow with confidence.
        </p>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-delay-${index + 1}`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
              <p className="text-sm text-white/80">{milestone.description}</p>
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
