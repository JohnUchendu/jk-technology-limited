"use client";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight animate-fade-in">
            About Us
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in-delay">
            At <span className="font-semibold text-blue-900">JK TECHNOLOGY LIMITED</span>, we specialize in building innovative solutions tailored for small and large businesses. Our mission is to empower entrepreneurs with cutting-edge technology that drives growth and efficiency.
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in-delay-2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our flagship product, <strong className="text-blue-900">iBiz Business Suite</strong>, empowers entrepreneurs with <strong className="text-purple-600">free tools</strong>, <strong className="text-purple-600">professional websites</strong>, and <strong className="text-purple-600">powerful email systems</strong>.
            </p>
          </div>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in-delay-3">
            Beyond products, we also deliver <strong className="text-blue-900">bulk email marketing</strong>, <strong className="text-blue-900">copywriting</strong>, and <strong className="text-blue-900">web/mobile app development</strong> services designed to elevate your business to new heights.
          </p>
        </div>

        {/* Optional Stats or Highlights - Add if desired */}
        {/* 
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-delay-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">500+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">100%</h3>
            <p className="text-gray-600">Satisfaction</p>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}