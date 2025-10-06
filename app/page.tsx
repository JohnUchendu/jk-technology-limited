import type {Metadata} from "next"

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jktl.com.ng"),
  alternates: {
    canonical: "https://www.jktl.com.ng",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  
  title: "JK TECHNOLOGY LIMITED",
  description: "Empowering businesses around the world",
  generator: "",
  applicationName: "JKTL",
  referrer: "origin-when-cross-origin",
  keywords: ["Corporate digital plaform buidling"],
  authors: [{ name: "JKTL" }],
  creator: "JKTL",
  publisher: "JKTL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

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
