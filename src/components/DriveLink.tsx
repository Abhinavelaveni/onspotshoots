import { motion } from "framer-motion";
import { FolderOpen, ArrowRight } from "lucide-react";

const DriveLink = () => (
  <section className="section-white py-16">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-2xl mx-auto rounded-2xl border border-border bg-background p-8 shadow-card"
      >
        <div className="flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-primary">
            <FolderOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-base font-bold font-heading">Google Drive Folder</h3>
            <p className="text-sm text-muted-foreground font-body">Access all your delivered reels in one place.</p>
          </div>
        </div>
        <motion.a
          href="https://drive.google.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-2.5 text-sm font-semibold font-body hover:border-primary/40 transition-all"
        >
          Open Drive <ArrowRight className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default DriveLink;
