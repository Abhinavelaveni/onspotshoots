import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", role: "Wedding Planner", text: "OnspotShoots made our event unforgettable! The reels were delivered in minutes and looked absolutely professional.", rating: 5 },
  { name: "Arjun Mehta", role: "Content Creator", text: "I've tried many services but nothing beats the speed and quality. 10-minute delivery is real!", rating: 5 },
  { name: "Sneha Patel", role: "Event Host", text: "Booked the premium plan for our corporate event. The team was professional and the reels went viral.", rating: 5 },
  { name: "Rahul Verma", role: "DJ & Artist", text: "Super impressed with the quality on iPhone. Clean edits, trendy transitions. Will book again for sure.", rating: 4 },
];

const Reviews = () => (
  <section id="reviews" className="section-gray py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
          What Our Loving <span className="text-gradient-primary">Customers</span> Say
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl border border-border bg-background p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <Quote className="h-6 w-6 text-primary/20 mb-3" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className={`h-3.5 w-3.5 ${si < r.rating ? "fill-secondary text-secondary" : "text-border"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground font-heading">
                {r.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold font-heading text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground font-body">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
