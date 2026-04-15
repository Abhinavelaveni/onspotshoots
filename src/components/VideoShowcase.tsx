import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, Film, Clapperboard, Video } from "lucide-react";

const videos = [
  { title: "Wedding Highlights", category: "Wedding", icon: <Film className="h-4 w-4" />, color: "from-primary to-primary/60", description: "Cinematic wedding reels that capture every emotion." },
  { title: "Corporate Events", category: "Corporate", icon: <Clapperboard className="h-4 w-4" />, color: "from-foreground to-foreground/70", description: "Professional event coverage for brands and businesses." },
  { title: "Birthday Parties", category: "Celebration", icon: <Video className="h-4 w-4" />, color: "from-secondary to-secondary/60", description: "Fun, energetic birthday reels with trending transitions." },
  { title: "DJ & Live Shows", category: "Music", icon: <Play className="h-4 w-4" />, color: "from-accent to-accent/60", description: "High-energy reels that match the vibe of the stage." },
  { title: "Fashion & Lifestyle", category: "Fashion", icon: <Film className="h-4 w-4" />, color: "from-primary/80 to-primary/40", description: "Stylish reels for influencers and fashion brands." },
  { title: "Product Launches", category: "Brand", icon: <Clapperboard className="h-4 w-4" />, color: "from-foreground/90 to-foreground/50", description: "Stunning reveal reels for products." },
];

const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="group relative"
  >
    <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 aspect-[9/14]">
      <div className={`absolute inset-0 bg-gradient-to-br ${video.color}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-primary-foreground/10 backdrop-blur-xl flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/20 transition-all">
          <Play className="h-5 w-5 text-primary-foreground fill-primary-foreground ml-0.5" />
        </div>
      </div>
      <div className="absolute top-3 left-3">
        <span className="inline-flex items-center gap-1 rounded-lg bg-primary-foreground/10 backdrop-blur-xl px-2.5 py-1 text-xs font-semibold text-primary-foreground font-body">
          {video.icon} {video.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
        <h4 className="text-sm font-bold text-primary-foreground font-heading">{video.title}</h4>
        <p className="text-xs text-primary-foreground/60 font-body mt-1">{video.description}</p>
      </div>
    </div>
  </motion.div>
);

const VideoShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={sectionRef} id="showcase" className="section-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
            Reels That <span className="text-gradient-primary">Stand Out</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          <motion.div style={{ x: xLeft }} className="flex gap-5 justify-center">
            {videos.slice(0, 3).map((v, i) => (
              <div key={v.title} className="w-48 md:w-56 flex-shrink-0">
                <VideoCard video={v} index={i} />
              </div>
            ))}
          </motion.div>
          <motion.div style={{ x: xRight }} className="flex gap-5 justify-center">
            {videos.slice(3, 6).map((v, i) => (
              <div key={v.title} className="w-48 md:w-56 flex-shrink-0">
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
