import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border py-12">
    <div className="absolute inset-0 gradient-subtle" />
    <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl font-bold font-heading"
      >
        open<span className="text-gradient-primary">shoot</span>
      </motion.p>
      <div className="flex items-center gap-6">
        {["Plans", "Reviews", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
            {l}
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} openshoot. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
