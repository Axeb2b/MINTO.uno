'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { STEPS } from '@/utils/constants';

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four simple steps to unlock premium DeFi features
          </p>
        </AnimatedSection>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card */}
              <div className="glass p-8 rounded-2xl h-full flex flex-col card-hover">
                {/* Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-2xl mb-6 flex-shrink-0"
                >
                  {step.id}
                </motion.div>

                {/* Icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 flex-grow">{step.description}</p>

                {/* Arrow indicator for next step */}
                {index < STEPS.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden lg:flex absolute -right-8 top-1/2 transform -translate-y-1/2 text-cyan-400"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Hover background effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connection lines (desktop only) */}
        <svg
          className="hidden lg:block absolute top-1/3 left-0 w-full h-32 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <motion.line
            x1="25%"
            y1="0"
            x2="25%"
            y2="100%"
            stroke="rgba(6, 182, 212, 0.2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="rgba(6, 182, 212, 0.2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="75%"
            y1="0"
            x2="75%"
            y2="100%"
            stroke="rgba(6, 182, 212, 0.2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
    </section>
  );
}
