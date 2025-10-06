"use client";

import Link from "next/link";
import { DollarSign, ShoppingCart, Users, Coffee, BookOpen, Briefcase } from "lucide-react";

export default function ServiceSectors() {
  const businessTypes = [
    {
      title: "Small & Medium Enterprises",
      benefit: "Streamline operations, manage invoices, and automate workflows.",
      icon: Briefcase,
    },
    {
      title: "E-commerce Stores",
      benefit: "Set up online stores, track sales, and accept payments seamlessly.",
      icon: ShoppingCart,
    },
    {
      title: "Freelancers & Solopreneurs",
      benefit: "Professional invoicing, branded documents, and client management.",
      icon: Users,
    },
    {
      title: "Restaurants & Retail",
      benefit: "Generate QR codes, receipts, and manage orders efficiently.",
      icon: Coffee,
    },
    {
      title: "Educational Institutions",
      benefit: "Create branded ID cards, manage student info, and send communications.",
      icon: BookOpen,
    },
    {
      title: "Finance & Service Providers",
      benefit: "Track clients, generate reports, and maintain professional credibility.",
      icon: DollarSign,
    },
  ];

  return (
    <section
      id="service-sectors"
      className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Businesses We Serve"
    >
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Businesses We Empower
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          iBiz Business Suite provides free tools and premium services to help businesses of all types run smarter, faster, and easier.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {businessTypes.map((biz, index) => (
            <article
              key={biz.title}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 max-w-[350px] mx-auto animate-fade-in-delay-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                <biz.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">{biz.title}</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4">{biz.benefit}</p>
              {/* <Link
                href="https://ibiz.name.ng/free-tools"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Try iBiz Now
              </Link> */}
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-12">
          <Link
            href="https://ibiz.name.ng/"
            className="inline-block bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Start using iBiz Business Suite"
          >
            Start Using iBiz
          </Link>
        </div>
      </div>
    </section>
  );
}
