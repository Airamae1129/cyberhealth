import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Award, Server, CheckCircle, ArrowRight, Lock, Zap, Users, TrendingUp } from 'lucide-react';
import Background from './images/Bg1-Home.avif';
import BackgoundFrame from './images/Bg2-Home.jpg';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('');
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Cybersecurity Services';
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    { text: 'Highly experienced Consultants', icon: <Users size={18} /> },
    { text: 'Assessment through to remediation', icon: <TrendingUp size={18} /> },
    { text: 'Risk-based, cost-effective solutions', icon: <Zap size={18} /> },
    { text: 'IT solutions and cybersecurity expertise', icon: <Lock size={18} /> }
  ];

  const services = [
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets from evolving threats',
      color: 'from-[#c89344] to-[#e8a84d]'
    },
    {
      icon: <Award size={40} />,
      title: 'Training and Certification',
      description: 'Professional training programs to upskill your team and earn industry certifications',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Server size={40} />,
      title: 'IT Solutions',
      description: 'Modern IT infrastructure, virtual support, and system integration services',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '3', label: 'Core Service Areas' },
    { number: '14+', label: 'Services Offered' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Client Focus' }
  ];

  const partners = [
    { name: 'Huntress', logo: 'https://static.wixstatic.com/media/1dfb19_22a94a3c718a4e0fab3e78e1be5aba52~mv2.png' },
    { name: 'AWS', logo: 'https://static.wixstatic.com/media/1dfb19_87fb584dbca1402c81a7b2a4693eec3f~mv2.png' },
    { name: 'Bitdefender', logo: 'https://static.wixstatic.com/media/1dfb19_e85c3fd2b3304f1cb6c90612da71c0a1~mv2.png' },
    { name: 'Tenable', logo: 'https://static.wixstatic.com/media/1dfb19_d45c08a2860e424cabb4c7987d238e0b~mv2.png' },
    { name: 'PECB', logo: 'https://static.wixstatic.com/media/1dfb19_086ff86080aa4158b38b4e223409efe6~mv2.png' },
    { name: 'Cyber Ireland', logo: 'https://static.wixstatic.com/media/1dfb19_5cb2e1082989449aa0167ac0ee60545d~mv2.png' },
    { name: 'Proofpoint', logo: 'https://static.wixstatic.com/media/1dfb19_9b8fe911433e456f8f141cf602ee83ac~mv2.png' },
    { name: 'Microsoft', logo: 'https://static.wixstatic.com/media/1dfb19_a661bd54edb34e0cbf1a3d88fd8b1933~mv2.png' }
  ];

  return (
    <div className="bg-white text-gray-700">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src={Background}
            alt="Cyberhealth Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for readability */}
          {/* Modern Dark Grey Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C20]/75 via-[#2A2D33]/55 to-[#3A3D44]/45" />
          {/* Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/70 via-transparent to-transparent" />
        </motion.div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#c89344 1px, transparent 1px), linear-gradient(90deg, #c89344 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 z-10">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(138, 101, 44, 0.9), transparent)' 
                  : 'radial-gradient(circle, rgba(10, 92, 225, 0.2), transparent)'
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32"
        >
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-[#c89344]/20 backdrop-blur-md border border-[#c89344]/30 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-[#c89344] rounded-full animate-pulse" />
              <span className="text-sm text-[#e8a84d] font-medium">Trusted Cybersecurity Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4"
            >
              <span className="block text-white mb-2">Cyberhealth IT &</span>
              <span className="inline-flex items-center justify-center flex-wrap bg-gradient-to-r from-[#e8a84d] via-[#f5c274] to-[#c89344] bg-clip-text text-transparent">
                <span>{displayText}</span>
                <span className="inline-block w-1 h-10 md:h-12 bg-[#c89344] ml-2 animate-pulse" style={{WebkitTextFillColor: '#c89344'}} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto mb-10"
            >
              Your trusted partner in safeguarding businesses against cyber threats with innovative, tailored solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#c89344] to-[#e8a84d] text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-[#c89344]/50 transition-all inline-flex items-center space-x-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition-all"
                >
                  Get Free Assessment
                </motion.button>
              </Link>
            </motion.div>

            {/* Why Choose Us - Features */}
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              transition={{ delayChildren: 2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-[#c89344]/50 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#c89344]/20 rounded-lg flex items-center justify-center text-[#e8a84d]">
                    {feature.icon}
                  </div>
                  <span className="text-white text-left font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-[#202020]">
        <div className="absolute inset-0 opacity-5">
           <div style={{
            backgroundImage: `radial-gradient(circle at 10% 20%,  #c89344 2px, radial-gradient(circle at 90% 80%, white 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
            width: '100%',
            height: '100%'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e8a84d] to-[#c89344] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#c89344]/10 border border-[#c89344]/20 rounded-full px-4 py-1 mb-4">
                <span className="text-[#c89344] text-sm font-semibold">OUR APPROACH</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Holistic & Practical <span className="bg-gradient-to-r from-[#c89344] to-[#e8a84d] bg-clip-text text-transparent">Cybersecurity</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We take a holistic and practical approach to cybersecurity, offering a range of
                services designed to fit your unique needs and budget. From risk assessments and
                policy development to ongoing monitoring and employee training, we provide
                comprehensive support that adapts as your business grows.
              </p>
              <div className="space-y-3">
                {['Risk Assessment', 'Policy Development', 'Ongoing Monitoring', 'Employee Training'].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-[#c89344] flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={BackgoundFrame}                  
                  alt="Cybersecurity team at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c89344] to-[#e8a84d] rounded-xl flex items-center justify-center">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Helping Businesses</div>
                    <div className="text-sm text-gray-600">Stay Secure</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#c89344]/10 border border-[#c89344]/20 rounded-full px-4 py-1 mb-4">
              <span className="text-[#c89344] text-sm font-semibold">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our <span className="bg-gradient-to-r from-[#c89344] to-[#e8a84d] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Welcome to Cyberhealth, where we provide innovative products and services to enhance your cybersecurity journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                
                <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to="/services" className="inline-flex items-center space-x-2 text-[#c89344] font-semibold hover:text-[#e8a84d] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#c89344] to-[#e8a84d] text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-[#c89344]/50 transition-all inline-flex items-center space-x-2"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-[#c89344]/10 border border-[#c89344]/20 rounded-full px-4 py-1 mb-4">
              <span className="text-[#c89344] text-sm font-semibold">OUR PARTNERS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Working With the Best <span className="bg-gradient-to-r from-[#c89344] to-[#e8a84d] bg-clip-text text-transparent">Clients and Partners</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted by industry leaders worldwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#c89344]/50 hover:shadow-lg transition-all group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#c89344] via-[#d89a3d] to-[#e8a84d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, white 2px, transparent 2px), radial-gradient(circle at 90% 80%, white 2px, transparent 2px)`,
            backgroundSize: '80px 80px',
            width: '100%',
            height: '100%'
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Secure Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Let's discuss how we can protect your digital assets and empower your team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#c89344] font-bold py-4 px-8 rounded-lg hover:shadow-2xl transition-all inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
