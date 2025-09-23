"use client";

export default function Experience() {
  const milestones = [
    { title: "Founded in 2020", description: "Began our journey to empower businesses." },
    { title: "500+ Projects", description: "Delivered innovative solutions across industries." },
    { title: "Trusted by 100+ Clients", description: "Serving Nigeria and Africa with excellence." },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Our Experience"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          5+ Years of Excellence
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Delivering cutting-edge software, marketing, and business solutions since our
          inception. Trusted by clients across industries to provide growth-driven results.
        </p>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-delay-${index + 1}`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
              <p className="text-sm text-white/80">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}