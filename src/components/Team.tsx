import { motion } from "framer-motion";

const team = [
  { name: "Rahul Kapoor", role: "Founder & Creative Director", desc: "Visionary behind onspotshoots. Making professional content accessible to everyone.", initials: "RK" },
  { name: "Sneha Verma", role: "Lead Editor", desc: "Expert in cinematic transitions and trending edits. Makes every reel scroll-stopping.", initials: "SV" },
  { name: "Arjun Patel", role: "Reel Maker", desc: "Certified specialist with an eye for the perfect moment at every event.", initials: "AP" },
  { name: "Divya Sharma", role: "Content Strategist", desc: "Keeps our content fresh and on-trend. Ensures every reel has viral potential.", initials: "DS" },
  { name: "Karan Mehta", role: "Reel Maker", desc: "Energetic and creative. Specializes in high-energy event coverage.", initials: "KM" },
];

const Team = () => (
  <section id="team" className="section-gray py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
          Our Team
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
          Meet the <span className="text-gradient-primary">Crew</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-base max-w-md mx-auto">
          The talented people behind every scroll-stopping reel.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-6xl mx-auto">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
            className="group rounded-2xl border border-border bg-background p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 text-center"
          >
            <div className="mx-auto mb-4 h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-lg font-bold text-primary-foreground font-heading shadow-primary group-hover:scale-110 transition-transform duration-300">
              {m.initials}
            </div>
            <h3 className="text-sm font-bold font-heading mb-0.5">{m.name}</h3>
            <p className="text-xs font-semibold text-primary font-body mb-2">{m.role}</p>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
