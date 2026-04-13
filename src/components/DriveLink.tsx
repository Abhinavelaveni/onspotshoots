import { motion } from "framer-motion";
import { FolderOpen, ArrowRight } from "lucide-react";

const DriveLink = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle" />
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto rounded-3xl bg-foreground/[0.03] backdrop-blur-2xl border border-border/30 p-10 md:p-12 shadow-2xl shadow-glow relative overflow-hidden"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/10 blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-primary/5 blur-[50px]" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-foreground/[0.04] to-transparent pointer-events-none" />

          <div className="relative flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-primary">
              <FolderOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Google Drive Folder</h3>
              <p className="text-sm text-muted-foreground font-body">
                Access all your delivered reels in one place.
              </p>
            </div>
          </div>
          <motion.a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-2 rounded-2xl border border-border/40 bg-primary-foreground/50 backdrop-blur-xl px-7 py-3.5 text-sm font-semibold font-body transition-all hover:border-primary/50 hover:bg-primary-foreground/70"
          >
            Open Drive
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DriveLink;
