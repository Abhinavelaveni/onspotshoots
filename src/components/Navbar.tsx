import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Team", href: "#team" },
  { label: "Plans", href: "#plans" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-sm"
          : "bg-background/40 backdrop-blur-2xl border-b border-border/10"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-18 py-4">
        <a href="#" className="flex items-center gap-2.5" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="onspotshoots logo" className="h-9 w-9 object-contain" />
          <span className="text-xl font-bold font-heading tracking-tight">
            onspot<span className="text-gradient-primary">shoots</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 font-body relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <motion.a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl bg-[#25D366] shadow-[0_8px_30px_-8px_rgba(37,211,102,0.4)] px-6 py-2.5 text-sm font-semibold text-primary-foreground font-body transition-all flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl gradient-primary shadow-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground font-body transition-all"
          >
            Book Now
          </motion.a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
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
            className="lg:hidden border-t border-border/30 bg-background/60 backdrop-blur-2xl px-6 py-6 space-y-4 overflow-hidden"
          >
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground font-body hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-primary-foreground font-body text-center"
            >
              WhatsApp Us
            </a>
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
