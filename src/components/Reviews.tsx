import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", role: "Wedding Planner", text: "OnspotShoots made our event unforgettable! The reels were delivered in minutes and looked absolutely professional.", rating: 5 },
  { name: "Arjun Mehta", role: "Content Creator", text: "I've tried many services but nothing beats the speed and quality. 10-minute delivery is real!", rating: 5 },
  { name: "Sneha Patel", role: "Event Host", text: "Booked the premium plan for our corporate event. The team was professional and the reels went viral.", rating: 5 },
  { name: "Rahul Verma", role: "DJ & Artist", text: "Super impressed with the quality on iPhone. Clean edits, trendy transitions. Will book again for sure.", rating: 4 },
];

const Reviews = () => (
  <section id="reviews" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #000000 0%, #0D0507 100%)" }}>
    {/* Animated background blobs */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 uppercase tracking-wider font-body mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          What Our Loving <span className="bg-gradient-to-r from-[#C8102E] to-[#E31B23] bg-clip-text text-transparent">Customers</span> Say
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C8102E]/0 to-[#C8102E]/0 rounded-2xl group-hover:from-[#C8102E]/30 group-hover:to-[#E31B23]/30 transition-all duration-500 blur opacity-0 group-hover:opacity-100"></div>

            {/* Card content */}
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#C8102E]/12 to-[#C8102E]/5 backdrop-blur-sm border border-[#C8102E]/20 hover:border-[#C8102E]/40 transition-all duration-300 p-6 h-full">
              <Quote className="h-6 w-6 text-[#C8102E]/30 mb-3" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-3.5 w-3.5 ${si < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-300 font-body leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#C8102E] to-[#9B0E24] flex items-center justify-center text-xs font-bold text-white font-heading shadow-lg shadow-[#C8102E]/20">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold font-heading text-white">{review.name}</p>
                  <p className="text-xs text-gray-400 font-body">{review.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;