import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const firstLoad = useRef(true);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when changing pages (except first load)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ALL SERVICES', path: '/services' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'NEWS & UPDATES', path: '/news' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              src="https://customer-assets-jt897jd0.emergentagent.net/job_cyberhealth-redesign/artifacts/onzodaxr_IMG_6805.png"
              alt="Cyberhealth Logo"
              className="h-14 w-14 object-contain"
            />

            <div className="hidden sm:block">
              <span className="block text-xl font-extrabold leading-tight text-gray-900">
                Cyberhealth
              </span>

              <span className="text-[#c89344] text-xs tracking-[0.2em] font-semibold">
                SERVICES LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-semibold tracking-wide transition-colors group ${
                  location.pathname === item.path
                    ? 'text-[#c89344]'
                    : 'text-gray-700 hover:text-[#c89344]'
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#c89344] transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="space-y-2 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    location.pathname === item.path
                      ? 'bg-[#c89344] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;