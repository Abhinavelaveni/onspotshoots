import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Camera, Zap, Wallet, Users, Award, Send, Phone, Mail, Link, CheckCircle, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Cinematic Training",
    desc: "Get certified training in iPhone cinematography and trending reel formats.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Workflow",
    desc: "Learn our proprietary 10-minute shoot-to-delivery workflow.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Fast Payouts",
    desc: "Earn per event with transparent and instant payment cycles.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community",
    desc: "Join an elite network of high-end reel makers and creators.",
    color: "from-purple-500 to-pink-500"
  }
];

const BecomeCreator = () => {
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    workLink: "",
    hasiPhone13Plus: false,
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔴 REPLACE THIS WITH YOUR ACTUAL FORMSPREE ENDPOINT
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqewavrl";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!form.mobileNumber.trim()) {
      toast.error("Please enter your mobile number");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    if (!form.workLink.trim()) {
      toast.error("Please share your Google Drive link with work samples");
      return;
    }
    if (!form.agreeToTerms) {
      toast.error("Please agree to the Terms and Conditions");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          fullName: form.fullName,
          mobileNumber: form.mobileNumber,
          email: form.email,
          workLink: form.workLink,
          hasiPhone13Plus: form.hasiPhone13Plus ? "Yes - iPhone 13 or above" : "No",
          agreeToTerms: form.agreeToTerms ? "Yes" : "No",
          _subject: "🎬 New Creator Application - onspotshoots",
          _replyto: form.email
        })
      });

      if (response.ok) {
        toast.success("Application submitted! Our team will get back to you within 48 hours.");
        setForm({
          fullName: "",
          mobileNumber: "",
          email: "",
          workLink: "",
          hasiPhone13Plus: false,
          agreeToTerms: false
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-white placeholder:text-gray-500 text-sm";

  return (
    <section id="become-creator" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "radial-gradient(circle at 80% 20%, #1A080C 0%, #000000 100%)" }}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/30 px-4 py-1.5 mb-6"
          >
            <Award className="h-4 w-4 text-red-400" />
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Join the Revolution</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Turn Your Passion Into <span className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent">Professional Income</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
            We're looking for talented individuals with an eye for detail and a passion for storytelling. Join India's fastest-growing instant reel service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/0 to-violet-500/0 rounded-3xl group-hover:from-red-500/20 group-hover:to-violet-500/20 transition-all duration-500 blur opacity-0 group-hover:opacity-100" />
              <div className="relative z-10 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300 h-full">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-body">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A080C] to-black border border-white/10 p-6 md:p-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Creator Application</h3>
              <p className="text-gray-400 font-body">Join our network of professional reel makers</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="+91 70320 08271"
                    value={form.mobileNumber}
                    onChange={(e) => setForm({ ...form, mobileNumber: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-white placeholder:text-gray-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-white placeholder:text-gray-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Previous Work Link */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Previous Work (Google Drive Link) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Link className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url"
                    name="workLink"
                    placeholder="https://drive.google.com/..."
                    value={form.workLink}
                    onChange={(e) => setForm({ ...form, workLink: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-white placeholder:text-gray-500 text-sm"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <Folder className="h-3 w-3" />
                  Share a Google Drive folder with your best video work samples
                </p>
              </div>

              {/* iPhone 13+ Checkbox */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <input
                  type="checkbox"
                  id="hasiPhone"
                  name="hasiPhone13Plus"
                  checked={form.hasiPhone13Plus}
                  onChange={(e) => setForm({ ...form, hasiPhone13Plus: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500 focus:ring-offset-0"
                />
                <label htmlFor="hasiPhone" className="flex-1 cursor-pointer">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-red-400" />
                    I have iPhone 13 or above model
                  </span>
                  <span className="text-xs text-gray-500 block mt-1">
                    Required for high-quality video capture and instant editing
                  </span>
                </label>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeToTerms"
                  checked={form.agreeToTerms}
                  onChange={(e) => setForm({ ...form, agreeToTerms: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500 focus:ring-offset-0"
                  required
                />
                <label htmlFor="agreeTerms" className="flex-1 cursor-pointer">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-400" />
                    I agree to the Terms and Conditions and Privacy Policy of Onspotshoots
                  </span>
                  <span className="text-xs text-gray-500 block mt-1">
                    By checking this box, you acknowledge that you have read and agree to our creator terms, commission structure, and professional guidelines.
                  </span>
                </label>
              </div>

              {/* Formspree hidden fields */}
              <input type="hidden" name="_subject" value="🎬 New Creator Application - onspotshoots" />

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl shadow-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit Application
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Folder icon component
const Folder = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
  </svg>
);

export default BecomeCreator;