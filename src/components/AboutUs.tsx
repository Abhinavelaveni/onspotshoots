import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Zap, Film, Heart, Sparkles, Rocket, Camera, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Shot on iPhone",
    desc: "Latest iPhone Pro with cinematic 4K quality and ProRes-grade footage.",
    color: "from-blue-500 to-cyan-400",
    stat: "4K",
    statLabel: "Cinematic",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "10-Min Delivery",
    desc: "Fastest turnaround time in the industry. Shot to delivered in minutes.",
    color: "from-yellow-500 to-orange-500",
    stat: "10min",
    statLabel: "Guaranteed",
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: "Trending Edits",
    desc: "Stay ahead with viral transitions, effects, and audio.",
    color: "from-purple-500 to-pink-500",
    stat: "Viral",
    statLabel: "Ready",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Made with Love",
    desc: "Every frame crafted with passion and attention to detail.",
    color: "from-red-500 to-rose-500",
    stat: "100%",
    statLabel: "Satisfaction",
  },
];

const floatingStats = [
  { value: "500+", label: "Reels Delivered", icon: <Camera className="h-3 w-3" /> },
  { value: "4.9", label: "Rating", icon: <Sparkles className="h-3 w-3" /> },
  { value: "10min", label: "Avg Delivery", icon: <Rocket className="h-3 w-3" /> },
  { value: "200+", label: "Happy Clients", icon: <TrendingUp className="h-3 w-3" /> },
];

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 30% 40%, #1A080C 0%, #000000 100%)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,16,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,16,46,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating stats bar - centered */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {floatingStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content - Main text - Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-center lg:text-left"
          >
            {/* Badge with animation - centered on mobile */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/30 px-4 py-1.5 mb-6 overflow-hidden mx-auto lg:mx-0"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-red-500"
              />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Innovating Content Creation Since 2024</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              We Create
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Instant Reels
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"
                />
              </span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-gray-300 font-body leading-relaxed">
              <strong className="text-white bg-gradient-to-r from-red-500/20 to-transparent px-2 py-1 rounded">onspotshoots</strong> is revolutionizing content creation with lightning-fast, professional reel production. We bring studio-quality videos to your doorstep — delivered in minutes, not days.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
                <p className="text-gray-400 font-body text-left">
                  <span className="text-white font-semibold">No complex booking</span> — simple, instant confirmation
                </p>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
                <p className="text-gray-400 font-body text-left">
                  <span className="text-white font-semibold">Certified reel makers</span> trained in trending formats
                </p>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
                <p className="text-gray-400 font-body text-left">
                  <span className="text-white font-semibold">Upfront pricing</span> — no hidden charges, ever
                </p>
              </div>
            </div>

            {/* CTA buttons - centered on mobile */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-6 md:px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold overflow-hidden"
              >
                <span className="relative z-10">Explore Plans</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 md:px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-red-500/50 transition-all duration-300"
              >
                Book a Shoot
              </motion.a>
            </div>
          </motion.div>

          {/* Right content - 3D flip cards - centered on mobile */}
          <motion.div
            style={{ opacity, scale }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group [perspective:1000px]"
                >
                  {/* 3D Card */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-5 md:p-6 transition-all duration-300 group-hover:border-red-500/40 overflow-hidden">
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Icon with pulse effect - centered on mobile */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`relative h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0`}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Stat badge - repositioned for mobile */}
                    <div className="absolute top-4 right-4">
                      <div className="text-right">
                        <p className="text-lg md:text-xl font-bold text-white/40">{item.stat}</p>
                        <p className="text-[8px] md:text-[10px] text-white/30">{item.statLabel}</p>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-white mb-2 text-center md:text-left">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed text-center md:text-left">{item.desc}</p>

                    {/* Learn more link - centered on mobile */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-4 flex items-center gap-1 text-xs text-red-400 justify-center md:justify-start"
                    >
                      <span>Learn more</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Add gradient animation keyframes */}
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

export default AboutUs;