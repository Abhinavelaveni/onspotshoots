import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Play, Zap, MessageCircle, Shield, Star, Clock, Heart, Smartphone } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Reel shooting" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 gradient-hero opacity-[0.92]" />
    </div>

    {/* Decorative */}
    <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
    <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

    <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-4 py-1.5 mb-7"
          >
            <Zap className="h-3.5 w-3.5 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground/80 font-body">
              Instant Reels in <span className="text-secondary font-bold">10 Minutes</span>
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-primary-foreground leading-[1.05] tracking-tight">
            Shoot • Edit • Deliver
            <br />
            <span className="text-gradient-primary">in 10 Minutes</span>
          </h1>

          <p className="mt-6 text-lg text-primary-foreground/60 font-body max-w-lg leading-relaxed">
            Professional reels shot on the latest iPhone — edited with trending transitions and delivered on the spot. No wait, no hassle.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#plans"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl gradient-primary shadow-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground font-body"
            >
              <Play className="h-4 w-4" />
              View Plans
            </motion.a>
            <motion.a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.4)] px-8 py-3.5 text-sm font-semibold text-primary-foreground font-body"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </motion.a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-5 flex-wrap"
          >
            <div className="flex items-center gap-1.5 rounded-full bg-primary-foreground/10 backdrop-blur px-3 py-1.5">
              <Shield className="h-3.5 w-3.5 text-success" />
              <span className="text-xs text-primary-foreground/70 font-body font-medium">Verified Pros</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-primary-foreground/10 backdrop-blur px-3 py-1.5">
              <Star className="h-3.5 w-3.5 text-secondary fill-secondary" />
              <span className="text-xs text-primary-foreground/70 font-body font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-primary-foreground/10 backdrop-blur px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-secondary" />
              <span className="text-xs text-primary-foreground/70 font-body font-medium">10-Min Delivery</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side: 3D Phone */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative" style={{ perspective: "1200px" }}>
            <div className="absolute -inset-8 rounded-[3rem] bg-primary/20 blur-3xl animate-pulse-glow" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ transformStyle: "preserve-3d", transform: "rotateY(-5deg) rotateX(2deg)" }}
            >
              <div className="relative w-64 h-[520px] rounded-[2.5rem] border-[3px] border-primary-foreground/15 bg-foreground/90 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-xl z-10" />
                <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-gradient-to-b from-primary/20 via-foreground/95 to-foreground">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-primary mb-5">
                      <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground ml-0.5" />
                    </div>
                    <p className="text-primary-foreground text-sm font-heading font-bold">Your Reel</p>
                    <p className="text-primary-foreground/40 text-xs font-body mt-1">Ready in 10 min</p>
                    <div className="mt-6 w-full space-y-3">
                      <div className="h-1.5 w-full rounded-full bg-primary-foreground/10 overflow-hidden">
                        <motion.div
                          animate={{ width: ["0%", "100%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="h-full gradient-primary rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-3 bottom-20 space-y-4">
                    {[Heart, MessageCircle, Smartphone].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + idx * 0.2 }}
                        className="h-9 w-9 rounded-full bg-primary-foreground/10 backdrop-blur-xl flex items-center justify-center"
                      >
                        <Icon className="h-3.5 w-3.5 text-primary-foreground/60" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-primary-foreground/20" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default Hero;
