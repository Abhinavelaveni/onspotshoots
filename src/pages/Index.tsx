import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";
import DriveLink from "@/components/DriveLink";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <VideoShowcase />
    <Plans />
    <Reviews />
    <DriveLink />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
