'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Products from '@/components/Products';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

export default function Home() {
  return (
    <>
      {/* Particle Background */}
      <Particles />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-20">
        {/* Hero Section */}
        <Hero />

        {/* How It Works */}
        <HowItWorks />

        {/* Products */}
        <Products />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
