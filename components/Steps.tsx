"use client";

import Link from "next/link";

export default function Steps() {
  const steps = [
    {
      title: "Connect with JKTL",
      desc: "Reach out to JK TECHNOLOGY LIMITED to discuss your business goals and explore tailored digital solutions.",
    },
    {
      title: "Experience Our Tools",
      desc: "Try iBiz Business Suite and other JKTL platforms to see how they simplify business operations and boost productivity.",
    },
    {
      title: "Launch & Grow",
      desc: "Deploy secure, scalable, cloud-ready solutions that help your business operate smarter and grow faster.",
    },
  ];

  return (
    <section
      id="steps"
      className="bg-gradient-to-b from-blue-50 to-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Steps to Start with JK TECHNOLOGY LIMITED"
    >
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          3 Steps to Get Started with JKTL
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Partner with JKTL to access business tools and digital solutions that simplify operations, enhance productivity, and support growth.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 max-w-[300px] mx-auto animate-fade-in-delay-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-semibold text-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-base sm:text-lg text-gray-700">{step.desc}</p>

              {/* Step-specific CTA */}
              {index === 0 && (
                <Link
                  href="/#contact"
                  className="text-purple-600 hover:text-purple-800 font-medium mt-4 inline-block"
                >
                  Contact JKTL
                </Link>
              )}
              {index === 1 && (
                <Link
                  href="https://ibiz.name.ng"
                  className="text-purple-600 hover:text-purple-800 font-medium mt-4 inline-block"
                >
                  Try Free Tools
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
