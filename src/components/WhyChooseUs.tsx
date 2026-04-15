import { motion } from "framer-motion";
import { Timer, Award, TrendingUp, Shield, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: <Timer className="h-7 w-7" />,
    title: "Lightning Fast",
    desc: "Your reels are shot, edited, and delivered in under 10 minutes. No other service comes close.",
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: "Trained Professionals",
    desc: "Our reel makers are certified and trained to capture the best moments with cinematic precision.",
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: "Trending Content",
    desc: "We stay on top of the latest Instagram and YouTube trends to keep your reels relevant and engaging.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Affordable & Transparent",
    desc: "Simple pricing with no hidden fees. What you see is what you pay — quality without the premium price tag.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Premium Quality",
    desc: "Shot on the latest iPhone Pro with professional editing, color grading, and trending audio.",
  },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-32 md:py-40 relative overflow-hidden">
    <div className="absolute inset-0 gradient-red-white" />
    <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary/[0.04] blur-[100px]" />

    <div className="relative container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-5">
          Why Choose Us
        </span>
        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight">
          Why <span className="text-gradient-primary">onspotshoots</span>?
        </h2>
        <p className="mt-6 text-muted-foreground font-body text-lg max-w-md mx-auto">
          Here's what makes us the #1 choice for instant reel shooting.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className={`group relative rounded-3xl border border-border/40 bg-primary-foreground/50 backdrop-blur-2xl p-8 shadow-card shadow-card-hover transition-all duration-300 ${
              i === reasons.length - 1 && reasons.length % 3 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="absolute inset-0 rounded-3xl gradient-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:gradient-primary group-hover:text-primary-foreground group-hover:shadow-primary transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
