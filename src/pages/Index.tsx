import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import BecomeCreator from "@/components/BecomeCreator";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      {loaded && (
        <div className="min-h-screen">
          <StickyCTA />
          <Navbar />
          <Hero />

          <AboutUs />
          <WhyChooseUs />
          <Team />
          <Plans />
          <Reviews />
          <FAQ />
          <BecomeCreator />
          <ContactForm />
          <Footer />
          <WhatsAppFAB />
        </div>
      )}
    </>
  );
};

export default Index;
