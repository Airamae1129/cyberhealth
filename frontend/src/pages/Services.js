import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, GraduationCap, Monitor,
  ScanSearch, BadgeCheck, Target, ScrollText, Network, Radar, UserCheck,
  RefreshCw, Lock, BookOpen,
  Headphones, Code, Bot, ArrowRight, Sparkles
} from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';

const Services = () => {
  usePageTitle('All Services');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: <Sparkles size={18} />, count: 14 },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: <Shield size={18} />, count: 7 },
    { id: 'training', label: 'Training & Certification', icon: <GraduationCap size={18} />, count: 4 },
    { id: 'it', label: 'I.T. Solutions', icon: <Monitor size={18} />, count: 3 }
  ];

  const servicesData = [
    // Cybersecurity Services
    {
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity',
      icon: <ScanSearch size={32} />,
      title: 'Cybersecurity Assessment',
      description: 'Our cybersecurity assessment identifies vulnerabilities and threats. We provide insights and recommendations to strengthen your defenses and protect your data.',
      color: 'from-[#c89344] to-[#e8a84d]',
      bgColor: 'bg-[#c89344]/10',
      textColor: 'text-[#c89344]'
    },
    {
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity',
      icon: <BadgeCheck size={32} />,
      title: 'ISO/IEC 27001 Compliance',
      description: 'ISO/IEC 27001 certification reflects our commitment to information security and protects sensitive data, building trust with clients.',
      color: 'from-[#c89344] to-[#e8a84d]',
      bgColor: 'bg-[#c89344]/10',
      textColor: 'text-[#c89344]'
    },
    {
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity',
      icon: <Target size={32} />,
      title: 'Strategy & Implementation',
      description: 'A strong cybersecurity strategy protects against threats. We ensure swift incident response and empower you to safeguard assets. Trust us for confident cybersecurity navigation.',
      color: 'from-[#c89344] to-[#e8a84d]',
      bgColor: 'bg-[#c89344]/10',
      textColor: 'text-[#c89344]'
    },
    {
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity',
      icon: <ScrollText size={32} />,
      title: 'Policy Development & Review',
      description: 'We prioritize policies. Our review process keeps guidelines updated for transparency and effective compliance.',
      color: 'from-[#c89344] to-[#e8a84d]',
      bgColor: 'bg-[#c89344]/10',
      textColor: 'text-[#c89344]'
    },
    {
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity',
      icon: <Network size={32} />,
      title: 'Third-Party Risk Management',
      description: "Third-Party Security Risk Management protects your business by assessing external partners' security. Effective strategies enhance client trust and strengthen your overall risk posture.",
      color: 'from-[#c89344] to-[#e8a84d]',
      bgColor: 'bg-[#c89344]/10',
      textColor: 'text-[#c89344]'
    },
    {
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity',
      icon: <Radar size={32} />,
      title: 'Threat Detection & Response',
      description: 'Managed Cybersecurity Threat Detection and Response protects against threats. Our team monitors systems, vulnerabilities, and responds quickly to secure your digital assets.',
      color: 'from-[#c89344] to-[#e8a84d]',
      bgColor: 'bg-[#c89344]/10',
      textColor: 'text-[#c89344]'
    },
    {
      category: 'cybersecurity',
      categoryLabel: 'Cybersecurity',
      icon: <UserCheck size={32} />,
      title: 'Virtual CISO',
      description: 'Virtual CISO service offers expert cybersecurity leadership tailored to your needs. We identify risks and strategies to safeguard your digital assets effectively.',
      color: 'from-[#c89344] to-[#e8a84d]',
      bgColor: 'bg-[#c89344]/10',
      textColor: 'text-[#c89344]'
    },

    // Training & Certification
    {
      category: 'training',
      categoryLabel: 'Training & Certification',
      icon: <GraduationCap size={32} />,
      title: 'Cybersecurity Training',
      description: 'Boost your skills with our Cybersecurity Training & Certification program. Protect vital information and earn recognized certifications to advance your career.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      category: 'training',
      categoryLabel: 'Training & Certification',
      icon: <RefreshCw size={32} />,
      title: 'Business Continuity',
      description: 'Business continuity and operational resilience are crucial for success. Effective strategies help organizations navigate disruptions and sustain growth.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      category: 'training',
      categoryLabel: 'Training & Certification',
      icon: <Lock size={32} />,
      title: 'Privacy, Data Protection & AI',
      description: 'We prioritize your privacy and data. We secure your information and enhance your experience while ensuring transparency and control over your personal data.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      category: 'training',
      categoryLabel: 'Training & Certification',
      icon: <BookOpen size={32} />,
      title: 'Other Training Courses',
      description: "Discover our diverse range of other training courses designed to enhance your skills and knowledge. Whether you're looking to advance your career or explore new areas, we offer engaging and informative sessions.",
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },

    // IT Solutions
    {
      category: 'it',
      categoryLabel: 'I.T. Solutions',
      icon: <Headphones size={32} />,
      title: 'Virtual IT Support',
      description: 'Welcome to our Virtual IT Support service! Our expert team is here to resolve your software and hardware issues quickly and effectively. Reliable assistance at your fingertips.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      category: 'it',
      categoryLabel: 'I.T. Solutions',
      icon: <Code size={32} />,
      title: 'System Development & Integration',
      description: 'System Development and Integration is vital for businesses looking to enhance efficiency. Our team designs tailored solutions that connect systems seamlessly, delivering robust and user-friendly integrations.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      category: 'it',
      categoryLabel: 'I.T. Solutions',
      icon: <Bot size={32} />,
      title: 'AI-Driven Application & Code Review',
      description: 'Enhance your software with our AI-Driven Application services for improved performance. Our Code Review ensures efficiency and security against vulnerabilities.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#c89344 1px, transparent 1px), linear-gradient(90deg, #c89344 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${20 + i * 25}%`,
              top: `${10 + i * 20}%`,
              background: 'radial-gradient(circle, rgba(200,147,68,0.4), transparent)'
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[#c89344]/20 backdrop-blur-md border border-[#c89344]/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles size={16} className="text-[#e8a84d]" />
            <span className="text-sm text-[#e8a84d] font-medium">14 Professional Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-[#e8a84d] via-[#f5c274] to-[#c89344] bg-clip-text text-transparent">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            At Cyberhealth, we deliver trusted cybersecurity, training & certification, and IT
            solutions. Our services protect your digital assets, upskill your teams, and
            strengthen your technology infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center space-x-2 px-4 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#c89344] to-[#e8a84d] text-white shadow-lg shadow-[#c89344]/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat.id ? 'bg-white/20' : 'bg-white'
                }`}>
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-gray-100 transition-all overflow-hidden"
                >
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                  
                  {/* Decorative corner */}
                  <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full ${service.bgColor} opacity-50 group-hover:scale-150 transition-transform duration-500`} />

                  {/* Category badge */}
                  <div className={`relative inline-block ${service.bgColor} ${service.textColor} text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                    {service.categoryLabel}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-5">
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#c89344] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <Link
                    to="/contact"
                    className={`inline-flex items-center space-x-2 ${service.textColor} font-semibold text-sm hover:opacity-70 transition-opacity`}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No results state */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No services found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#c89344] via-[#d89a3d] to-[#e8a84d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, white 2px, transparent 2px), radial-gradient(circle at 80% 70%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Not sure which service you need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90 mb-8"
          >
            Get in touch with our experts for a personalized recommendation
          </motion.p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#c89344] font-bold py-4 px-8 rounded-lg hover:shadow-2xl transition-all inline-flex items-center space-x-2"
            >
              <span>Talk to an Expert</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;