import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Send, Phone, Calendar, MapPin, ChevronDown, Package } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    city: "",
    plan: "",
    occasionDate: "",
    message: ""
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const occasions = [
    "Wedding", "Birthday", "Corporate Event", "Engagement",
    "Anniversary", "Baby Shower", "Party", "Other"
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Other"
  ];

  const plans = [
    "Basic - Half-Day Plan",
    "Premium - Full-Day Plan",
    "Custom / Not Sure"
  ];

  // 🔴 REPLACE THIS WITH YOUR ACTUAL FORMSPREE ENDPOINT
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqewavrl";

  useEffect(() => {
    const handlePlanSelected = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const planName = customEvent.detail;
        const matchingPlan = plans.find(p => p.startsWith(planName));
        if (matchingPlan) {
          setSelectedPlan(matchingPlan);
          setForm(prev => ({ ...prev, plan: matchingPlan }));
        }
      }
    };
    window.addEventListener("planSelected", handlePlanSelected);
    return () => window.removeEventListener("planSelected", handlePlanSelected);
  }, []);

  const countryCodes = [
    { code: "+91", flag: "🇮🇳", country: "India" },
    { code: "+1", flag: "🇺🇸", country: "USA" },
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+61", flag: "🇦🇺", country: "Australia" },
    { code: "+971", flag: "🇦🇪", country: "UAE" },
    { code: "+65", flag: "🇸🇬", country: "Singapore" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!form.phone.trim()) {
      toast.error("Please enter your mobile number");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    if (!form.event.trim()) {
      toast.error("Please select an occasion");
      return;
    }
    if (!form.city.trim()) {
      toast.error("Please select a city");
      return;
    }
    if (!form.occasionDate) {
      toast.error("Please select the date of occasion");
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
          fullName: form.name,
          mobileNumber: `${selectedCountryCode} ${form.phone}`,
          email: form.email,
          occasion: form.event,
          city: form.city,
          selectedPlan: form.plan || "Not specified",
          occasionDate: form.occasionDate,
          message: form.message || "No additional message",
          _subject: "📸 New Booking Request - onspotshoots",
          _replyto: form.email
        })
      });

      if (response.ok) {
        toast.success("Booking request sent! We'll get back to you within 24 hours.");
        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          event: "",
          city: "",
          plan: "",
          occasionDate: "",
          message: ""
        });
        setSelectedOccasion("");
        setSelectedCity("");
        setSelectedPlan("");
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
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #000000 0%, #0D0507 100%)" }}>
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 uppercase tracking-wider font-body mb-4">
            Book Now
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Book Your <span className="bg-gradient-to-r from-[#C8102E] to-[#E31B23] bg-clip-text text-transparent">Shoot</span>
          </h2>
          <p className="mt-4 text-gray-400 font-body text-base">
            Fill in the form and we'll confirm your booking within hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          {/* Form card with glass morphism */}
          <div className="relative group">
            {/* Glow effect on focus/hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C8102E]/0 to-[#E31B23]/0 rounded-3xl group-focus-within:from-[#C8102E]/30 group-focus-within:to-[#E31B23]/30 transition-all duration-500 blur opacity-0 group-focus-within:opacity-100"></div>

            {/* Card content */}
            <div className="relative z-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 transition-all duration-300">

              {/* Full Name */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>

              {/* Contact Number with Country Code Dropdown */}
              <div className="space-y-4 mt-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex gap-2">
                  {/* Country Code Dropdown */}
                  <div className="relative z-30">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="h-12 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-colors flex items-center gap-2 min-w-[100px] justify-between hover:bg-white/10"
                    >
                      <span className="text-sm text-white">
                        {countryCodes.find(c => c.code === selectedCountryCode)?.flag} {selectedCountryCode}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${showCountryDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown menu */}
                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden z-50">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountryCode(country.code);
                              setShowCountryDropdown(false);
                            }}
                            className="w-full px-3 py-2 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors flex items-center gap-2"
                          >
                            <span>{country.flag}</span>
                            <span>{country.code}</span>
                            <span className="text-xs text-gray-500">({country.country})</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phone Input with Icon */}
                  <div className="flex-1 relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-white placeholder:text-gray-500 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-4 mt-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>

              {/* Occasion Dropdown */}
              <div className="space-y-4 mt-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  Occasion <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectedOccasion(selectedOccasion ? "" : "open")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-left flex items-center justify-between gap-2 hover:bg-white/10"
                  >
                    <span className={`text-sm ${selectedOccasion ? 'text-white' : 'text-gray-500'}`}>
                      {selectedOccasion || "Select occasion"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${selectedOccasion ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Occasion dropdown menu */}
                  {selectedOccasion === "open" && (
                    <div className="absolute top-full left-0 mt-1 w-full rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden z-50">
                      {occasions.map((occasion) => (
                        <button
                          key={occasion}
                          type="button"
                          onClick={() => {
                            setSelectedOccasion(occasion);
                            setForm({ ...form, event: occasion });
                          }}
                          className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {occasion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* City Dropdown */}
              <div className="space-y-4 mt-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                  <button
                    type="button"
                    onClick={() => setSelectedCity(selectedCity ? "" : "open")}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-left flex items-center justify-between gap-2 hover:bg-white/10"
                  >
                    <span className={`text-sm ${selectedCity ? 'text-white' : 'text-gray-500'}`}>
                      {selectedCity || "Select city"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${selectedCity ? 'rotate-180' : ''}`} />
                  </button>

                  {/* City dropdown menu */}
                  {selectedCity === "open" && (
                    <div className="absolute top-full left-0 mt-1 w-full rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden z-50">
                      {cities.map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setSelectedCity(city);
                            setForm({ ...form, city: city });
                          }}
                          className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Plan Dropdown */}
              <div className="space-y-4 mt-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  Selected Plan <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                  <button
                    type="button"
                    onClick={() => setSelectedPlan(selectedPlan ? (plans.includes(selectedPlan) ? "open" : "") : "open")}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-left flex items-center justify-between gap-2 hover:bg-white/10"
                  >
                    <span className={`text-sm ${selectedPlan && selectedPlan !== "open" ? 'text-white' : 'text-gray-500'}`}>
                      {selectedPlan && selectedPlan !== "open" ? selectedPlan : "Select a plan"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${selectedPlan === "open" ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Plan dropdown menu */}
                  {selectedPlan === "open" && (
                    <div className="absolute top-full left-0 mt-1 w-full rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden z-50">
                      {plans.map((plan) => (
                        <button
                          key={plan}
                          type="button"
                          onClick={() => {
                            setSelectedPlan(plan);
                            setForm({ ...form, plan: plan });
                          }}
                          className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {plan}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Date of Occasion */}
              <div className="space-y-4 mt-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  Date of Occasion <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                  <input
                    type="date"
                    name="occasionDate"
                    min={new Date().toISOString().split('T')[0]}
                    value={form.occasionDate}
                    onChange={(e) => setForm({ ...form, occasionDate: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 transition-all duration-300 outline-none text-white text-sm [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              {/* Message (Optional) */}
              <div className="space-y-4 mt-4">
                <label className="block text-sm font-medium text-gray-300 font-body">
                  Additional Message <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C8102E] to-[#9B0E24] hover:from-[#9B0E24] hover:to-[#7A0B1C] py-3.5 text-sm font-semibold text-white font-body shadow-lg shadow-[#C8102E]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Enquiry
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;