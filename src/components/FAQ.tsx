import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does on-the-spot delivery work?", a: "Once we finish shooting your reel, our editor immediately works on transitions, color grading, and adding trending audio. The final reel is delivered to your phone within 10 minutes via AirDrop or WhatsApp." },
  { q: "What device do you shoot on?", a: "We shoot exclusively on the latest iPhone Pro models (currently iPhone 15 Pro Max) to ensure cinematic 4K quality with ProRes-grade footage." },
  { q: "Can I choose the music or transitions?", a: "Absolutely! You can request specific audio tracks or transition styles. Our editors are trained in all trending formats and will accommodate your preferences." },
  { q: "Do you travel to event locations?", a: "Yes, we come to your event location anywhere in the city. Travel charges may apply for locations outside city limits." },
  { q: "What's your cancellation policy?", a: "You can cancel or reschedule up to 24 hours before the shoot for a full refund. Cancellations within 24 hours are subject to a 50% fee." },
  { q: "Is there a minimum booking requirement?", a: "No minimum booking! You can book as few as 1 reel. Our Basic plan starts at just ₹1,999 for 2 reels." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0D0507 100%)" }}>
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 uppercase tracking-wider font-body mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#C8102E] to-[#E31B23] bg-clip-text text-transparent">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C8102E]/0 to-[#C8102E]/0 rounded-2xl group-hover:from-[#C8102E]/20 group-hover:to-[#E31B23]/20 transition-all duration-500 blur opacity-0 group-hover:opacity-100"></div>

              {/* FAQ Item */}
              <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#C8102E]/12 to-[#C8102E]/5 backdrop-blur-sm border border-[#C8102E]/20 hover:border-[#C8102E]/40 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold font-heading text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-red-400 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
                  <p className="text-sm text-gray-300 font-body leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;