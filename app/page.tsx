import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Services from "@/components/Services";
// import Clients from "@/components/Clients";
import TrustBadges from "@/components/TrustBadges";
import Steps from "@/components/Steps";
import Locations from "@/components/Locations";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import ServiceSectors from "@/components/ServiceSectors";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <About />
      <ServiceSectors />
      <Services />
      {/* <Clients /> */}
      <TrustBadges />
      <Steps />
      <Locations />
      <Experience />
      <ContactForm />
    </>
  );
}
