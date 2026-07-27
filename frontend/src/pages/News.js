import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ExternalLink, Newspaper } from 'lucide-react';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock news data (unchanged)
  const mockPosts = [
    {
      id: 1,
      title: 'Cybersecurity for Small to Medium-sized Businesses',
      author: 'Honeylyn Francisco',
      date: 'Sep 11, 2025',
      excerpt: 'With the implementation of the Network and Information Systems 2...',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
      link: 'https://www.linkedin.com/company/cyberhealth-ie/'
    },
    {
      id: 2,
      title: 'A Practical Guide to Manage Cybersecurity',
      author: 'Honeylyn Francisco',
      date: 'Sep 11, 2025',
      excerpt: 'A thorough cyber risk assessment is the foundation of any effective...',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
      link: 'https://www.linkedin.com/company/cyberhealth-ie/'
    },
    {
      id: 3,
      title: 'Understanding NIS2: A New Era in Cybersecurity',
      author: 'Honeylyn Francisco',
      date: 'Sep 11, 2025',
      excerpt: 'As the digital landscape expands, cybersecurity has become a critical focus for...',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
      link: 'https://www.linkedin.com/company/cyberhealth-ie/'
    },
    {
      id: 4,
      title: 'Why GRC is the Backbone of Modern Cyber Security',
      author: 'Cyberhealth',
      date: '9 months ago',
      excerpt: 'In a world of daily data breaches, evolving regulations, and increasing cyber threats, Governance, Risk, and Compliance (GRC) has become essential...',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      link: 'https://www.linkedin.com/company/cyberhealth-ie/'
    },
    {
      id: 5,
      title: 'Quality Management Isn\'t Just About Standards - It\'s About Security',
      author: 'Cyberhealth',
      date: '9 months ago',
      excerpt: '4 Core Building Blocks of a Strong QMS: Quality Manual, SOPs & Process Flowcharts...',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
      link: 'https://www.linkedin.com/company/cyberhealth-ie/'
    }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111315] via-[#171A1F] to-[#1E2328] text-white">

      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden pt-32 pb-24">
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
            <Newspaper size={18} className="text-[#E8A84D]" />
            <span className="text-sm font-medium text-[#E8A84D]">
              Cybersecurity News & Updates
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8"
          >
            <span className="bg-gradient-to-r from-[#E8A84D] via-[#F4C36D] to-[#D89A3D] bg-clip-text text-transparent">
              NEWSROOM
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto text-lg md:text-xl leading-9 text-gray-300"
          >
            Stay informed on the latest news and updates from the world of cyberspace. Keep yourself up-to-date on emerging trends, technologies, and developments that shape our digital landscape.

          </motion.p>
        </div>
      </section>

      {/* ===== News Grid & CTA ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e8a84d]"></div>
            <p className="mt-4 text-gray-400">Loading news...</p>
          </div>
        ) : (
          <>
            {/* ----- GRID (3 columns) ----- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#e8a84d]/50 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#e8a84d] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[#e8a84d] hover:text-[#d89a3d] transition-colors"
                    >
                      <span>Read more</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* ----- SEPARATOR + LINKEDIN CTA (updated) ----- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-10 border-t border-[#e8a84d]/20"
            >
              <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-[#e8a84d]/10 via-[#f3c16f]/5 to-transparent border border-[#e8a84d]/20 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Connected with Cyberhealth
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                  Follow us on LinkedIn for daily cybersecurity insights, expert tips,
                  and real‑time threat alerts. Join our community of security professionals.
                </p>
                <a
                  href="https://www.linkedin.com/company/cyberhealth-ie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#e8a84d] text-black font-bold py-3 px-10 rounded-full hover:bg-[#f3c16f] transition-colors inline-flex items-center space-x-3 shadow-lg hover:shadow-2xl"
                  >
                    <span>Follow us on LinkedIn</span>
                    <ExternalLink size={20} />
                  </motion.button>
                </a>
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ boxShadow: '0 0 80px rgba(232, 168, 77, 0.2)' }}
                />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default News;