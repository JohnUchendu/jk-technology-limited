
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Leadership from '@/components/Leadership'
import Pricing from '@/components/Pricing'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'

import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <Services />
      <ContactForm 
  buttonText="I want to scale"
  showAdditionalFields={true}
  width="w-full max-w-lg"
  height="h-auto"
/>
      <Leadership />
      <Pricing />
      <Portfolio />
      
      <Testimonials /><br/>
      <ContactForm 
  buttonText="Your competitors have it, try one"
  showAdditionalFields={true}
  width="w-full max-w-lg"
  height="h-auto"
/>
    
    </main>
  )
}