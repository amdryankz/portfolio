import { useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle2, Copy, Check, ArrowRight } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { PERSONAL_INFO } from "../data";

export const Contact = () => {
  const rawEmail = PERSONAL_INFO.social.email.replace("mailto:", "");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(rawEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: some browsers block clipboard in insecure contexts
      setCopied(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Contact Form Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `${PERSONAL_INFO.social.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API call before opening mail client fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Open the prefilled email client
      window.location.href = getMailtoUrl();
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <SectionWrapper
      id="contact"
      className="bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden !py-16 md:!py-20"
    >
      {/* Header */}
      <SectionHeader
        label="Contact"
        title="Get In Touch"
        description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
        align="center"
        className="mb-12"
      />

      {/* Grid Layout */}
      <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }} className="max-w-6xl mx-auto px-1 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Connect Stack */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/30 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700/80 hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-300 group flex items-start gap-4 shadow-xs">
              <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <Mail size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
                  Email Me
                </span>
                <a
                  href={`mailto:${rawEmail}`}
                  className="text-slate-800 dark:text-slate-100 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate text-sm sm:text-base mb-1"
                >
                  {rawEmail}
                </a>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/30 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 group flex items-start gap-4 shadow-xs">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
                  Let's Chat
                </span>
                <a
                  href={PERSONAL_INFO.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-800 dark:text-slate-100 font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block text-sm sm:text-base mb-1"
                >
                  +62 822 6068 3030
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  Fast response for project discussions or quick syncs.
                </p>
              </div>
            </div>

            {/* Social Connect Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/30 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700/80 hover:border-violet-500/40 dark:hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between flex-grow shadow-xs min-h-[160px]">
              <div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2">
                  Social Networks
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Check out my projects on GitHub or connect with my professional network on LinkedIn.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 hover:border-slate-950 dark:hover:border-white transition-all duration-300 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Contact Form */}
          <div className="lg:col-span-7 relative flex items-stretch">
            <div className="w-full p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/30 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 flex flex-col justify-between min-h-[440px]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-between h-full flex-grow gap-5"
                  >
                    <div className="space-y-4">
                      {/* Name input */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Jane Doe"
                          className="w-full px-4.5 py-3 rounded-xl border-2 bg-slate-50/50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500/85 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/5 transition-all duration-200 text-sm"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. jane@example.com"
                          className="w-full px-4.5 py-3 rounded-xl border-2 bg-slate-50/50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500/85 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/5 transition-all duration-200 text-sm"
                        />
                      </div>

                      {/* Message textarea */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What would you like to discuss?"
                          className="w-full px-4.5 py-3 rounded-xl border-2 bg-slate-50/50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500/85 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/5 transition-all duration-200 text-sm resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer group text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Preparing message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-6 h-full flex-grow"
                  >
                    <div className="p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 dark:text-emerald-400 mb-5 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Prepared!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
                      I've formatted your message. Your system's default email client should open shortly. If it didn't launch, click the button below.
                    </p>

                    <div className="w-full space-y-3">
                      <a
                        href={getMailtoUrl()}
                        className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 duration-200 text-sm"
                      >
                        <span>Open Email Client</span>
                        <ArrowRight size={16} />
                      </a>
                      
                      <button
                        onClick={handleReset}
                        className="w-full py-3 px-6 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold transition-all duration-200 cursor-pointer text-xs"
                      >
                        Reset Form
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>

        </div>
      </motion.div>
    </SectionWrapper>
  );
};
