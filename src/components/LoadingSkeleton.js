'use client';

export function CardSkeleton() {
  return (
    <div className="glass p-6 rounded-2xl animate-pulse">
      <div className="h-12 bg-white/10 rounded-lg mb-4"></div>
      <div className="h-4 bg-white/10 rounded-lg mb-3"></div>
      <div className="h-4 bg-white/10 rounded-lg w-3/4"></div>
    </div>
  );
}

export function StatsSkeletons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-10 bg-white/10 rounded-lg w-1/2"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
