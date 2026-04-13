import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Plans", href: "#plans" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-2xl border-b border-border/30"
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-18 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="onspotshoots logo" className="h-9 w-9 object-contain" />
          <span className="text-xl font-bold font-heading tracking-tight">
            onspot<span className="text-gradient-primary">shoots</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 font-body relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl gradient-primary shadow-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground font-body transition-all"
          >
            Book Now
          </motion.a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/30 bg-background/60 backdrop-blur-2xl px-6 py-6 space-y-4 overflow-hidden"
          >
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground font-body hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-2xl gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground font-body text-center shadow-primary">
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
