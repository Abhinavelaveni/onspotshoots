import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import VideoShowcase from "@/components/VideoShowcase";
import Team from "@/components/Team";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import DriveLink from "@/components/DriveLink";
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
          <Navbar />
          <Hero />
          <TrustBar />
          <AboutUs />
          <WhyChooseUs />
          <VideoShowcase />
          <Team />
          <Plans />
          <Reviews />
          <FAQ />
          <DriveLink />
          <ContactForm />
          <Footer />
          <WhatsAppFAB />
          <StickyCTA />
        </div>
      )}
    </>
  );
};

export default Index;
