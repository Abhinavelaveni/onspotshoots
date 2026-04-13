import { motion } from "framer-motion";
import { Check, Sparkles, Crown } from "lucide-react";

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
      "Fast Delivery (10 mins post shoot)",
      "Trained and Certified Reel Maker",
      "onspotshoots Branding Included",
    ],
    popular: false,
  },
  {
    name: "Premium",
    subtitle: "Full-Day Plan",
    tag: "Most Popular",
    description: "Ideal for events and creators who need more time and more content.",
    price: "₹2,999",
    icon: <Crown className="h-5 w-5" />,
    features: [
      "3 Edited Reels",
      "Shot on Latest iPhone",
      "Fast Delivery (10 mins post shoot)",
      "Trained and Certified Reel Maker",
      "onspotshoots Branding Included",
    ],
    popular: true,
  },
];

const Plans = () => {
  return (
    <section id="plans" className="py-28 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[100px]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
            Simple <span className="text-gradient-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-md mx-auto">
            No hidden fees. Pick a plan that works for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                plan.popular
                  ? "gradient-dark text-primary-foreground shadow-2xl shadow-glow"
                  : "bg-card border border-border shadow-card shadow-card-hover"
              }`}
            >
              {/* Glow effect on popular */}
              {plan.popular && (
                <>
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/30 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute -top-4 left-8 inline-flex items-center gap-1.5 rounded-full gradient-primary shadow-primary px-5 py-1.5 text-xs font-bold text-primary-foreground font-body uppercase tracking-wider">
                    <Crown className="h-3 w-3" />
                    {plan.tag}
                  </span>
                </>
              )}

              {/* Card content */}
              <div className="relative">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-6 ${
                  plan.popular ? "gradient-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading">{plan.name}</h3>
                <p className={`text-sm font-medium mt-1 ${plan.popular ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  {plan.subtitle}
                </p>
                <p className={`text-sm mt-3 leading-relaxed ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="my-8 flex items-baseline gap-1">
                  <span className="text-5xl font-bold font-heading">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
                    + GST
                  </span>
                </div>

                <div className={`h-px mb-8 ${plan.popular ? "bg-primary-foreground/10" : "bg-border"}`} />

                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + fi * 0.05 }}
                      className="flex items-start gap-3 text-sm font-body"
                    >
                      <div className={`flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 mt-0.5 ${
                        plan.popular ? "gradient-primary" : "bg-primary/10"
                      }`}>
                        <Check className={`h-3 w-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <span className={plan.popular ? "text-primary-foreground/80" : ""}>{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center rounded-xl py-4 text-sm font-semibold font-body transition-all duration-300 ${
                    plan.popular
                      ? "gradient-primary text-primary-foreground shadow-primary hover:shadow-lg"
                      : "bg-foreground text-primary-foreground hover:bg-foreground/90"
                  }`}
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
