import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";

const DriveLink = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto rounded-2xl bg-card border border-border p-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FolderOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading">Google Drive Folder</h3>
              <p className="text-sm text-muted-foreground font-body">
                Access all your delivered reels in one place.
              </p>
            </div>
          </div>
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground font-body transition-all hover:bg-primary/90 hover:scale-105"
          >
            Open Drive
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DriveLink;
