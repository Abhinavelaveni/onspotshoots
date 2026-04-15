import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Wedding Planner",
    text: "OnspotShoots made our event unforgettable! The reels were delivered in minutes and looked absolutely professional.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Content Creator",
    text: "I've tried many services but nothing beats the speed and quality. 10-minute delivery is real!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Event Host",
    text: "Booked the premium plan for our corporate event. The team was professional and the reels went viral on Instagram.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "DJ & Artist",
    text: "Super impressed with the quality on iPhone. Clean edits, trendy transitions. Will book again for sure.",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 gradient-red-white" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/[0.04] blur-[80px]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-5">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight">
            What Our Loving <span className="text-gradient-primary">Customers</span> Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl border border-border/40 bg-primary-foreground/50 backdrop-blur-2xl p-7 shadow-card shadow-card-hover transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl gradient-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-foreground/[0.06] to-transparent pointer-events-none" />

              <div className="relative">
                <Quote className="h-7 w-7 text-primary/15 mb-4" />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-4 w-4 ${si < r.rating ? "fill-primary text-primary" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground font-heading shadow-primary">
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-heading">{r.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{r.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
