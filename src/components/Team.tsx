import { motion } from "framer-motion";

const team = [
  {
    name: "Rahul Kapoor",
    role: "Founder & Creative Director",
    desc: "Visionary behind onspotshoots. Passionate about making professional content accessible to everyone.",
    initials: "RK",
    gradient: "from-primary to-primary/70",
  },
  {
    name: "Sneha Verma",
    role: "Lead Editor",
    desc: "Expert in cinematic transitions and trending edits. Makes every reel scroll-stopping.",
    initials: "SV",
    gradient: "from-foreground to-foreground/70",
  },
  {
    name: "Arjun Patel",
    role: "Reel Maker",
    desc: "Certified reel specialist with an eye for capturing the perfect moment at every event.",
    initials: "AP",
    gradient: "from-primary/80 to-primary/50",
  },
  {
    name: "Divya Sharma",
    role: "Content Strategist",
    desc: "Keeps our content fresh and on-trend. Ensures every reel has viral potential.",
    initials: "DS",
    gradient: "from-foreground/80 to-foreground/50",
  },
  {
    name: "Karan Mehta",
    role: "Reel Maker",
    desc: "Energetic and creative. Specializes in high-energy event coverage and dynamic shots.",
    initials: "KM",
    gradient: "from-primary/70 to-primary/40",
  },
];

const Team = () => (
  <section id="team" className="py-32 md:py-40 relative overflow-hidden">
    <div className="absolute inset-0 gradient-subtle" />
    <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/[0.03] blur-[120px]" />

    <div className="relative container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-5">
          Our Team
        </span>
        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight">
          Meet the <span className="text-gradient-primary">Crew</span>
        </h2>
        <p className="mt-6 text-muted-foreground font-body text-lg max-w-md mx-auto">
          The talented people behind every scroll-stopping reel.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl border border-border/40 bg-primary-foreground/50 backdrop-blur-2xl p-7 shadow-card shadow-card-hover transition-all duration-500 text-center"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-3xl gradient-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative">
              {/* Avatar */}
              <div className="mx-auto mb-5">
                <div className={`h-20 w-20 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl font-bold text-primary-foreground font-heading shadow-lg group-hover:shadow-primary group-hover:scale-110 transition-all duration-300`}>
                  {member.initials}
                </div>
              </div>

              <h3 className="text-base font-bold font-heading mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-primary font-body mb-3">{member.role}</p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{member.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
