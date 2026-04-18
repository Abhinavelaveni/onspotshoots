import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

// Custom hook for staggered children animations
const useStaggeredAnimation = (delayBetween = 0.1) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delayBetween,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8,
      },
    },
  };

  return { containerVariants, itemVariants, hasAnimated, setHasAnimated };
};

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.97, 1, 1, 0.97]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const { containerVariants, itemVariants } = useStaggeredAnimation(0.08);

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 30% 40%, #1A080C 0%, #000000 100%)" }}
    >
      {/* Animated background elements with smoother transitions */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: [0, 0.5, 0.3], scale: 1 } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: [0, 0.3, 0.2], scale: 1 } : {}}
            transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: [0, 0.2, 0.15], scale: 1 } : {}}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Grid pattern overlay with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[linear-gradient(rgba(200,16,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,16,46,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating stats bar - with spring animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.1
          }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {floatingStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{
                  delay: idx * 0.12,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  mass: 0.7
                }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  className="h-8 w-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.icon}
                </motion.div>
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: idx * 0.12 + 0.2 }}
                    className="text-lg font-bold text-white"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content - Enhanced text animations */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 0.2
            }}
            className="text-center lg:text-left"
          >
            {/* Badge with continuous pulse */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: "left" }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/30 px-4 py-1.5 mb-6 overflow-hidden mx-auto lg:mx-0"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-red-500"
              />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Innovating Content Creation Since 2024</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              We Create
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative inline-block mt-2"
              >
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Instant Reels
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"
                />
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-base md:text-lg text-gray-300 font-body leading-relaxed"
            >
              <strong className="text-white bg-gradient-to-r from-red-500/20 to-transparent px-2 py-1 rounded">onspotshoots</strong> is revolutionizing content creation with lightning-fast, professional reel production. We bring studio-quality videos to your doorstep — delivered in minutes, not days.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-8 space-y-4"
            >
              {[
                "No complex booking — simple, instant confirmation",
                "Certified reel makers trained in trending formats",
                "Upfront pricing — no hidden charges, ever"
              ].map((text, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start gap-3 justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  </motion.div>
                  <p className="text-gray-400 font-body text-left">
                    <span className="text-white font-semibold">{text.split(" — ")[0]}</span> — {text.split(" — ")[1]}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons with smooth hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group relative inline-flex items-center gap-2 px-6 md:px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Explore Plans</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-6 md:px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:border-red-500/50 transition-all duration-300 cursor-pointer"
              >
                Book a Shoot
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Enhanced 3D cards with staggered entrance */}
          <motion.div
            style={{ opacity, scale }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, rotateY: 45, y: 60, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, rotateY: 0, y: 0, scale: 1 } : {}}
                  transition={{
                    delay: i * 0.12 + 0.3,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 18,
                    mass: 1
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    rotateY: 5,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  className="relative group [perspective:2000px] cursor-pointer"
                >
                  {/* 3D Card with glass morphism */}
                  <motion.div
                    whileHover={{ boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)" }}
                    className="relative rounded-2xl bg-gradient-to-br from-white/8 to-white/0 backdrop-blur-sm border border-white/10 p-5 md:p-6 transition-all duration-300 group-hover:border-red-500/40 overflow-hidden"
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.15 }}
                      transition={{ duration: 0.4 }}
                      className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                    />

                    {/* Icon with 3D rotation */}
                    <motion.div
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                      className={`relative h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-4 mx-auto md:mx-0`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>

                    {/* Stat badge with slide-in */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.12 + 0.6 }}
                      className="absolute top-4 right-4"
                    >
                      <div className="text-right">
                        <p className="text-lg md:text-xl font-bold text-white/40">{item.stat}</p>
                        <p className="text-[8px] md:text-[10px] text-white/30">{item.statLabel}</p>
                      </div>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: i * 0.12 + 0.45 }}
                      className="text-base md:text-lg font-bold text-white mb-2 text-center md:text-left"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: i * 0.12 + 0.5 }}
                      className="text-xs md:text-sm text-gray-400 leading-relaxed text-center md:text-left"
                    >
                      {item.desc}
                    </motion.p>

                    {/* Learn more link with slide animation */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      whileHover={{ opacity: 1, x: 5 }}
                      transition={{ delay: i * 0.12 + 0.55 }}
                      className="mt-4 flex items-center gap-1 text-xs text-red-400 justify-center md:justify-start cursor-pointer"
                    >
                      <span>Learn more</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Decorative floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-2xl pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none"
            />
          </motion.div>
        </div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;