"use client";

import Image from "next/image";

export default function Clients() {
  // Placeholder client logos - replace with actual logo paths
  const clients = [
    { src: "/logos/client-1.png", alt: "Client 1 Logo" },
    { src: "/logos/client-2.png", alt: "Client 2 Logo" },
    { src: "/logos/client-3.png", alt: "Client 3 Logo" },
    { src: "/logos/client-4.png", alt: "Client 4 Logo" },
    { src: "/logos/client-5.png", alt: "Client 5 Logo" },
  ];

  return (
    <section
      id="clients"
      className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Our Clients & Partners
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto">
          Trusted by businesses across Nigeria and Africa.
        </p>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={client.src}
              className={`relative h-16 w-auto max-w-[150px] mx-auto bg-white rounded-lg shadow-sm hover:shadow-md hover:grayscale-0 grayscale transition-all duration-300 hover:scale-105 animate-fade-in-delay-${index + 1}`}
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-contain p-2"
              />
              {/* Uncomment to add links to client websites */}
              {/* <Link href={client.link || "#"} className="absolute inset-0" aria-label={client.alt}></Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}