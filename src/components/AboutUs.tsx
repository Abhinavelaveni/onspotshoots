import { motion } from "framer-motion";
import { Smartphone, Zap, Film, Heart } from "lucide-react";

const highlights = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Shot on iPhone",
    desc: "We use the latest iPhone Pro for cinematic, high-quality footage every time.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "10-Min Delivery",
    desc: "Your edited reels are delivered within 10 minutes of the shoot — no waiting.",
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: "Trending Edits",
    desc: "Our editors use the latest trends, transitions, and audio to make your reels pop.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Made with Love",
    desc: "Every reel is crafted with care, creativity, and attention to detail.",
  },
];

const AboutUs = () => (
  <section id="about" className="py-32 md:py-40 relative overflow-hidden">
    <div className="absolute inset-0 gradient-subtle" />
    <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/[0.03] blur-[120px]" />

    <div className="relative container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-6">
            About Us
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-[1.05]">
            We Create <span className="text-gradient-primary">Instant</span> Reels
          </h2>
          <p className="mt-8 text-lg text-muted-foreground font-body leading-relaxed max-w-lg">
            <strong className="text-foreground">onspotshoots</strong> is India's fastest on-the-spot reel shooting service. We show up at your event, shoot professional reels on the latest iPhone, edit them with cinematic transitions, and deliver the final product to you — all within 10 minutes.
          </p>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-lg">
            Whether it's a wedding, birthday, corporate event, or a casual hangout — we make sure every moment becomes a viral-worthy reel.
          </p>
        </motion.div>

        {/* Right: Feature cards */}
        <div className="grid grid-cols-2 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl border border-border/40 bg-primary-foreground/50 backdrop-blur-2xl p-6 shadow-card shadow-card-hover transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl gradient-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:gradient-primary group-hover:text-primary-foreground group-hover:shadow-primary transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold font-heading mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
