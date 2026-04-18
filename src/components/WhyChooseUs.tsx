import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Timer, Award, TrendingUp, Shield, Sparkles,
  Camera, Video, Music, Users, Clock, Star,
  Zap, Crown, Gem, Rocket, BadgeCheck, Leaf
} from "lucide-react";

const reasons = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    desc: "Shot, edited, and delivered in under 10 minutes. No other service comes close.",
    gradient: "from-yellow-500 to-orange-500",
    stat: "10min",
    statLabel: "Avg Delivery",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Trained & Certified",
    desc: "Our reel makers are certified and trained to capture the best moments with precision.",
    gradient: "from-blue-500 to-cyan-500",
    stat: "6+",
    statLabel: "Filters Cleared",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Trending Content",
    desc: "We stay on top of the latest Instagram trends to keep your reels relevant and engaging.",
    gradient: "from-purple-500 to-pink-500",
    stat: "Viral",
    statLabel: "Ready Content",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe & Secure",
    desc: "Your data and privacy are protected with enterprise-grade security.",
    gradient: "from-green-500 to-emerald-500",
    stat: "100%",
    statLabel: "Secure",
  },
  {
    icon: <Crown className="h-6 w-6" />,
    title: "Premium Quality",
    desc: "Shot on iPhone Pro with professional editing, color grading, and trending audio.",
    gradient: "from-rose-500 to-red-500",
    stat: "4K",
    statLabel: "Cinematic",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Women Safety",
    desc: "Female clients can specifically request female reel makers for comfort.",
    gradient: "from-pink-500 to-rose-500",
    stat: "24/7",
    statLabel: "Support",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "radial-gradient(circle at 20% 80%, #0D0507 0%, #000000 100%)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-red-500/10 to-orange-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Diagonal lines pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(200,16,46,0.03) 0px, rgba(200,16,46,0.03) 2px, transparent 2px, transparent 8px)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/30 px-4 py-1.5 mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-red-500"
            />
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Why OnspotShoots?</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Not Just Instant
            <br />
            <span className="relative inline-block mt-3">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Delivery, But...
              </span>
              <motion.span
                initial={{ width: 0, left: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg text-gray-400 font-body max-w-2xl mx-auto"
          >
            Here's what makes onspotshoots the #1 choice for instant, professional reel creation
          </motion.p>
        </motion.div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="relative group"
            >
              {/* 3D border glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${reason.gradient} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-500`} />

              {/* Card content */}
              <div className="relative z-10 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-transparent transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Card header with icon and stat */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`relative h-14 w-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    {reason.icon}
                  </motion.div>

                  {/* Stat badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="text-right"
                  >
                    <p className="text-2xl font-bold text-white/60">{reason.stat}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">{reason.statLabel}</p>
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{reason.desc}</p>

                {/* Progress bar animation on hover */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                  className={`mt-4 h-0.5 bg-gradient-to-r ${reason.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold overflow-hidden shadow-lg shadow-red-500/25"
          >
            <span className="relative z-10">Experience the Difference</span>
            <Rocket className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;