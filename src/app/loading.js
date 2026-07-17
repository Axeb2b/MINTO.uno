import { SectionSkeleton } from '@/components/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="h-40 bg-white/10 rounded-2xl mb-16 animate-pulse"></div>

        {/* Multiple sections */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-24">
            <SectionSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}
