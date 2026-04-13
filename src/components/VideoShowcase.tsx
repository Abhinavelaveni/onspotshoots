import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, Film, Clapperboard, Video } from "lucide-react";

const videos = [
  {
    title: "Wedding Highlights",
    category: "Wedding",
    icon: <Film className="h-5 w-5" />,
    color: "from-primary/80 to-primary",
    description: "Cinematic wedding reels that capture every emotion.",
  },
  {
    title: "Corporate Events",
    category: "Corporate",
    icon: <Clapperboard className="h-5 w-5" />,
    color: "from-foreground to-foreground/80",
    description: "Professional event coverage for brands and businesses.",
  },
  {
    title: "Birthday Parties",
    category: "Celebration",
    icon: <Video className="h-5 w-5" />,
    color: "from-primary to-primary/60",
    description: "Fun, energetic birthday reels with trending transitions.",
  },
  {
    title: "DJ & Live Shows",
    category: "Music",
    icon: <Play className="h-5 w-5" />,
    color: "from-foreground/90 to-foreground/60",
    description: "High-energy reels that match the vibe of the stage.",
  },
  {
    title: "Fashion & Lifestyle",
    category: "Fashion",
    icon: <Film className="h-5 w-5" />,
    color: "from-primary/70 to-primary",
    description: "Stylish reels for influencers and fashion brands.",
  },
  {
    title: "Product Launches",
    category: "Brand",
    icon: <Clapperboard className="h-5 w-5" />,
    color: "from-foreground to-foreground/70",
    description: "Stunning reveal reels that make your product shine.",
  },
];

const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-card shadow-card-hover transition-all duration-500 aspect-[9/14]">
        {/* Gradient background simulating video thumbnail */}
        <div className={`absolute inset-0 bg-gradient-to-br ${video.color}`} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }} />

        {/* Animated shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

        {/* Play button center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="h-14 w-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/30 transition-all duration-300"
          >
            <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground ml-0.5" />
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/10 px-3 py-1 text-xs font-semibold text-primary-foreground font-body">
            {video.icon}
            {video.category}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent">
          <h4 className="text-base font-bold text-primary-foreground font-heading">{video.title}</h4>
          <p className="text-xs text-primary-foreground/60 font-body mt-1 line-clamp-2">{video.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const VideoShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={sectionRef} id="showcase" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-[120px]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading">
            Reels That <span className="text-gradient-primary">Stand Out</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            From weddings to product launches — scroll through our reel categories.
          </p>
        </motion.div>

        {/* Scrolling rows */}
        <div className="space-y-8">
          {/* Row 1 — shifts left on scroll */}
          <motion.div style={{ x: xLeft }} className="flex gap-6 justify-center">
            {videos.slice(0, 3).map((v, i) => (
              <div key={v.title} className="w-56 md:w-64 flex-shrink-0">
                <VideoCard video={v} index={i} />
              </div>
            ))}
          </motion.div>

          {/* Row 2 — shifts right on scroll */}
          <motion.div style={{ x: xRight }} className="flex gap-6 justify-center">
            {videos.slice(3, 6).map((v, i) => (
              <div key={v.title} className="w-56 md:w-64 flex-shrink-0">
                <VideoCard video={v} index={i + 3} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
