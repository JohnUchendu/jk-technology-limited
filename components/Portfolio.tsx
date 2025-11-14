import ContactForm from "./ContactForm"


const projects = [
  {
    title: "E-commerce Platform",
    description: "Increased client revenue by 156% with modern online store",
    result: "156% Revenue Growth",
    image: "/project1.jpg"
  },
  {
    title: "SaaS Application",
    description: "Automated manual processes, saving 20+ hours weekly",
    result: "80% Time Saved",
    image: "/project2.jpg"
  },
  {
    title: "Corporate Website",
    description: "Redesigned outdated site, boosting lead generation by 47%",
    result: "47% More Leads",
    image: "/project3.jpg"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results That Build Trust
          </h2>
          <p className="text-xl text-gray-600">
            See how we've helped businesses overcome technical limitations and achieve growth
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{project.title}</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <span className="text-green-700 font-semibold">{project.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ContactForm
  buttonText="Start Automation"
  buttonVariant="outline"
  compact={true}
  showAdditionalFields={false}
/>
      </div>
    </section>
  )
}