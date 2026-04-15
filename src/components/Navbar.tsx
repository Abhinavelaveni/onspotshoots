import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Team", href: "#team" },
  { label: "Plans", href: "#plans" },
  { label: "Reviews", href: "#reviews" },
  { label: "Creators", href: "#become-creator" },
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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/95 backdrop-blur-xl shadow-lg border-b border-[#C8102E]/20"
        : "bg-black/90 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 group">
          {/* Logo Image */}
          <img
            src="\src\assets\logo.png"
            alt="onspotshoots"
            className="h-16 lg:h-16 w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-all duration-200 font-body relative group ${l.label === "Contact"
                ? "rounded-xl bg-gradient-to-r from-[#C8102E] to-[#9B0E24] hover:from-[#9B0E24] hover:to-[#7A0B1C] shadow-lg shadow-[#C8102E]/30 px-6 py-2.5 text-white font-semibold"
                : scrolled
                  ? "text-gray-300 hover:text-red-400"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {l.label === "Contact" ? (
                l.label
              ) : (
                <>
                  {l.label}
                  {/* Underline effect for non-contact links */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C8102E] to-[#E31B23] transition-all duration-300 group-hover:w-full"></span>
                </>
              )}
            </a>
          ))}
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-red-500/20 px-6 py-5 space-y-3 overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium font-body py-1.5 transition-colors ${l.label === "Contact"
                  ? "rounded-xl bg-gradient-to-r from-[#C8102E] to-[#9B0E24] px-5 py-3 text-white font-semibold text-center shadow-lg shadow-[#C8102E]/30 mt-3"
                  : "text-gray-300 hover:text-red-400"
                  }`}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;