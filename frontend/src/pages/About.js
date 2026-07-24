import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Honeylyn from './images/Honeylyn-pc.png';
import Rida from './images/Rida-pc.png';
import Rhonnel from './images/Rhonnel-pf.png';
import usePageTitle from '../hooks/usePageTitle';

const About = () => {
  const teamMembers = [
    {
      name: 'Rida',
      title: 'Founder & Head of Cyber',
      image: Rida,
      bio: 'Rida is an industry leader providing broad range of cybersecurity services and thought leadership across IT and Cybersecurity Governance Risk & Compliance, Information Security Controls Implementation, 3rd Party Risk Management, Risk Transformation and Data Protection. A trusted adviser to national and international Cybersecurity Regulators, Rida has delivered end-to-end cybersecurity preparedness and governance services to a wide range of industry and regulatory bodies. Over the years, she has gained broad-ranging experience in cybersecurity risk management, strategy development, and IT project management and assurance reporting with a regulatory focused approach.'
    },
    {
      name: 'Honeylyn',
      title: 'Head of I.T. Assurance',
      image: Honeylyn,
      bio: 'Honeylyn is an experienced IT assurance leader with a strong background in IT audit, risk management, and regulatory compliance. She has led engagements across SOX compliance, IT General Controls (ITGC) testing, Service Organization Controls (SOC) reporting, cybersecurity reviews, and cloud service provider assessments, working with global professional services firms and multinational organizations across finance, technology, retail, and other sectors. As Head of IT Assurance at Cyberhealth, Honeylyn oversees assurance activities that help clients strengthen their control environments, mitigate risks, and achieve sustainable compliance. She brings a balance of technical expertise and strategic insight to deliver trusted, value-driven assurance services.'
    },
    {
      name: 'Rhonnel',
      title: 'Head of Technology',
      image: Rhonnel,
      bio: 'Accomplished IT Industry leader with over Fifteen years of demonstrated career success developing and executing operational strategies to promote organizational growth and optimal utilization of emerging technologies. Extensive experience in leading operations for Technology, Application development, within diverse range of industries. Decisive leader of organizations of varying size and scope. Result oriented professional, recognized for taking on Major initiatives, adapting to rapidly changing environments and resolving mission critical issues to ensure bottom line success.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e8a84d]/20 rounded-full mb-6">
            <Users size={32} className="text-[#e8a84d]" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Meet <span className="text-[#e8a84d]">The Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team combines expertise and passion to deliver trusted cybersecurity, training, and
            IT solutions, helping your business stay secure, skilled, and future-ready.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#e8a84d]/50 transition-all`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e8a84d]/30 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                <p className="text-[#e8a84d] text-lg font-semibold mb-4">{member.title}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-[#e8a84d]/10 to-transparent border border-[#e8a84d]/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">About Cyberhealth</h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Welcome to Cyberhealth, your trusted partner in safeguarding your business against
            cyber threats. We deliver innovative, tailored solutions to help businesses navigate
            the digital landscape with confidence. Explore our services and create a safer, more
            resilient online environment for your organization.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;