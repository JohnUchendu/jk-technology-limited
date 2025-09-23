"use client";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-blue-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Contact Us"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>

        {/* Contact Form */}
        <form
          action="https://forms.zohopublic.com/form/submit"
          method="POST"
          className="max-w-lg mx-auto space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-md animate-fade-in-delay"
          aria-label="Contact form"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={4}
              required
              className="w-full px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-md hover:bg-purple-700 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Send message"
          >
            Send Message
          </button>
          {/* Placeholder for success message */}
          <div className="hidden text-green-600 text-sm sm:text-base" id="success-message">
            Thank you! Your message has been sent successfully.
          </div>
        </form>
      </div>
    </section>
  );
}