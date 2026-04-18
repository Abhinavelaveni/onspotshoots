import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="w-full bg-black border-b border-[#C8102E]/20 py-2.5 px-4 sm:px-6 relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3 w-3 text-red-400 flex-shrink-0" />
          <p className="text-[10px] sm:text-sm font-body text-gray-300">
            <span className="font-semibold text-white">Limited offer:</span>{" "}
            <span className="text-red-400 font-bold">30% off</span>{" "}
            <span className="hidden xs:inline text-gray-400">on your first booking!</span>
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg sm:rounded-xl bg-gradient-to-r from-[#C8102E] to-[#9B0E24] px-3 sm:px-8 py-1.5 sm:py-2.5 text-[10px] sm:text-sm font-semibold text-white transition-all duration-300"
          >
            Book Now
          </motion.a>
          <motion.a
            href="https://wa.me/918008254573?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg sm:rounded-xl bg-[#25D366] px-3 sm:px-6 py-1.5 sm:py-2.5 text-[10px] sm:text-sm font-semibold text-white transition-all duration-300"
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;