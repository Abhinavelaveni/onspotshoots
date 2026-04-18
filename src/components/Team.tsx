import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import creatorImg1 from "@/assets/creators/img1.png";
import creatorImg2 from "@/assets/creators/img2.png";
import creatorImg3 from "@/assets/creators/img3.png";
import creatorImg4 from "@/assets/creators/img4.png";
import creatorImg5 from "@/assets/creators/img5.png";

const team = [
  { name: "Sri Vardhan", role: "Founder & CEO", image: creatorImg1, initials: "VD" },
  { name: "Malli Karjun", role: "Creator", image: creatorImg2, initials: "RK" },
  { name: "Akhil", role: "Creator", image: creatorImg3, initials: "SV" },
  { name: "Varshith", role: "Creator", image: creatorImg4, initials: "AP" },
  { name: "Sai", role: "Creator", image: creatorImg5, initials: "DS" },
];

const Team = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #000000 0%, #0D0507 100%)" }}>
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 uppercase tracking-wider font-body mb-4">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Meet the <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Crew</span>
          </h2>
          <p className="mt-4 text-gray-400 font-body text-base max-w-md mx-auto">
            The talented people behind every scroll-stopping reel.
          </p>
        </motion.div>

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-3 mb-6">
          <motion.button
            onClick={() => scroll('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-10 w-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/30 hover:text-red-300 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-10 w-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/30 hover:text-red-300 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide pt-12 pb-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="relative group"
                style={{ width: '300px', flexShrink: 0 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-[2rem] blur opacity-0 group-hover:opacity-40 transition-all duration-500"
                  initial={false}
                  animate={false}
                />

                {/* Card content */}
                <div className="relative z-10 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl p-6 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full flex flex-col">
                  {/* Image/Initials Container */}
                  <motion.div
                    className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        style={{ objectPosition: 'center center' }}
                      />
                    ) : (
                      <motion.div
                        className="text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent select-none font-heading"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      >
                        {member.initials}
                      </motion.div>
                    )}

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 via-red-600/0 to-red-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
                  </motion.div>

                  <div className="text-center mt-5">
                    <h3 className="text-xl font-bold text-white mb-1 font-heading group-hover:text-red-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-red-400 font-semibold text-sm font-body">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Team;