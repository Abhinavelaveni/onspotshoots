import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative border-t border-[#C8102E]/20 overflow-hidden" style={{ background: "linear-gradient(180deg, #000000 0%, #0A0506 100%)" }}>
    {/* Animated background blobs */}
    <div className="absolute inset-0">
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-4">

        {/* Left Column - Copyright & Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm text-gray-400 space-y-2 text-center md:text-left"
        >
          <p>© {new Date().getFullYear()} Onspotshoots</p>
          <p>
            A product of{" "}
            <a
              href="https://www.konchamkode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              AbhinavElaveni
            </a>
          </p>
        </motion.div>

        {/* Right Column - Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col items-center md:items-end space-y-4"
        >
          <h3 className="text-sm font-medium text-white mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            {/* Facebook */}
            {/*  <a
              href="https://facebook.com/onspotshoots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a> */}

            {/* Instagram */}
            <a
              href="https://www.instagram.com/onspotshoots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            {/*  <a
              href="https://www.linkedin.com/company/onspotshoots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a> */}

            {/* X (Twitter) */}
            {/* <a
              href="https://x.com/onspotshoots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                <path d="M4 20l6.768-6.768" />
                <path d="M20 4l-6.768 6.768" />
              </svg>
            </a> */}
          </div>
        </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer;
