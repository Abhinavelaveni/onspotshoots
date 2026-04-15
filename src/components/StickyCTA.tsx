import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="w-full bg-black border-b border-[#C8102E]/20 py-2.5 px-4 sm:px-6 relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-red-400" />
          <p className="text-sm font-body text-gray-300">
            <span className="font-semibold text-white">Limited offer:</span>{" "}
            <span className="text-red-400 font-bold">30% off</span>{" "}
            <span className="text-gray-400">on your first booking!</span>
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 sm:flex-none text-center rounded-xl bg-gradient-to-r from-[#C8102E] to-[#9B0E24] hover:from-[#9B0E24] hover:to-[#7A0B1C] shadow-lg shadow-[#C8102E]/30 px-8 py-2.5 text-sm font-semibold text-white font-body transition-all duration-300"
          >
            Book Now
          </motion.a>
          <motion.a
            href="https://wa.me/8008254573?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-[#25D366] hover:bg-[#20b859] px-6 py-2.5 text-sm font-semibold text-white font-body transition-all duration-300 shadow-lg shadow-[#25D366]/20"
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;