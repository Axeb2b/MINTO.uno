'use client';

import { useScroll } from '@/hooks/useScroll';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '@/utils/constants';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { isScrolled } = useScroll();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-xl shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-lg">
              M
            </div>
            <div className="hidden sm:block">
              <h1 className="gradient-text font-bold text-xl">Minto.uno</h1>
              <p className="text-xs text-gray-400">Premium DeFi</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block btn-primary"
            >
              Launch App
            </motion.button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
