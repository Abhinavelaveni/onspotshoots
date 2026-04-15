import { motion } from "framer-motion";
import { Users, Star, Film, Clock } from "lucide-react";

const stats = [
  { icon: <Film className="h-5 w-5" />, value: "500+", label: "Reels Delivered", color: "text-primary" },
  { icon: <Star className="h-5 w-5" />, value: "4.9/5", label: "Average Rating", color: "text-success" },
  { icon: <Users className="h-5 w-5" />, value: "200+", label: "Happy Clients", color: "text-secondary" },
  { icon: <Clock className="h-5 w-5" />, value: "10 Min", label: "Avg Delivery", color: "text-accent" },
];

const TrustBar = () => (
  <section className="section-white py-12 border-b border-border/50">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 justify-center md:justify-start"
          >
            <div className={`h-11 w-11 rounded-xl bg-muted flex items-center justify-center ${s.color}`}>
              {s.icon}
            </div>
            <div>
              <p className="text-xl font-bold font-heading text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground font-body">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
