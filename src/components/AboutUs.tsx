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
  <section id="about" className="section-gray py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight">
            We Create <span className="text-gradient-primary">Instant</span> Reels
          </h2>
          <p className="mt-6 text-base text-muted-foreground font-body leading-relaxed">
            <strong className="text-foreground">onspotshoots</strong> is India's fastest on-the-spot reel shooting service. We show up at your event, shoot professional reels on the latest iPhone, edit them with cinematic transitions, and deliver the final product — all within <span className="text-secondary font-semibold">10 minutes</span>.
          </p>
          <p className="mt-3 text-base text-muted-foreground font-body leading-relaxed">
            Whether it's a wedding, birthday, corporate event, or casual hangout — we make every moment a viral-worthy reel.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border bg-background p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold font-heading mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
