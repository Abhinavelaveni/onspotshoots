import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Wedding Planner",
    text: "OpenShoot made our event unforgettable! The reels were delivered in minutes and looked absolutely professional.",
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
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 ${si < r.rating ? "fill-primary text-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">"{r.text}"</p>
              <div>
                <p className="text-sm font-semibold font-heading">{r.name}</p>
                <p className="text-xs text-muted-foreground font-body">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
