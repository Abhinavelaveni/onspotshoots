import { motion } from "framer-motion";
import { Timer, Award, TrendingUp, Shield, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: <Timer className="h-6 w-6" />,
    title: "Lightning Fast",
    desc: "Shot, edited, and delivered in under 10 minutes. No other service comes close.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Trained & Certified",
    desc: "Our reel makers are certified and trained to capture the best moments with precision.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Trending Content",
    desc: "We stay on top of the latest Instagram trends to keep your reels relevant and engaging.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Affordable & Transparent",
    desc: "Simple pricing with no hidden fees. What you see is what you pay.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Premium Quality",
    desc: "Shot on iPhone Pro with professional editing, color grading, and trending audio.",
  },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
          Why Choose Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
          Not Just Instant Delivery, <span className="text-gradient-primary">But...</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-base max-w-md mx-auto">
          Here's what sets onspotshoots apart from the rest.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group rounded-2xl border border-border bg-background p-7 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {r.icon}
            </div>
            <h3 className="text-base font-bold font-heading mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
