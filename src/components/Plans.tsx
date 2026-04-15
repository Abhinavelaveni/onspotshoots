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
      "onspotshoots Branding",
    ],
    popular: false,
  },
  {
    name: "Premium",
    subtitle: "Full-Day Plan",
    tag: "Most Popular",
    description: "More time, more reels, more content for your event.",
    price: "₹2,999",
    icon: <Crown className="h-5 w-5" />,
    features: [
      "3 Edited Reels",
      "Shot on Latest iPhone",
      "Fast Delivery (10 mins)",
      "Trained Reel Maker",
      "onspotshoots Branding",
    ],
    popular: true,
  },
];

const Plans = () => (
  <section id="plans" className="section-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
          Pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
          Simple, Transparent <span className="text-gradient-primary">Pricing</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-base max-w-md mx-auto">
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
            className={`group relative rounded-2xl p-8 transition-all duration-300 ${
              plan.popular
                ? "border-2 border-secondary bg-background shadow-lg shadow-secondary/10"
                : "border border-border bg-background shadow-card hover:shadow-card-hover"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1 rounded-full gradient-secondary shadow-secondary px-4 py-1 text-xs font-bold text-foreground font-body uppercase tracking-wider">
                <Crown className="h-3 w-3" />
                {plan.tag}
              </span>
            )}

            <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl mb-5 ${
              plan.popular ? "gradient-primary text-primary-foreground shadow-primary" : "bg-primary/10 text-primary"
            }`}>
              {plan.icon}
            </div>
            <h3 className="text-2xl font-bold font-heading">{plan.name}</h3>
            <p className="text-sm text-muted-foreground font-body mt-1">{plan.subtitle}</p>
            <p className="text-sm text-muted-foreground font-body mt-3">{plan.description}</p>

            <div className="my-7 flex items-baseline gap-1">
              <span className="text-5xl font-bold font-heading tracking-tight">{plan.price}</span>
              <span className="text-sm text-muted-foreground font-body">+ GST</span>
            </div>

            <div className="h-px bg-border mb-7" />

            <p className="text-xs font-bold font-heading uppercase tracking-wider text-foreground mb-4">What's Included</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm font-body">
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 ${
                    plan.popular ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center rounded-xl py-3.5 text-sm font-semibold font-body transition-all ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground shadow-primary"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Book Now
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full text-center rounded-xl py-3 text-sm font-semibold font-body border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 transition-all"
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
