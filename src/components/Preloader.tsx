import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, #1A080C 0%, #000000 100%)"
          }}
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-red-500/10 blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                x: [0, -30, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C8102E]/10 blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-red-500/5 to-purple-500/5 blur-[150px]"
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo with glow effect - NO ROTATION */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
            >
              {/* Outer glow ring - NO ROTATION */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-xl"
              />

              {/* Logo container */}
              <div className="relative bg-gradient-to-br from-black/40 to-transparent rounded-full p-5 backdrop-blur-sm">
                <motion.img
                  src={logo}
                  alt="onspotshoots"
                  className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-2xl"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Loading bar with shine effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
              className="w-48 overflow-hidden rounded-full"
            >
              <div className="h-0.5 rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ delay: 0.7, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </div>
            </motion.div>

            {/* Brand name with gradient */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-xl font-bold font-heading tracking-tight text-white">
                onspot<span className="bg-gradient-to-r from-[#C8102E] to-[#E31B23] bg-clip-text text-transparent">shoots</span>
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-xs text-gray-400 font-body mt-1 tracking-wide"
              >
                Instant Reel Makers
              </motion.p>
            </motion.div>

            {/* Loading dots - smooth bounce */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-red-600"
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;