import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => (
  <motion.a
    href="https://wa.me/918008254573?text=Hi%2C%20I%20want%20to%20book%20a%20shoot!"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-primary-foreground shadow-[0_8px_30px_-4px_rgba(37,211,102,0.5)] transition-all"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </motion.a>
);

export default WhatsAppFAB;
