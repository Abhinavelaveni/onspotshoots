import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border shadow-lg py-3 px-6"
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-secondary" />
          <p className="text-sm font-body">
            <span className="font-semibold text-foreground">Limited offer:</span>{" "}
            <span className="text-secondary font-bold">10% off</span>{" "}
            <span className="text-muted-foreground">on your first booking!</span>
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 sm:flex-none text-center rounded-xl gradient-primary shadow-primary px-8 py-2.5 text-sm font-semibold text-primary-foreground font-body"
          >
            Book Now
          </motion.a>
          <motion.a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-primary-foreground font-body"
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
