import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-12 pb-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-lg font-bold font-heading tracking-tight">
        onspot<span className="text-gradient-primary">shoots</span>
      </p>
      <div className="flex items-center gap-6 flex-wrap justify-center">
        {["About", "Why Us", "Team", "Plans", "Reviews", "FAQ", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
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
