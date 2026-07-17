'use client';

import { useEffect, useRef, useState } from 'react';
import { useInViewport } from '@/hooks/useScroll';

export default function StatsCounter({ label, value, suffix }) {
  const [ref, isInView] = useInViewport();
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;

    // Extract number from value (e.g., "$500M+" -> 500)
    const numMatch = value.match(/\d+/);
    if (!numMatch) return;

    const targetNum = parseInt(numMatch[0]);
    const duration = 2000;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(targetNum * progress);

      setDisplayValue(`${current}${value.replace(/\d+/, '')}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="glass p-6 rounded-xl text-center hover-glow transition-all duration-300"
    >
      <div className="gradient-text text-3xl md:text-4xl font-bold mb-2">
        {displayValue}
      </div>
      <p className="text-gray-400 text-sm md:text-base">{label}</p>
    </div>
  );
}
