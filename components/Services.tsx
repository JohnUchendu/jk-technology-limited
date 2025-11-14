import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: "Web Development",
    description: "High-converting websites that establish credibility and drive business growth",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
  },
  {
    title: "Software Solutions",
    description: "Custom software that automates processes and boosts efficiency",
    features: ["Process Automation", "Scalable Architecture", "API Integration", "Maintenance"]
  },
  {
    title: "E-commerce Platforms",
    description: "Online stores that convert visitors into loyal customers",
    features: ["Payment Integration", "Inventory Management", "Analytics", "Mobile Optimized"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stop Losing Business to Competitors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your competitors are investing in technology. Don't get left behind.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}