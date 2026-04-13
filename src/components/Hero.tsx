import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Play, Zap, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Reel shooting in action" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 gradient-hero opacity-95" />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-primary/40 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-5 py-2 mb-8"
            >
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-medium text-primary-foreground/80 font-body">Instant Reels in 10 Minutes</span>
            </motion.div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold font-heading text-primary-foreground leading-[0.9] tracking-tighter">
              onspot
              <span className="text-gradient-primary">shoots</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-primary-foreground/60 font-body max-w-lg leading-relaxed">
              Professional reels shot on the latest iPhone — edited and delivered to you in under 10 minutes. No wait, no hassle.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <motion.a
                href="#plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-primary shadow-primary px-8 py-4 text-sm font-semibold text-primary-foreground font-body transition-all"
              >
                <Play className="h-4 w-4" />
                View Plans
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-xl px-8 py-4 text-sm font-semibold text-primary-foreground font-body transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                Book Now
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-16 flex gap-12"
            >
              {[
                { value: "10", label: "Min Delivery", suffix: "min" },
                { value: "500", label: "Reels Shot", suffix: "+" },
                { value: "4.9", label: "Rating", suffix: "★" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold font-heading text-primary-foreground">
                    {s.value}<span className="text-primary">{s.suffix}</span>
                  </p>
                  <p className="text-xs text-primary-foreground/40 font-body mt-1.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl animate-pulse-glow" />
              <div className="relative w-80 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.07] backdrop-blur-2xl p-10 space-y-7 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center shadow-primary">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-primary-foreground font-heading">Fast Delivery</p>
                    <p className="text-xs text-primary-foreground/50 font-body">10 mins post shoot</p>
                  </div>
                </div>
                <div className="h-px bg-primary-foreground/10" />
                <div className="space-y-4">
                  {["Shot on iPhone 15 Pro", "Cinematic Edits", "Trending Audio"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-primary-foreground/70 font-body">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="animate-shimmer rounded-xl h-2 w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
