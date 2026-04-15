import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/30 py-14">
    <div className="absolute inset-0 gradient-subtle" />
    <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl font-bold font-heading tracking-tight"
      >
        onspot<span className="text-gradient-primary">shoots</span>
      </motion.p>
      <div className="flex items-center gap-8 flex-wrap justify-center">
        {["About", "Why Us", "Team", "Plans", "Reviews", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
            {l}
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} onspotshoots. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
