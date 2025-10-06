"use client";

import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar"; // Adjust path as needed
import Footer from "@/components/Footer"; // Adjust path as needed

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body
        className="font-sans text-xs sm:text-lg text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 min-h-screen pt-24 md:pt-20"
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}