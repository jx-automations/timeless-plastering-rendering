import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceModalProvider } from "@/components/sections/ServiceModalProvider";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VenetianFeature } from "@/components/sections/VenetianFeature";
import { Portfolio } from "@/components/sections/Portfolio";
import { OnSite } from "@/components/sections/OnSite";
import { Process } from "@/components/sections/Process";
import { WhyTimeless } from "@/components/sections/WhyTimeless";
import { Testimonials } from "@/components/sections/Testimonials";
import { Estimator } from "@/components/sections/Estimator";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <ServiceModalProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <IntroSection />
        <ServicesSection />
        <VenetianFeature />
        <Portfolio />
        <OnSite />
        <Process />
        <WhyTimeless />
        <Testimonials />
        <Estimator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </ServiceModalProvider>
  );
}
