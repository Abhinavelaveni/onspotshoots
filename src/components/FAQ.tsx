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
    <section id="faq" className="section-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
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
              className="rounded-2xl border border-border bg-background shadow-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold font-heading text-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
