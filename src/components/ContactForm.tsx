import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

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

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Book Your <span className="text-primary">Shoot</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Fill in the form below and we'll confirm your booking within hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5"
        >
          {[
            { key: "name", label: "Name *", type: "text", placeholder: "Your full name" },
            { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            { key: "phone", label: "Phone *", type: "tel", placeholder: "+91 98765 43210" },
            { key: "event", label: "Event / Occasion", type: "text", placeholder: "Wedding, Birthday, etc." },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-sm font-medium font-body mb-1.5">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                maxLength={200}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium font-body mb-1.5">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your requirements..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground font-body transition-all hover:bg-primary/90 hover:scale-[1.01]"
          >
            Submit Booking Request
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
