import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only - show alert
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
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Get in <span className="text-[#e8a84d]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
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
                className="w-full bg-[#e8a84d] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#d89a3d] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
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

            {/* Map Placeholder */}
            <div className="overflow-hidden rounded-2xl border border-[#D9DDE3] bg-gradient-to-br from-[#F7F8FA] via-[#F2F4F6] to-[#ECEFF2] shadow-xl shadow-gray-200/50">

                  {/* Header */}
                  <div className="border-b border-[#D9DDE3] bg-white/70 px-6 py-5 backdrop-blur-sm">
                    <h3 className="mb-2 text-2xl font-bold text-[#1F2937]">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      Citywest Road, County Dublin, Ireland
                    </p>
                  </div>

                  {/* Google Map */}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;