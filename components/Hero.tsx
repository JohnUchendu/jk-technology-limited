
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-purple-900 text-white relative overflow-hidden">
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 py-24 lg:py-32 animate-fade-in">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Empower Your Business with iBiz Business Suite
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90">
            iBiz Business Suite provides free productivity tools and premium business solutions to help your company run smarter, faster, and easier. From QR codes and invoices to professional websites and business emails — everything your business needs, all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
            <Link
              href="https://ibiz.name.ng"
              className="bg-white text-blue-950 px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-purple-700 hover:text-white transition-all duration-300 ease-in-out"
              aria-label="Try iBiz Business Suite free tools"
            >
              Try Free Tools
            </Link>
            <Link
              href="https://ibiz.name.ng"
              className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold hover:bg-purple-700 hover:border-purple-700 transition-all duration-300 ease-in-out"
              aria-label="Explore premium iBiz Business Suite services"
            >
              Explore Premium Services
            </Link>
          </div>
        </div>

        {/* Right Side: iBiz Screenshot */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg shadow-xl rounded-xl overflow-hidden">
            <Image
              src="/ibizsc.png" // replace with your actual screenshot path
              alt="iBiz Business Suite Dashboard"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
            <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Free & Premium Tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
