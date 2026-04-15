import { motion } from "framer-motion";
import { Play, Zap, MessageCircle, Shield, Star, Clock, Heart, Smartphone, Users, Briefcase } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background - Cinematic Animated Mesh */}
    <div className="absolute inset-0 bg-[#050505] overflow-hidden">
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#C8102E]/15 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#9B0E24]/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[0%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#C8102E]/10 blur-[120px]"
      />

      {/* Cinematic Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Dark Overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-[#C8102E]/10" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md px-4 py-1.5 mb-7"
          >
            <Zap className="h-3.5 w-3.5 text-red-400" />
            <span className="text-sm font-medium text-white/80 font-body">
              Instant Reels in <span className="text-red-400 font-bold">10 Minutes</span>
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-white leading-[1.05] tracking-tight">
            Shoot • Edit • Deliver
            <br />
            <span className="bg-gradient-to-r from-[#C8102E] to-[#E31B23] bg-clip-text text-transparent">in 10 Minutes</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 font-body max-w-lg leading-relaxed">
            Professional reels shot on the latest iPhone — edited with trending transitions and delivered on the spot. No wait, no hassle.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#plans"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#9B0E24] hover:from-[#9B0E24] hover:to-[#7A0B1C] shadow-lg shadow-[#C8102E]/30 px-8 py-3.5 text-sm font-semibold text-white font-body transition-all duration-300"
            >
              <Play className="h-4 w-4" />
              View Plans
            </motion.a>

            <motion.a
              href="#become-creator"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C8102E]/20 to-[#9B0E24]/20 backdrop-blur-sm border border-[#C8102E]/40 hover:border-[#C8102E]/70 hover:bg-gradient-to-r hover:from-[#C8102E]/30 hover:to-[#9B0E24]/30 px-8 py-3.5 text-sm font-semibold text-white font-body transition-all duration-300"
            >
              <Briefcase className="h-4 w-4" />
              Become a Creator
            </motion.a>

            <motion.a
              href="https://wa.me/8008254573?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20b859] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.4)] px-8 py-3.5 text-sm font-semibold text-white font-body transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </motion.a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-5 flex-wrap"
          >
            <div className="flex items-center gap-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 px-3 py-1.5">
              <Shield className="h-3.5 w-3.5 text-green-400" />
              <span className="text-xs text-gray-300 font-body font-medium">Verified Pros</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 px-3 py-1.5">
              <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-xs text-gray-300 font-body font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-red-400" />
              <span className="text-xs text-gray-300 font-body font-medium">10-Min Delivery</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side: 3D Phone */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative" style={{ perspective: "1200px" }}>
            <div className="absolute -inset-8 rounded-[3rem] bg-red-500/20 blur-3xl animate-pulse" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ transformStyle: "preserve-3d", transform: "rotateY(-5deg) rotateX(2deg)" }}
            >
              <div className="relative w-64 h-[520px] rounded-[2.5rem] border-[3px] border-white/15 bg-black/90 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10" />
                <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-gradient-to-b from-[#C8102E]/25 via-black/95 to-black">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#C8102E] to-[#9B0E24] flex items-center justify-center shadow-lg shadow-[#C8102E]/35 mb-5">
                      <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                    </div>
                    <p className="text-white text-sm font-heading font-bold">Your Reel</p>
                    <p className="text-white/40 text-xs font-body mt-1">Ready in 10 min</p>
                    <div className="mt-6 w-full space-y-3">
                      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          animate={{ width: ["0%", "100%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-[#C8102E] to-[#E31B23] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-3 bottom-20 space-y-4">
                    {[Heart, MessageCircle, Smartphone].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + idx * 0.2 }}
                        className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10"
                      >
                        <Icon className="h-3.5 w-3.5 text-white/60" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/20" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
  </section>
);

export default Hero;