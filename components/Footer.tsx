import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, X, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        setShowContactModal(false);
      }, 3000);
    }, 1200);
  };

  const sitemapItems = [
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="contact" className="bg-[#050e1b] text-[#e1e1e1] relative overflow-hidden border-t border-white/10">
      <div className="section-padding container relative z-10">
        
        {/* Call to Action */}
        <div className="mb-32 flex flex-col items-center text-center">
            <h2 className="text-[5vw] leading-none mb-8 font-serif-italic">Have an idea?</h2>
            <button 
              onClick={() => setShowContactModal(true)} 
              className="text-[8vw] md:text-[10vw] font-bold leading-none hover:text-white transition-colors duration-300 stroke-text hover:stroke-0 border-b-2 border-transparent hover:border-white cursor-pointer"
            >
                LET'S TALK
            </button>
            <p className="mt-6 text-sm font-mono text-gray-400">
              Tap above to send a direct message or open contact details
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-[Syne] font-bold block mb-4">Archana Gurung</span>
            <p className="max-w-xs text-gray-500 text-base leading-relaxed mb-6">
              Full Stack Developer crafting digital experiences with modern technologies. Specializing in React, Node.js, Kotlin, and Cyber Security.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white" />
                Pokhara, Nepal
              </span>
              <a href="mailto:archanagurung2k21@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-white" />
                archanagurung2k21@gmail.com
              </a>
              <a href="tel:+977-9816669731" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-white" />
                +977 9816669731
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 font-mono">Sitemap</h4>
            <ul className="space-y-4 text-gray-400">
              {sitemapItems.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="hover:text-white transition-colors text-lg cursor-pointer flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 font-mono">Connect</h4>
             <ul className="space-y-4 text-gray-400">
              <li>
                <a href="https://www.linkedin.com/in/archana-gurung-927282326/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg flex items-center gap-1">
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/archanagrg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg flex items-center gap-1">
                  GitHub
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="mailto:archanagurung2k21@gmail.com" className="hover:text-white transition-colors text-lg flex items-center gap-1">
                  Email Me
                </a>
              </li>
              <li>
                <a href="tel:+977-9816669731" className="hover:text-white transition-colors text-lg">
                  Call / WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest font-mono">
            <span>© 2026 Archana Gurung • Pokhara, Nepal</span>
            <div className="flex gap-8 mt-4 md:mt-0">
                <button onClick={() => setShowContactModal(true)} className="hover:text-white cursor-pointer">Get In Touch</button>
                <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
        </div>
      </div>
      
      {/* Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
         <h1 className="text-[30vw] leading-[0.7] font-black text-center translate-y-[20%]">ARCHANA</h1>
      </div>

      {/* Interactive Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#071629]/90 backdrop-blur-xl overflow-y-auto">
          <div className="relative w-full max-w-xl bg-[#0b1f3b] border border-white/20 rounded-2xl p-6 md:p-10 shadow-2xl text-[#e1e1e1] my-8">
            
            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#f95721] font-semibold">Direct Inquiry</span>
                <h3 className="text-3xl font-bold text-white mt-1 font-heading">Send a Message</h3>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-[#071629] transition-colors cursor-pointer"
                aria-label="Close contact modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-[#f95721] mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold text-white font-heading">Message Sent Successfully!</h4>
                <p className="text-sm font-mono text-gray-300">
                  Thank you for reaching out. Archana will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-[#071629] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f95721] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-[#071629] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f95721] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Hiring"
                    className="w-full bg-[#071629] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f95721] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-[#071629] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f95721] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="px-6 py-3 border border-white/20 rounded-full text-xs font-mono uppercase text-gray-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-[#f95721] hover:bg-[#ff6938] text-white font-bold rounded-full text-xs font-mono uppercase transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-md shadow-orange-950/40"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </footer>
  );
}