import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';

import Honeylyn from './images/Honeylyn-pc.png';
import Rida from './images/Rida-pc.png';
import Rhonnel from './images/Rhonnel-pf.png';

const About = () => {
  usePageTitle('About | Cyberhealth');

  const teamMembers = [
    {
      name: 'Rida',
      title: 'Founder & Head of Cyber',
      image: Rida,
      bio: 'Rida is an industry leader providing broad range of cybersecurity services and thought leadership across IT and Cybersecurity Governance Risk & Compliance, Information Security Controls Implementation, 3rd Party Risk Management, Risk Transformation and Data Protection. A trusted adviser to national and international Cybersecurity Regulators, Rida has delivered end-to-end cybersecurity preparedness and governance services to a wide range of industry and regulatory bodies. Over the years, she has gained broad-ranging experience in cybersecurity risk management, strategy development, and IT project management and assurance reporting with a regulatory focused approach.',
    },
    {
      name: 'Honeylyn',
      title: 'Head of I.T. Assurance',
      image: Honeylyn,
      bio: 'Honeylyn is an experienced IT assurance leader with a strong background in IT audit, risk management, and regulatory compliance. She has led engagements across SOX compliance, IT General Controls (ITGC) testing, Service Organization Controls (SOC) reporting, cybersecurity reviews, and cloud service provider assessments, working with global professional services firms and multinational organizations across finance, technology, retail, and other sectors. As Head of IT Assurance at Cyberhealth, Honeylyn oversees assurance activities that help clients strengthen their control environments, mitigate risks, and achieve sustainable compliance. She brings a balance of technical expertise and strategic insight to deliver trusted, value-driven assurance services.',
    },
    {
      name: 'Rhonnel',
      title: 'Head of Technology',
      image: Rhonnel,
      bio: 'Accomplished IT Industry leader with over Fifteen years of demonstrated career success developing and executing operational strategies to promote organizational growth and optimal utilization of emerging technologies. Extensive experience in leading operations for Technology, Application development, within diverse range of industries. Decisive leader of organizations of varying size and scope. Result oriented professional, recognized for taking on Major initiatives, adapting to rapidly changing environments and resolving mission critical issues to ensure bottom line success.',
    },
  ];

  return (
    <>
      {/* ===== HERO SECTION (dark) ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#111315] via-[#171A1F] to-[#1E2328] pt-32 pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-44 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#E8A84D]/10 blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-slate-400/5 blur-[160px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8A84D]/30 bg-[#E8A84D]/10 px-5 py-2 mb-8"
          >
            <Users size={18} className="text-[#E8A84D]" />
            <span className="text-sm font-medium text-[#E8A84D]">
              Meet Our Leadership Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-8"
          >
            Meet{' '}
            <span className="bg-gradient-to-r from-[#E8A84D] via-[#F3C16F] to-[#D69A39] bg-clip-text text-transparent">
              Our Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-4xl text-xl leading-9 text-gray-300"
          >
            Our team combines expertise and passion to deliver trusted cybersecurity, training, and IT solutions, helping your business stay secure, skilled, and future-ready.
          </motion.p>
        </div>
      </section>

      {/* ===== TEAM & COMPANY INFO ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Team Members */}
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 },
                }}
                // ----- Outer wrapper for shimmering gradient border -----
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center 
                rounded-2xl p-[2px] 
                 border border-[#e8a84d]/40 
                hover:border-[#e8a84d] 
                animate-shimmer 
                hover:bg-[length:300%_300%] 
                transition-all duration-700 
                cursor-pointer group`}
              >
                {/* ----- Inner card (content) ----- */}
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center 
                  w-full h-full rounded-2xl p-8 
                  bg-gradient-to-br from-[#e8a84d]/10 via-white to-white 
                  relative overflow-hidden`}
                >
                  {/* Texture overlay (dotted) */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle, #e8a84d 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Image */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                      transition: { duration: 0.3 },
                    }}
                    className="flex-shrink-0 relative z-10"
                  >
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#e8a84d]/40 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#c89344]">
                      {member.name}
                    </h2>
                    <p className="text-[#e8a84d] text-lg font-semibold mb-4">
                      {member.title}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* =====  COMPANY INFO ===== */}
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative mt-16 overflow-hidden rounded-2xl p-8 text-center 
            border border-[#e8a84d]/40 
            hover:border-[#e8a84d] 
            hover:-translate-y-1 
            transition-all duration-400 ease-out 
            cursor-pointer group"
        >
          {/* Content */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
            bg-gradient-to-br from-gray-200/70 via-gray-100/60 to-white/80 rounded-2xl"
          />
  
            {/* Content (relative to stay above overlay) */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                About Cyberhealth
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Welcome to Cyberhealth, your trusted partner in safeguarding your business
                against cyber threats. We deliver innovative, tailored solutions to help
                businesses navigate the digital landscape with confidence. Explore our
                services and create a safer, more resilient online environment for your
                organization.
              </p>
            </div>

            {/* Subtle animated glow on the border (optional) */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 
              pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgb(255, 180, 31)',
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;