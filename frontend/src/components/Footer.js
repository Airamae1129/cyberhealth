import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Frontend only - just show alert
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-[#050505] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-[#e8a84d] font-bold text-lg mb-4">ABOUT CYBERHEALTH</h3>
            <p className="text-sm leading-relaxed">
              Welcome to Cyberhealth, your trusted partner in safeguarding your business
              against cyber threats. We deliver innovative, tailored solutions to help
              businesses navigate the digital landscape with confidence. Explore our
              services and create a safer, more resilient online environment for your
              organization.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-[#e8a84d] font-bold text-lg mb-4">CONTACT</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@cyberhealth.ie"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Mail size={20} className="text-[#e8a84d] group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@cyberhealth.ie</span>
              </a>
              <a
                href="tel:+353046924679"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Phone size={20} className="text-[#e8a84d] group-hover:scale-110 transition-transform" />
                <span className="text-sm">+353 (046) 924 6769</span>
              </a>
              <a
                href="https://www.linkedin.com/company/cyberhealth-ie/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Linkedin size={20} className="text-[#e8a84d] group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-[#e8a84d] font-bold text-lg mb-4">SUBSCRIBE</h3>
            <p className="text-sm mb-4">Get the latest news and updates from Cyberhealth</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here*"
                required
                className="w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8a84d] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#e8a84d] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#d89a3d] transition-colors"
              >
                Subscribe Now
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© 2026 Cyberhealth Services Ltd.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;