'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { PRODUCTS } from '@/utils/constants';

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="products" className="relative py-24 overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge DeFi solutions designed for maximum yield and security
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              {/* Gradient border background */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}
                style={{
                  background: `linear-gradient(135deg, ${product.gradient === 'from-cyan-500 to-blue-500' ? '#06b6d4, #3b82f6' : product.gradient === 'from-blue-500 to-purple-500' ? '#3b82f6, #a855f7' : product.gradient === 'from-purple-500 to-pink-500' ? '#a855f7, #ec4899' : '#ec4899, #06b6d4'})`,
                }}
              ></div>

              {/* Card */}
              <div className="glass p-8 rounded-2xl h-full flex flex-col card-hover relative z-10">
                {/* Product Header */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent border border-white/10`}
                  >
                    {product.name}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-2 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Learn More →
                </motion.button>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-500 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to get started?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 text-lg"
          >
            Launch App Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
