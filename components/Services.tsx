"use client";

import Link from "next/link";
import { Mail, ToolCaseIcon, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Email Marketing",
      desc: "High-conversion bulk email campaigns to boost your reach.",
      icon: Mail,
    },
    {
      title: "Business Tools",
      desc: "Free tools like invoicing, QR codes, and websites for SMEs.",
      icon: ToolCaseIcon,
    },
    {
      title: "Web & Mobile Development",
      desc: "Scalable websites and apps to give your business an edge.",
      icon: Smartphone,
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-gray-50 to-blue-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Our Services"
    >
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          What We Do
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 max-w-[350px] mx-auto animate-fade-in-delay-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-base sm:text-lg text-gray-700">{service.desc}</p>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-12">
          <Link
            href="#contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Explore our services"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}