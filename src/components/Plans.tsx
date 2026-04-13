import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    subtitle: "Half-Day Plan",
    tag: "Event Essential",
    description: "Ideal for events and creators who need quick, quality content.",
    price: "₹1,999",
    features: [
      "2 Edited Reels",
      "Shot on Latest iPhone",
      "Fast Delivery (10 mins post shoot)",
      "Trained and Certified Reel Maker",
      "openshoot Branding Included",
    ],
    popular: false,
  },
  {
    name: "Premium",
    subtitle: "Full-Day Plan",
    tag: "Most Popular",
    description: "Ideal for events and creators who need more time and more content.",
    price: "₹2,999",
    features: [
      "3 Edited Reels",
      "Shot on Latest iPhone",
      "Fast Delivery (10 mins post shoot)",
      "Trained and Certified Reel Maker",
      "openshoot Branding Included",
    ],
    popular: true,
  },
];

const Plans = () => {
  return (
    <section id="plans" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            No hidden fees. Pick a plan that works for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 transition-all hover:shadow-xl ${
                plan.popular
                  ? "bg-foreground text-primary-foreground shadow-2xl scale-[1.02]"
                  : "bg-card border border-border shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-8 inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground font-body uppercase tracking-wider">
                  {plan.tag}
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-heading">{plan.name}</h3>
                <p className={`text-sm font-medium mt-1 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.subtitle} · {plan.tag}
                </p>
                <p className={`text-sm mt-2 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold font-heading">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.popular ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  + GST
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-body">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center rounded-lg py-3 text-sm font-semibold font-body transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-foreground text-primary-foreground hover:bg-foreground/90"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
