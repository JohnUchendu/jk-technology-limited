"use client";

import { CheckCircle, Lock, Clock, Shield } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      title: "Proven Expertise",
      desc: "Has delivered enterprise solutions across multiple sectors since 2018.",
      icon: CheckCircle,
    },
    {
      title: "Secure & Reliable",
      desc: "We build platforms with bank-grade security and robust performance for businesses of all sizes.",
      icon: Lock,
    },
    {
      title: "Years of Experience",
      desc: "Over 7 years of technology solutions, with 500+ completed projects in the pipeline across Africa and rest of the world",
      icon: Clock,
    },
    {
      title: "CAC Registered",
      desc: "RC-8754824, is a verified Nigerian IT company you can trust.",
      icon: Shield,
    },
  ];

  return (
    <section
      id="trust-badges"
      className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Why Businesses Trust JK TECHNOLOGY LIMITED"
    >
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Why Businesses Trust JKTL
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          JKTL delivers innovative software and digital solutions, combining experience, security, and proven results to help businesses grow confidently across Africa and rest of the world.
        </p>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <article
              key={badge.title}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 max-w-[250px] mx-auto animate-fade-in-delay-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                <badge.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600">{badge.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
