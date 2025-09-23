"use client";

export default function Steps() {
  const steps = [
    {
      title: "Contact Us",
      desc: "Reach out through our form or email to discuss your needs.",
    },
    {
      title: "Choose Your Service",
      desc: "Select from email marketing, websites, or iBiz tools tailored for you.",
    },
    {
      title: "Grow With Us",
      desc: "We launch your campaign or platform, driving measurable results.",
    },
  ];

  return (
    <section
      id="steps"
      className="bg-gradient-to-b from-blue-50 to-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Steps to Get Started"
    >
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          3 Easy Steps to Get Started
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all duration-300 max-w-[300px] mx-auto animate-fade-in-delay-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-semibold text-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-base sm:text-lg text-gray-700">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}