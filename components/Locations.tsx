"use client";

export default function Locations() {
  const locations = [
    { name: "Nigeria", description: "Serving businesses nationwide." },
    { name: "Ghana", description: "Empowering West African markets." },
    { name: "Kenya", description: "Driving innovation in East Africa." },
    { name: "Africa", description: "Expanding across the continent." },
  ];

  return (
    <section
      id="locations"
      className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Our Service Locations"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Our Service Locations
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          We proudly serve businesses in <strong className="text-purple-600">Nigeria</strong>,{" "}
          <strong className="text-purple-600">Ghana</strong>, <strong className="text-purple-600">Kenya</strong>, and across{" "}
          <strong className="text-purple-600">Africa</strong>.
        </p>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 max-w-[200px] mx-auto animate-fade-in-delay-${index + 1}`}
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}