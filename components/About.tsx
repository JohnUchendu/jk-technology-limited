"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      aria-label="About JK Technology Limited"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight animate-fade-in">
            About JK Technology Limited
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-delay">
          {/* Portrait */}
          <div className="flex justify-center mb-8">
            <Image
              src="/founder/jktl-founder.jpg" // replace with your actual image
              alt="Uchendu John Kelachi - Founder & CEO of JK Technology Limited"
              width={160}
              height={160}
              className="rounded-full shadow-md"
            />
          </div>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-900">
              Uchendu John Kelachi
            </span>{" "}
            is the Founder & CEO of{" "}
            <span className="font-semibold text-blue-900">
              JK Technology Limited (CAC RC-8754824)
            </span>. A Computer Science graduate from the University of Calabar and a candidate for CPN certification (CIS track), John specializes in{" "}
            <strong className="text-purple-600">
              building enterprise software and digital tools that help businesses grow.
            </strong>
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in-delay-2">
            JKTL is the creator of <strong className="text-blue-900">iBiz Business Suite</strong>, a platform that combines free productivity tools with premium business solutions — from QR codes and invoices to professional websites and marketing emails. We help SMEs and growing businesses streamline operations, increase productivity, and establish a professional online presence.
          </p>

          {/* Vision-driven Purpose */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in-delay-3">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Our mission is to{" "}
              <span className="text-blue-900 font-semibold">
                empower businesses of all sizes with accessible, reliable technology.
              </span>{" "}
              By offering a freemium model with high-value free tools and premium growth solutions, we help companies focus on what matters most — growth and efficiency.
            </p>
          </div>

          {/* Achievements */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in-delay-4">
            Under John's leadership, JKTL has successfully delivered enterprise software solutions for corporate clients like <strong className="text-blue-900">K.K. Ubani & Co.</strong> and helped countless SMEs adopt digital workflows. Our tools are designed to save time, reduce errors, and accelerate business growth.
          </p>

          {/* Future Focus */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in-delay-5">
            Looking ahead, JKTL aims to become a leading provider of{" "}
            <strong className="text-purple-600">
              scalable business software and growth solutions
            </strong>, enabling entrepreneurs and enterprises across Africa and beyond to thrive.{" "}
            <Link
              href="https://ibiz.name.ng"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Try iBiz Business Suite today
            </Link>{" "}
            and see how our tools can transform your business.
          </p>
        </div>
      </div>
    </section>
  );
}
