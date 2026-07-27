import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, MessageSquare } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';

const Contact = () => {
  usePageTitle('Contact | Cyberhealth');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName}! Your message has been received. We'll get back to you at ${formData.email}.`);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111315] via-[#171A1F] to-[#1E2328] text-white">

      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-52 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#E8A84D]/10 blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-slate-400/5 blur-[180px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8A84D]/30 bg-[#E8A84D]/10 px-5 py-2 mb-8 backdrop-blur-md"
          >
            <MessageSquare size={18} className="text-[#E8A84D]" />
            <span className="text-sm font-medium text-[#E8A84D]">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8"
          >
            <span className="bg-gradient-to-r from-[#E8A84D] via-[#F4C36D] to-[#D89A3D] bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto text-lg md:text-xl leading-9 text-gray-300"
          >
            Have a question, project idea, or want to explore how Cyberhealth can
            help secure your business? Reach out – we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ===== Contact Content ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ----- Contact Form (left) ----- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#e8a84d] hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Dotted texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle, #e8a84d 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8a84d] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8a84d] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8a84d] transition-colors"
                    placeholder="+353 (046) 924 6769"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8a84d] transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#e8a84d] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#d89a3d] transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ----- Contact Information & Map (right) ----- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Details Card */}
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#e8a84d] hover:-translate-y-1 transition-all duration-300 group">
              {/* Dotted texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, #e8a84d 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e8a84d]/20 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-[#e8a84d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-300">Dublin, Ireland</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e8a84d]/20 rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-[#e8a84d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+353046924679" className="text-gray-300 hover:text-[#e8a84d] transition-colors">
                        +353 (046) 924 6769
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e8a84d]/20 rounded-lg flex items-center justify-center">
                      <Mail size={24} className="text-[#e8a84d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@cyberhealth.ie" className="text-gray-300 hover:text-[#e8a84d] transition-colors">
                        info@cyberhealth.ie
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e8a84d]/20 rounded-lg flex items-center justify-center">
                      <Linkedin size={24} className="text-[#e8a84d]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/company/cyberhealth-ie/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#e8a84d] transition-colors"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card - now with dark theme and gold accents */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-[#e8a84d] hover:-translate-y-1 transition-all duration-300 group">
              {/* Dotted texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, #e8a84d 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10">
                <div className="border-b border-white/10 px-6 py-5">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Our Location
                  </h3>
                  <p className="text-gray-400">
                    Citywest Road, County Dublin, Ireland
                  </p>
                </div>
                <div className="aspect-video overflow-hidden">
                  <iframe
                    title="Cyberhealth Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.2995123014266!2d-6.4216245999999995!3d53.284169600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867748aa20bfe61%3A0x16b097d69315ffa1!2sCitywest%20Rd%2C%20Co.%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sph!4v1784840857520!5m2!1sen!2sph"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;