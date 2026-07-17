'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/utils/constants';
import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative pt-24 pb-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white">
                M
              </div>
              <div>
                <h3 className="gradient-text font-bold text-lg">Minto.uno</h3>
                <p className="text-xs text-gray-400">Premium DeFi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Revolutionizing decentralized finance with cutting-edge technology.
            </p>
            <div className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>hello@minto.uno</span>
            </div>
          </motion.div>

          {/* Link Sections */}
          {Object.entries(FOOTER_LINKS).map(([title, links], idx) => (
            <motion.div key={title} variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-gray-500 text-sm mb-6 md:mb-0">
            © {currentYear} Minto.uno. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6"
          >
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <span className="text-sm font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 mt-6 md:mt-0"
          >
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Cookies
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"
        />
      </div>
    </footer>
  );
}
