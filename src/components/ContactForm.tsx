import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in required fields.");
      return;
    }
    toast.success("Booking request sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", event: "", message: "" });
  };

  const inputClass = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/40 placeholder:text-muted-foreground/50";

  return (
    <section id="contact" className="section-gray py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider font-body mb-4">
            Book Now
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
            Book Your <span className="text-gradient-primary">Shoot</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-base">
            Fill in the form and we'll confirm your booking within hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4 bg-background rounded-2xl border border-border p-8 shadow-card"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium font-body mb-2">Name *</label>
              <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={200} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium font-body mb-2">Phone *</label>
              <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={200} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium font-body mb-2">Email</label>
            <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={200} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium font-body mb-2">Event / Occasion</label>
            <input type="text" placeholder="Wedding, Birthday, Corporate..." value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} maxLength={200} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium font-body mb-2">Message</label>
            <textarea rows={3} placeholder="Tell us about your requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} className={`${inputClass} resize-none`} />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 rounded-xl gradient-primary py-3.5 text-sm font-semibold text-primary-foreground font-body shadow-primary"
          >
            <Send className="h-4 w-4" />
            Submit Booking Request
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
