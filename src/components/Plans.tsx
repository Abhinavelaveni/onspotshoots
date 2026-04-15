import { motion } from "framer-motion";
import { Check, Sparkles, Crown, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Basic",
    subtitle: "Half-Day Plan",
    tag: "Event Essential",
    description: "Ideal for events and creators who need quick, quality content.",
    price: "₹1,999",
    icon: <Sparkles className="h-5 w-5" />,
    features: [
      "2 Edited Reels",
      "Shot on Latest iPhone",
      "Fast Delivery (10 mins)",
      "Trained Reel Maker",
      "Onspotshoots Branding",
    ],
    popular: false,
  },
  {
    name: "Premium",
    subtitle: "Full-Day Plan",
    tag: "Most Popular",
    description: "More time, more reels, more content for your event.",
    price: "₹2,499",
    icon: <Crown className="h-5 w-5" />,
    features: [
      "3 Edited Reels",
      "Shot on Latest iPhone",
      "Fast Delivery (10 mins)",
      "Trained Reel Maker",
      "Onspotshoots Branding",
    ],
    popular: true,
  },
];

const Plans = () => (
  <section id="plans" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0D0507 0%, #000000 100%)" }}>
    {/* Animated background blobs */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
          Pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Simple, Transparent <span className="bg-gradient-to-r from-[#C8102E] to-[#E31B23] bg-clip-text text-transparent">Pricing</span>
        </h2>
        <p className="mt-4 text-gray-400 font-body text-base max-w-md mx-auto">
          No hidden fees. Pick a plan that works for you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`group relative rounded-2xl p-8 transition-all duration-300 ${plan.popular
              ? "border-2 border-[#C8102E] bg-gradient-to-br from-[#C8102E]/12 to-[#C8102E]/5 backdrop-blur-sm shadow-2xl shadow-[#C8102E]/20"
              : "border border-[#C8102E]/20 bg-gradient-to-br from-[#C8102E]/12 to-[#C8102E]/5 backdrop-blur-sm hover:border-[#C8102E]/40 shadow-card"
              }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#C8102E] to-[#E31B23] px-4 py-1 text-xs font-bold text-white font-body uppercase tracking-wider shadow-lg shadow-[#C8102E]/30">
                <Crown className="h-3 w-3" />
                {plan.tag}
              </span>
            )}

            <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl mb-5 ${plan.popular
              ? "bg-gradient-to-r from-[#C8102E] to-[#9B0E24] text-white shadow-lg shadow-[#C8102E]/30"
              : "bg-[#C8102E]/20 text-[#C8102E]"
              }`}>
              {plan.icon}
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">{plan.name}</h3>
            <p className="text-sm text-gray-400 font-body mt-1">{plan.subtitle}</p>
            <p className="text-sm text-gray-400 font-body mt-3">{plan.description}</p>

            <div className="my-7 flex items-baseline gap-1">
              <span className={`text-5xl font-bold font-heading tracking-tight ${plan.popular ? "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm" : "text-white"}`}>{plan.price}</span>
              <span className="text-sm text-gray-400 font-body">+ GST</span>
            </div>

            <div className="h-px bg-[#C8102E]/20 mb-7" />

            <p className="text-xs font-bold font-heading uppercase tracking-wider text-gray-300 mb-4">What's Included</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300 font-body">
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 ${plan.popular ? "bg-[#C8102E]/20 text-[#C8102E]" : "bg-[#C8102E]/20 text-[#C8102E]"
                    }`}>
                    <Check className="h-3 w-3" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <motion.a
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("planSelected", { detail: plan.name }));
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center rounded-xl py-3.5 text-sm font-semibold font-body transition-all ${plan.popular
                  ? "bg-gradient-to-r from-[#C8102E] to-[#9B0E24] text-white shadow-lg shadow-[#C8102E]/30 hover:from-[#9B0E24] hover:to-[#7A0B1C]"
                  : "bg-white text-black hover:bg-gray-100"
                  }`}
              >
                Book Now
              </motion.a>
              <motion.a
                href="https://wa.me/8008254573?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full text-center rounded-xl py-3 text-sm font-semibold font-body border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Plans;