import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Reel shooting in action" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80 font-body">Instant Reels in 10 Minutes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-primary-foreground leading-tight tracking-tight">
            open<span className="text-primary">shoot</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/70 font-body max-w-lg leading-relaxed">
            Professional reels shot on the latest iPhone — edited and delivered to you in under 10 minutes.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#plans"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground font-body transition-all hover:bg-primary/90 hover:scale-105"
            >
              View Plans
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/20 px-8 py-3.5 text-sm font-semibold text-primary-foreground font-body transition-all hover:bg-primary-foreground/10"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
