// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="bg-gray-50 fixed top-0 left-0 right-0 z-10 m-2 shadow-md">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logos/jktl-logo.png"
                alt="JK Technology Limited Logo"
                width={50}
                height={50}
                className="h-12 w-auto object-contain"
              />
              {/* <span className="text-xl font-bold text-purple-600">JK Technology</span> */}
            </Link>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-lg text-black rounded-md outline-none focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <X size={30} className="text-black/60" />
                ) : (
                  <Menu size={30} className="text-black/60" />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    Solutions
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#clients" onClick={() => setNavbar(!navbar)}>
                    Clients
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
