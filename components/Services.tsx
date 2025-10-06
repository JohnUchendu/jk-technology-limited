"use client";

import Link from "next/link";
import { QrCode, FileText, CreditCard, Server, ShoppingCart, Mail } from "lucide-react";

export default function Services() {
  const freeTools = [
    { title: "QR Code Generator", benefit: "Create QR codes for payments, marketing, and sharing.", icon: QrCode },
    { title: "Invoice Generator", benefit: "Generate professional invoices instantly.", icon: FileText },
    { title: "Receipt Maker", benefit: "Track sales and payments with ease.", icon: CreditCard },
    { title: "Letterhead Designer", benefit: "Make branded letters for your business.", icon: Server },
    { title: "ID Card Designer", benefit: "Create professional ID cards for your team.", icon: FileText },
    { title: "SEO Audit Tool", benefit: "Check your website’s SEO performance.", icon: Server },
    { title: "Domain Checker", benefit: "Find and secure the perfect domain.", icon: Server },
    { title: "Website Speed Test", benefit: "Optimize your website performance.", icon: Server },
    { title: "Email Signature", benefit: "Create branded signatures for professional emails.", icon: Mail },
  ];

  const premiumServices = [
    { title: "Business Website", benefit: "Professional websites that convert visitors to customers.", icon: Server },
    { title: "Online Store", benefit: "Launch an e-commerce site and start selling instantly.", icon: ShoppingCart },
    { title: "Business & Marketing Emails", benefit: "Send campaigns with your own domain for credibility.", icon: Mail },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-blue-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">iBiz Business Suite</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          iBiz provides free tools to kickstart your business, plus premium services to grow and scale faster.
        </p>

        {/* Free Tools Grid */}
        <h3 className="text-2xl font-semibold text-purple-700 mb-6">Free Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {freeTools.map((tool, index) => (
            <article key={tool.title} className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 animate-fade-in-delay-${index + 1}`}>
              <div className="flex justify-center mb-4">
                <tool.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">{tool.title}</h4>
              <p className="text-gray-600 mb-4">{tool.benefit}</p>
              <Link href="https://ibiz.name.ng/" className="text-purple-600 hover:text-purple-800 font-medium">
                Try Free Tool
              </Link>
            </article>
          ))}
        </div>

        {/* Premium Services Grid */}
        <h3 className="text-2xl font-semibold text-purple-700 mb-6">Premium Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {premiumServices.map((service, index) => (
            <article key={service.title} className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 animate-fade-in-delay-${index + 1}`}>
              <div className="flex justify-center mb-4">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.benefit}</p>
              <Link href="https://ibiz.name.ng/" className="text-purple-600 hover:text-purple-800 font-medium">
                Get Premium Service
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
